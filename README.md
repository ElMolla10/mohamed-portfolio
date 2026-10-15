# Mohamed Ehab — engineering portfolio

**Public Cloudflare Pages origin:** https://mohamed-ehab-portfolio.pages.dev

Next.js App Router, strict TypeScript, Tailwind CSS 4, Framer Motion, Lucide, Geist and JetBrains Mono. Static export, source-backed case studies, and no application server or runtime API credentials.

## Develop

Node 22.13+ and npm; supports macOS / Apple Silicon.

```sh
npm ci
npm run dev
```

The development server is a local preview only. The published website is hosted by Cloudflare.

## Build and preview the exact Cloudflare artifact

```sh
npm run lint
npm run typecheck
npm run build
npm run preview:cloudflare
```

`next build` exports into `out/`. Images and fonts are self-hosted; image sizing and client interactions work without Next.js server processes. Wrangler serves the exported artifact using Cloudflare's local runtime. `npm start` also runs this preview.

## Deploy to Cloudflare

The Pages project `mohamed-ehab-portfolio` has been created in the connected account.

```sh
npx wrangler login
npm run deploy
```

The deploy script builds the static export and uploads `out/` to Cloudflare Pages. Set `NEXT_PUBLIC_SITE_URL` to a custom domain before building if adding one. By default, canonical URLs, OpenGraph/Twitter cards, sitemap and robots use the actual Pages origin above. No localhost origin is embedded in the exported page.

For Git integration in the Cloudflare dashboard: select **Next.js (Static HTML Export)**, build command **npm run build**, output directory **out**, production branch **main**. `wrangler.jsonc` also declares the output directory. See [Cloudflare's static Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/).

## Content and assets

- `src/data/siteConfig.ts`: identity, verified Cloudflare origin, contact, portrait and CV paths.
- `src/data/copy.ts`: hero and about copy.
- `src/data/projects.ts`: GAIN tabs and RAGBase/FPL Edge case studies.
- `src/data/experience.ts`: current user-supplied role, project work and pending employment details.
- `src/data/skills.ts`: six capability domains and evidence links. `¹` means CV-sourced, not independently repository-audited.
- `public/Mohamed_ElMolla_AIEngineer_CV.pdf`: exact user-selected October 15 replacement PDF.
- `public/images/mohamed-ehab.webp`: portrait cropped from the user-supplied LinkedIn screenshot, without synthesizing or retouching the face. Browser and LinkedIn interface content are excluded. Circular framing happens in CSS.

Search `TODO_VERIFY` for missing employment details and project-validation results. Domain and CV-selection checks have been resolved. GAIN screenshots remain explicitly labeled repository web renders using sample data.

## Browser verification

```sh
npx playwright install chromium
npm run build
npm run preview:cloudflare
# In a second terminal:
npm run test:e2e
```

The suite checks layouts from 320 to 1920px, name and portrait visibility, keyboard tabs, mobile navigation, contact clipboard, exact CV SHA-256, metadata, canonical origin, reduced motion, and automated WCAG checks on desktop and mobile. `npm run format:check` checks formatting.

## Published research and complete CV

`src/data/research.ts` owns publication metadata, IEEE/source links and exact benchmarks. `src/data/additionalProjects.ts` contains the thesis trading engine, MALIK/Arabic ASR and price-intelligence cases. `src/data/credentials.ts` contains education, coursework and Scale Computing credentials. Employment dates and responsibilities now come from the selected PDF, and the current RAGBase deployment remains Railway. See `docs/CONTENT-AUDIT.md` for a field-by-field CV coverage map and source discrepancies.

The research section also provides `public/research/IMSA-2026-Sentiment-Modulation.pdf`, a four-page native Word export of the user-provided camera-ready manuscript. The download and IEEE Xplore links remain separate. Cloudflare serves the PDF with an attachment filename; the browser suite verifies its bytes and the actual download event.
