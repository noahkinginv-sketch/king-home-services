# King Home Services

Official website for King Home Services.

## Estimate request notifications

The estimate form requires Cloudflare Turnstile verification and a hidden
honeypot field. It can be activated in stages: with Resend and Turnstile
configured, requests are emailed; after all Twilio settings are added, SMS
alerts are sent first, followed by email. The form stays inactive without the
Turnstile site key, and the API rejects requests if the email or spam
protection services are unavailable.

### Stage 1: email notifications

1. Create a Resend account, verify `kinghomeservicestn.com` by adding the DNS
   records Resend provides, and create an API key.
2. Create a Cloudflare Turnstile widget for `localhost` and the production
   domain. Copy its site key and secret key. Turnstile is required even during
   email-only testing.
3. Copy `.env.example` to `.env.local` and fill in
   `RESEND_API_KEY`, `RESEND_FROM_EMAIL` (an address on the verified domain),
   `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, and `TURNSTILE_SECRET_KEY`. The email
   notification destination is prefilled as `info@kinghomeservicestn.com`.
   Leave the four `TWILIO_*`/SMS settings blank for this first stage.
4. Restart the development server with `npm run dev` and submit a test request.

Resend currently offers a free transactional tier (3,000 emails per month,
100 per day); paid plans are available. See
[Resend pricing](https://resend.com/pricing).

### Stage 2: SMS notifications

Create a Twilio account, enable an SMS-capable sender, and fill in
`TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, and `TWILIO_FROM_NUMBER`. The
destination is prefilled as `+19319961635`. Set all four SMS-related settings
at once (a partially configured set is rejected). The sender must be allowed
to text the destination; US senders may need A2P 10DLC registration. Twilio
SMS is pay-as-you-go, with message and phone-number fees that vary by sender
type and destination. Check [Twilio US SMS pricing](https://www.twilio.com/en-us/sms/pricing/us).

Cloudflare Turnstile's Free plan includes widgets and verification challenges
for typical small-business use. See
[Turnstile plans](https://developers.cloudflare.com/turnstile/plans/).

Keep `.env.local` private; it is ignored by Git. Only the Turnstile site key is
public. Twilio credentials, the Turnstile secret, and the Resend API key are
used only by the server-side route. Uploaded photos are attached to the email
and are limited to four JPEG, PNG, or WebP images, up to 1 MB each and 3.5 MB
total; files are not retained or hosted as links.

For deployment, configure the same environment variables in the hosting
provider's server-side settings and add the deployed domain to the Turnstile
widget. No live deployment is performed by this project change.
