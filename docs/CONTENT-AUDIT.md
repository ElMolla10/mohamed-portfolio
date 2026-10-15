# Content evidence and publication checklist

Audit performed 2026-10-15 against local source trees in `/Users/mohamedehabelmolla` and the public GAIN and RAGBase repositories. Local working copies may contain changes not yet available on their default remote branches. No project test suite was rerun as part of this portfolio task; test files are evidence of implemented test coverage, not evidence of a fresh passing run.

Local source revisions: GAIN `d17ecb6`, RAGBase `2f8e695`, FPL Edge `7d6078c`. FPL Edge was inspected on `fix/og-image-url`; GitHub links target the public main branch, so local additions may require merging before visitors can reproduce them.

## GAIN

Sources: `gain/README.md`, mobile package.json, engine `progression.ts`, `liveAdaptationInference.ts`, `docs/LIVE-ADAPTATION-V2.md`, `docs/ML-EVALUATION.md`, and `docs/design-screens/README.md`.

- React Native / Expo / TypeScript / expo-sqlite verified from package manifests and source.
- Deterministic next-session progression is separate from experimental next-set XGBoost inference.
- SQLite is the source of truth; Cloudflare/D1 sync is optional.
- Bundled inference and float32 reference parity are documented. Real-user performance, safety and strength gains are not claimed.
- Android prerelease APKs, not app-store publication. iOS device validation is pending.
- PNGs copied from `docs/design-screens` are actual web-rendered application screens using screenshot-only sample data, not native device photographs or field-validation evidence.

## RAGBase

Sources: `ragbase/README.md`, `backend/config.py`, `backend/retrieval.py`.

- Actual provider is Groq / Llama, not Ollama or Gemma.
- all-MiniLM-L6-v2, 384 dimensions, top-k cosine retrieval and optional PostgreSQL full-text RRF.
- Defaults: top_k 5, approximate chunk size 512, overlap 50, response cap 1024 tokens.
- Current README documents Railway. Older local CV describes AWS; current code documentation takes precedence.
- English-oriented embeddings limit Arabic retrieval. No latency, cost or multilingual quality guarantee is published.
- Full-text vectors are computed at query time. GIN indexing and reranking remain future work.
- Hosted availability was not independently checked; maturity text says so.

## FPL Edge

Sources: `FPL-Edge/README.md`, `app/lib/optimizer.ts`, `app/lib/transfer-routes.ts`, `app/lib/team-quality.ts`, `tests/optimizer-constrained.test.mts`, `tests/optimizer-validation.test.mts`.

- Official FPL ingestion, constrained routes, quality gates, model-version cohorts and frozen receipts are documented in the source snapshot.
- Drizzle / D1 and local-first browser persistence, not a Python optimizer backend.
- No verified Elo implementation or real-world rank gain is asserted.

## Identity and experience

The portfolio brief supplies the name Mohamed Ehab, location Cairo, and current infrastructure role at Prosoft. `Downloads/base_cv.md` and `Downloads/huntai_updatedd/data/base_cv.md` supply imody10@gmail.com, github.com/ElMolla10 and linkedin.com/in/mohamed-el-molla. No employment dates or previous ML/DevOps roles were present in those files. The original PDF has been replaced by the exact user-selected `Downloads/Mohamed_ElMolla_AIEngineer_CV.pdf`. SHA-256: `294d62cb3f3e91f489837a359d9c2175b3174519313de40ebae07d65dbd8cbb8`. It is served as `/Mohamed_ElMolla_AIEngineer_CV.pdf`.

## Remaining TODO_VERIFY items

1. Prosoft start date, exact job title and approved responsibilities.
2. Previous ML/DevOps employers, dates and responsibilities.
3. Real-device GAIN screenshots and field-validation results.
4. RAGBase current deployment health and retrieval benchmarks.
5. FPL Edge out-of-sample forecasts and decision-quality results.
6. Supporting repository evidence for PyTorch/Optuna, Ollama/Gemma/Whisper and Prosoft/Linux administration.

No missing metric is replaced with a plausible number. No optional research archive was added without a full audit of those repositories. Skills marked ¹ are disclosed as CV-sourced.

## Identity and hosting revision

The user explicitly selected the replacement AI Engineer CV and provided a LinkedIn screenshot. The portrait asset is a deterministic crop of that photo, with no generated facial changes; screenshot UI is excluded. Mohamed Ehab is now the main H1. Cloudflare Pages project `mohamed-ehab-portfolio` has been created, reserving `https://mohamed-ehab-portfolio.pages.dev`. Canonical, OpenGraph/Twitter, robots and sitemap use this real origin; no localhost URL is exported. The app exports static files to `out/` for Cloudflare hosting.
