# English With Mr Phu

Source snapshot of published Sites version 37 (91c2c37972391576765f58c023be579e7ee38355).

## Build
Requires Node.js and Bash (Git Bash on Windows).

```sh
node scripts/embed.mjs
npm run build
npm run validate
```

The generated worker/index.js and dist/ are rebuilt from learning/ and worker/ source files.

## Checks
```sh
node scripts/test-games.cjs
node scripts/test-practice-zone.cjs
node scripts/test-vocabulary-review.cjs
```

learning/ contains the lessons, vocabulary and image assets. content/ retains curriculum review and source metadata. worker/ contains server routes and account pages. scripts/ contains build and verification scripts.

This is source code, not a database or account-data backup. Hosting runtime configuration must be provided separately for another deployment. Uploading this repository alone does not deploy the website or configure GitHub Pages. Pronunciation coverage is the published v37 state; later Oxford review is not included.
