"use client";

import Script from "next/script";
import { FormEvent, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          theme: "light";
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

const serviceOptions = [
  "General Handyman Services",
  "Home Repairs",
  "TV Mounting",
  "Furniture Assembly",
  "Painting",
  "Fixture Installation",
  "Property Maintenance",
  "Other",
];

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function EstimateRequestForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(
    null,
  );

  useEffect(() => {
    if (
      !siteKey ||
      !scriptReady ||
      !captchaRef.current ||
      !window.turnstile ||
      widgetIdRef.current
    ) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(captchaRef.current, {
      sitekey: siteKey,
      theme: "light",
      callback: (token) => {
        setCaptchaToken(token);
        setCaptchaError("");
      },
      "expired-callback": () => {
        setCaptchaToken("");
        setCaptchaError("Please complete the spam check again.");
      },
      "error-callback": () => {
        setCaptchaToken("");
        setCaptchaError("The spam check could not load. Please refresh and try again.");
      },
    });
  }, [scriptReady]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(null);

    if (!captchaToken) {
      setCaptchaError("Please complete the spam check before submitting.");
      return;
    }

    setSubmitting(true);
    try {
      const formData = new FormData(event.currentTarget);
      formData.set("turnstileToken", captchaToken);
      const response = await fetch("/api/estimate-requests", {
        method: "POST",
        body: formData,
      });
      const payload: { message?: string } = await response.json();

      if (!response.ok) {
        setResult({
          ok: false,
          message:
            payload.message ??
            "We couldn't send your request. Please call or text (931) 996-1635.",
        });
        if (window.turnstile && widgetIdRef.current) {
          window.turnstile.reset(widgetIdRef.current);
        }
        setCaptchaToken("");
        return;
      }

      formRef.current?.reset();
      setCaptchaToken("");
      setResult({
        ok: true,
        message:
          payload.message ??
          "Your estimate request was sent. We'll be in touch soon.",
      });
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
      }
    } catch {
      setResult({
        ok: false,
        message:
          "We couldn't reach the request service. Please call or text (931) 996-1635.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const inputClassName =
    "mt-2 w-full rounded-lg border border-[#d7d5cf] bg-white px-3.5 py-2.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#b8860b] focus:ring-2 focus:ring-[#d4af37]/30";
  const labelClassName = "block text-sm font-semibold text-gray-800";

  return (
    <div
      id="estimate-form"
      className="mx-auto mt-0 w-full max-w-none scroll-mt-28 p-0 text-left"
    >
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b8860b]">
          Start Your Project
        </p>
        <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
          Request a Free Estimate
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Tell us a little about your project and we&apos;ll follow up with you
          shortly.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4"
        encType="multipart/form-data"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className={labelClassName}>
            Full Name <span className="text-red-700">*</span>
            <input
              className={inputClassName}
              name="fullName"
              autoComplete="name"
              maxLength={100}
              required
            />
          </label>
          <label className={labelClassName}>
            Phone Number <span className="text-red-700">*</span>
            <input
              className={inputClassName}
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={30}
              required
            />
          </label>
          <label className={labelClassName}>
            Email Address <span className="text-red-700">*</span>
            <input
              className={inputClassName}
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              required
            />
          </label>
          <label className={labelClassName}>
            City or ZIP Code <span className="text-red-700">*</span>
            <input
              className={inputClassName}
              name="location"
              autoComplete="postal-code"
              maxLength={100}
              required
            />
          </label>
          <label className={labelClassName}>
            Service Needed
            <select className={inputClassName} name="service" defaultValue="">
              <option value="">Select a service (optional)</option>
              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
          <label className={labelClassName}>
            Preferred Service Date
            <input
              className={inputClassName}
              name="preferredDate"
              type="date"
            />
          </label>
        </div>

        <label className={labelClassName}>
          Project Description <span className="text-red-700">*</span>
          <textarea
            className={`${inputClassName} min-h-32 resize-y`}
            name="description"
            rows={5}
            maxLength={3000}
            required
          />
          <span className="mt-1 block text-xs font-normal text-gray-500">
            Please do not include payment details or other sensitive information.
          </span>
        </label>

        <label className={labelClassName}>
          Upload Project Photos{" "}
          <span className="font-normal text-gray-500">(optional)</span>
          <input
            className="mt-2 block w-full cursor-pointer rounded-lg border border-[#d7d5cf] bg-white text-sm text-gray-700 file:mr-4 file:border-0 file:bg-[#fff8e1] file:px-3 file:py-2.5 file:font-semibold file:text-gray-900 hover:file:bg-[#fdf2c7]"
            name="photos"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
          />
          <span className="mt-1 block text-xs font-normal text-gray-500">
            Up to 4 JPEG, PNG, or WebP images, 1 MB each.
          </span>
        </label>

        <div>
          {siteKey ? (
            <>
              <p className="mb-2 text-sm font-semibold text-gray-800">
                Spam protection
              </p>
              <div ref={captchaRef} />
              <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
                strategy="afterInteractive"
                onLoad={() => setScriptReady(true)}
                onError={() =>
                  setCaptchaError(
                    "The spam check could not load. Please refresh and try again.",
                  )
                }
              />
            </>
          ) : (
            <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-950">
              The estimate form is not active yet. The site owner needs to
              configure spam protection and notification services.
            </p>
          )}
          {captchaError && (
            <p className="mt-2 text-sm text-red-700" role="alert">
              {captchaError}
            </p>
          )}
        </div>

        <div className="hidden" aria-hidden="true">
          <label>
            Leave this field empty
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <button
          className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#d4af37] px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-[#e0b73f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8860b] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          type="submit"
          disabled={submitting || !siteKey}
        >
          {submitting ? "Sending Request..." : "Submit Estimate Request"}
        </button>

        {result && (
          <p
            className={`rounded-xl p-4 text-sm ${
              result.ok
                ? "bg-green-50 text-green-900"
                : "bg-red-50 text-red-900"
            }`}
            role="status"
            aria-live="polite"
          >
            {result.message}
          </p>
        )}
      </form>
    </div>
  );
}
