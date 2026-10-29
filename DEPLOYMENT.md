# Independent deployment

This repository can be run as a Node.js web service without ChatGPT Sites. The current application still uses the existing Supabase project for authentication and profile data; moving the web server does **not** migrate that database or email delivery configuration.

## Requirements

- Node.js 20 or newer
- npm (no third-party runtime packages are required)
- Access to the Supabase project currently configured in `worker/auth.js`

## Run locally

```bash
npm run build
npm run validate
npm start
```

Open `http://localhost:3000/login`. The root route redirects to sign-in when there is no active session.

The build runs `scripts/embed.mjs`, which generates the ignored `worker/index.js` file by embedding the lesson assets, then builds the validation artifact under `dist/`. Do not commit generated bundles or account data.

## Deploy to Render

1. Create a **Web Service** from this GitHub repository: https://github.com/qphu2308/ENGLISH-MR-PHU
2. Select the Node runtime.
3. Set **Build Command** to `npm run build`.
4. Set **Start Command** to `npm start`.
5. Set the health-check path to `/login`.
6. Use Node.js 20 or newer. The generated worker bundle embeds lesson images and is large; deploy as a persistent Node web service rather than a static-only site or a serverless platform with a small per-function bundle limit.
7. After the service receives its public HTTPS URL, update the Supabase Auth site URL and allowed redirect URLs to include that domain (including `/login` where required by the current flow).
8. Verify email/OTP delivery, login, logout, profile updates, account blocking, and the administrator page before switching the public domain.

## Backend dependencies to verify

The app currently calls the Supabase project and profile table directly from `worker/auth.js`. A separate hosting deployment still depends on:

- The existing Supabase project remaining available.
- The `ewmp_profiles` table and its columns/policies matching the app.
- Supabase Auth URL allowlists, email provider/SMTP settings, and OTP settings being configured for the new domain.
- The administrator email constant in `worker/auth.js` matching the intended administrator account.

The repository does not include a database backup, schema migration, user accounts, or a replacement backend. Do not point the production domain at the new host until the login and account flows have been tested.

## Notes

- `worker/index.js` is generated and ignored by Git; run `npm run build` before `npm start`.
- The adapter uses Node.js Web APIs (`Request`, `Response`, `fetch`) and expects a modern Node runtime.
- Use HTTPS in production. The session cookies are marked `Secure`.
- Keep database records and any privileged backend credentials out of the public repository. The Supabase publishable/anonymous key used by the current app is not a service-role key, but its database policies must still be correct.
