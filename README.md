# English With Mr Phu

Source code for [English With Mr Phu](https://englishwithmrphu.livelyhero.chatgpt.site), including lesson content, illustrations, account pages, authentication routes and verification scripts.

## Build and run

Requires Node.js 20+ and Bash (Git Bash on Windows).

```sh
npm run build
npm run validate
npm start
```

Open `http://localhost:3000/login`. Set `PORT` to change the port. The build generates `worker/index.js`, `dist/` and the image-version manifest from the source and images in `learning/`. Generated deployment bundles are excluded from GitHub and can be rebuilt with the commands above.

## Independent hosting

See [DEPLOYMENT.md](DEPLOYMENT.md) for a Node.js hosting guide and the external Supabase/Auth settings that must be checked before switching domains. A Render service blueprint is included in `render.yaml`.

## Checks

Run after building:

```sh
node scripts/test-games.cjs
node scripts/test-practice-zone.cjs
node scripts/test-listening.cjs
node scripts/test-auth.mjs
node scripts/test-audio-check.cjs
node scripts/test-vocabulary-summary.cjs
```

`learning/` contains lessons, vocabulary, illustrations and games. `content/` retains curriculum review and source metadata. `worker/` contains server routes and account pages. `scripts/` contains build and verification scripts.

## Scope and external services

This repository contains website source and learning assets. It does not contain account records or database backups. The current authentication/profile implementation depends on the existing Supabase project; moving the web server does not migrate that backend or configure email delivery. Updating this repository does not itself deploy the website or configure a custom domain.

Voice availability depends on the device and browser. IPA entries retain the reviewed coverage of the published source; this snapshot does not claim complete Oxford audio or phonetic coverage.
