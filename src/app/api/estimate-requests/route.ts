export const runtime = "nodejs";

const MAX_REQUEST_BYTES = 4 * 1024 * 1024;
const MAX_PHOTO_COUNT = 4;
const MAX_PHOTO_BYTES = 1024 * 1024;
const MAX_TOTAL_PHOTO_BYTES = 3.5 * 1024 * 1024;
const ALLOWED_MIME_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const SERVICE_OPTIONS = new Set([
  "General Handyman Services",
  "Home Repairs",
  "TV Mounting",
  "Furniture Assembly",
  "Painting",
  "Fixture Installation",
  "Property Maintenance",
  "Other",
]);

class RequestTooLargeError extends Error {}

type EstimateRequest = {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  description: string;
  preferredDate: string;
  turnstileToken: string;
};

function response(message: string, status: number) {
  return Response.json({ message }, { status });
}

async function readFormData(request: Request) {
  const reader = request.body?.getReader();
  if (!reader) throw new Error("A form body is required.");

  const chunks: Uint8Array[] = [];
  let totalBytes = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    totalBytes += value.byteLength;
    if (totalBytes > MAX_REQUEST_BYTES) {
      await reader.cancel();
      throw new RequestTooLargeError();
    }
    chunks.push(value);
  }

  const bytes = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  const boundedRequest = new Request(request.url, {
    method: "POST",
    headers: request.headers,
    body: bytes.buffer,
  });
  return boundedRequest.formData();
}

function cleanText(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim().replace(/\r\n?/g, "\n") : "";
}

function isValidEmail(value: string) {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

function isValidDate(value: string) {
  if (!value) return true;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.valueOf()) && date.toISOString().startsWith(value);
}

async function hasValidImageSignature(file: File) {
  const bytes = new Uint8Array(await file.slice(0, 12).arrayBuffer());
  if (file.type === "image/jpeg") {
    return bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  }
  if (file.type === "image/png") {
    return (
      bytes[0] === 0x89 &&
      bytes[1] === 0x50 &&
      bytes[2] === 0x4e &&
      bytes[3] === 0x47 &&
      bytes[4] === 0x0d &&
      bytes[5] === 0x0a &&
      bytes[6] === 0x1a &&
      bytes[7] === 0x0a
    );
  }
  if (file.type === "image/webp") {
    return (
      String.fromCharCode(...bytes.slice(0, 4)) === "RIFF" &&
      String.fromCharCode(...bytes.slice(8, 12)) === "WEBP"
    );
  }
  return false;
}

async function verifyTurnstile(token: string, secret: string) {
  const body = new URLSearchParams({ secret, response: token });
  const result = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body,
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    },
  );
  if (!result.ok) return false;
  const verification: { success?: boolean } = await result.json();
  return verification.success === true;
}

async function sendSms(request: EstimateRequest) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  const to = process.env.ESTIMATE_NOTIFICATION_PHONE;
  if (!accountSid || !authToken || !from || !to) {
    throw new Error("SMS notifications are not configured.");
  }

  const summary = [
    `New estimate request from ${request.fullName}.`,
    `Phone: ${request.phone}`,
    `Email: ${request.email}`,
    `Location: ${request.location}`,
    `Service: ${request.service || "Not specified"}`,
    `Description: ${request.description.slice(0, 500)}`,
    request.preferredDate ? `Preferred date: ${request.preferredDate}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const form = new URLSearchParams({ To: to, From: from, Body: summary });
  const result = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${encodeURIComponent(accountSid)}/Messages.json`,
    {
      method: "POST",
      headers: {
        authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
        "content-type": "application/x-www-form-urlencoded",
      },
      body: form,
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    },
  );
  if (!result.ok) {
    console.error("Twilio estimate notification failed with status", result.status);
    throw new Error("SMS notification failed.");
  }
}

async function sendEmail(request: EstimateRequest, photos: File[]) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.ESTIMATE_NOTIFICATION_EMAIL;
  if (!apiKey || !from || !to) {
    throw new Error("Email notifications are not configured.");
  }

  const attachments = await Promise.all(
    photos.map(async (photo) => ({
      filename: photo.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 100),
      content: Buffer.from(await photo.arrayBuffer()).toString("base64"),
      content_type: photo.type,
    })),
  );
  const text = [
    "A new estimate request was submitted.",
    "",
    `Name: ${request.fullName}`,
    `Phone: ${request.phone}`,
    `Email: ${request.email}`,
    `City or ZIP Code: ${request.location}`,
    `Service Needed: ${request.service || "Not specified"}`,
    `Preferred Service Date: ${request.preferredDate || "Not specified"}`,
    "",
    "Project Description:",
    request.description,
    "",
    `Project photos attached: ${photos.length}`,
  ].join("\n");

  const result = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: "New King Home Services estimate request",
      text,
      reply_to: request.email,
      attachments,
    }),
    signal: AbortSignal.timeout(10_000),
    cache: "no-store",
  });
  if (!result.ok) {
    console.error("Resend estimate notification failed with status", result.status);
    throw new Error("Email notification failed.");
  }
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return response("The request is too large. Please reduce the photo sizes and try again.", 413);
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (
    !turnstileSecret ||
    !process.env.RESEND_API_KEY ||
    !process.env.RESEND_FROM_EMAIL ||
    !process.env.ESTIMATE_NOTIFICATION_EMAIL
  ) {
    console.error("Estimate request notifications are not fully configured.");
    return response(
      "Estimate requests are not available yet. Please call or text (931) 996-1635.",
      503,
    );
  }

  const smsSettings = [
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN,
    process.env.TWILIO_FROM_NUMBER,
    process.env.ESTIMATE_NOTIFICATION_PHONE,
  ];
  const hasAnySmsSetting = smsSettings.some(Boolean);
  const hasAllSmsSettings = smsSettings.every(Boolean);
  if (hasAnySmsSetting && !hasAllSmsSettings) {
    console.error("SMS notification settings are only partially configured.");
    return response(
      "SMS notifications are only partially configured. Please contact the site owner.",
      503,
    );
  }

  let formData: FormData;
  try {
    formData = await readFormData(request);
  } catch (error) {
    if (error instanceof RequestTooLargeError) {
      return response("The request is too large. Please reduce the photo sizes and try again.", 413);
    }
    return response("The submitted form data could not be read. Please try again.", 400);
  }

  if (cleanText(formData.get("website"))) {
    return response("The request could not be verified. Please try again.", 400);
  }

  const fields: EstimateRequest = {
    fullName: cleanText(formData.get("fullName")),
    phone: cleanText(formData.get("phone")),
    email: cleanText(formData.get("email")),
    location: cleanText(formData.get("location")),
    service: cleanText(formData.get("service")),
    description: cleanText(formData.get("description")),
    preferredDate: cleanText(formData.get("preferredDate")),
    turnstileToken: cleanText(formData.get("turnstileToken")),
  };

  if (
    !fields.fullName ||
    fields.fullName.length > 100 ||
    !isValidPhone(fields.phone) ||
    fields.phone.length > 30 ||
    !isValidEmail(fields.email) ||
    !fields.location ||
    fields.location.length > 100 ||
    (fields.service && !SERVICE_OPTIONS.has(fields.service)) ||
    !fields.description ||
    fields.description.length > 3000 ||
    !isValidDate(fields.preferredDate) ||
    fields.turnstileToken.length > 2048
  ) {
    return response("Please check the required fields and try again.", 400);
  }

  if (!fields.turnstileToken) {
    return response("Please complete the spam check before submitting.", 400);
  }

  let verified: boolean;
  try {
    verified = await verifyTurnstile(fields.turnstileToken, turnstileSecret);
  } catch {
    console.error("Cloudflare Turnstile verification could not be reached.");
    return response("Spam protection is temporarily unavailable. Please try again shortly.", 503);
  }
  if (!verified) {
    return response("The spam check could not be verified. Please try again.", 400);
  }

  const photos = formData.getAll("photos").filter((value): value is File => value instanceof File && value.size > 0);
  if (photos.length > MAX_PHOTO_COUNT) {
    return response(`Please upload no more than ${MAX_PHOTO_COUNT} project photos.`, 400);
  }
  let totalPhotoBytes = 0;
  for (const photo of photos) {
    totalPhotoBytes += photo.size;
    if (
      !ALLOWED_MIME_TYPES.has(photo.type) ||
      photo.size > MAX_PHOTO_BYTES ||
      !(await hasValidImageSignature(photo))
    ) {
      return response("Photos must be JPEG, PNG, or WebP images no larger than 1 MB each.", 400);
    }
  }
  if (totalPhotoBytes > MAX_TOTAL_PHOTO_BYTES) {
    return response("Please keep the combined photo size under 3.5 MB.", 400);
  }

  const smsEnabled = hasAllSmsSettings;
  if (!smsEnabled) {
    try {
      await sendEmail(fields, photos);
    } catch {
      console.error("Estimate request email delivery failed.");
      return response(
        "We couldn't send your request. Please call or text (931) 996-1635.",
        502,
      );
    }
    return Response.json({
      message: "Your estimate request was sent. We'll be in touch soon.",
    });
  }

  let smsSent = false;
  try {
    await sendSms(fields);
    smsSent = true;
  } catch {
    console.error("Estimate request SMS delivery failed.");
  }

  let emailSent = false;
  try {
    await sendEmail(fields, photos);
    emailSent = true;
  } catch {
    console.error("Estimate request email delivery failed.");
  }

  if (smsSent && emailSent) {
    return Response.json({
      message: "Your estimate request was sent. We'll be in touch soon.",
    });
  }
  if (smsSent) {
    return response(
      "Your request reached us by text, but the email notification failed. Please contact us if you need a copy of your request.",
      502,
    );
  }
  if (emailSent) {
    return response(
      "Your request reached us by email, but our text alert failed. Please call (931) 996-1635 if you need immediate assistance.",
      502,
    );
  }
  return response(
    "We couldn't deliver your request notifications. Please call or text (931) 996-1635.",
    502,
  );
}
