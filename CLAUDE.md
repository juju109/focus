# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Landing page for **포커스특공대**, a Korean "소수정예" (boutique) performance-advertising
agency, built as a **React + Vite** single-page app and deployed as a static site to
**GitHub Pages** at `https://juju109.github.io/focus/`. All content is in Korean.

`page.html` is the original single-file design and is kept only as a reference — it is **not**
part of the build (Vite's entry is `index.html`).

## Commands

- `npm install` — install deps (this machine wraps npm with an allow-scripts guard; if `esbuild`
  is blocked, run `npm approve-scripts esbuild`. Plain npm/CI is unaffected.)
- `npm run dev` — local dev server
- `npm run build` — static build to `dist/`
- `npm run preview -- --port 4173` — serve the built `dist/`. Note the base path: the app is at
  `http://localhost:4173/focus/`, not `/`.

## Architecture

- **Vite `base: '/focus/'`** (`vite.config.js`) — required because this is a *project page*
  served under the repo name `focus`. Reference public assets via `import.meta.env.BASE_URL`,
  not root-absolute paths.
- **HashRouter** (`src/main.jsx`) — chosen so GitHub Pages needs no SPA 404 rewrite. Because the
  router owns the URL hash, **section navigation does not use `#id` anchors**. Nav clicks call
  `scrollToId(id)` (`src/scroll.js` → `scrollIntoView`). Sections keep their `id`s
  (`home`, `about`, `philosophy`, `values`, `organization`, `services`, `portfolio`, `contact`);
  keep the nav list and section ids in sync.
- **Single route** `/` → `src/pages/Landing.jsx`, which composes one component per section in
  `src/components/` (Nav, Hero, Media, About, Services, Portfolio, Contact, Footer).
- **Styling**: the entire original `<style>` block lives verbatim in `src/index.css` as global
  CSS (class names preserved, CSS-variable design tokens in `:root`). Keep using these tokens
  and classes rather than introducing CSS modules or new hex values.
- Icons are inline SVG using `stroke:currentColor` / `fill:none` — style the parent, not the SVG.
- Pretendard font loads from a jsDelivr CDN `<link>` in `index.html` (the only external dep).

## Contact form / email (`src/components/InquiryForm.jsx`)

- Reads Vite envs `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`,
  `VITE_EMAILJS_PUBLIC_KEY`, `VITE_CONTACT_EMAIL`.
- If all three EmailJS vars are present → sends via `@emailjs/browser`. Otherwise → falls back to
  the original `mailto:` behavior (using `VITE_CONTACT_EMAIL`).
- EmailJS `params` (`company`, `manager`, `contact_info`, `budget`, `detail`) must match the
  variable names configured in the EmailJS template.
- **Security**: this is a static site — any env injected at build time is visible in the public
  JS bundle. That's acceptable for EmailJS (its public key is client-safe); the real safeguard is
  the **domain allowlist in the EmailJS dashboard** (`juju109.github.io`). Do not attempt to hide
  a truly-secret key here — it cannot be hidden in a static build.

## Deploy (`.github/workflows/deploy.yml`)

Push to `main` → GitHub Actions builds and deploys to Pages. Email envs come from repo **Secrets**
(`EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`, `VITE_CONTACT_EMAIL`) and are
injected into the build step. Pages source must be set to **GitHub Actions**
(the workflow attempts this via `configure-pages` `enablement: true`).
