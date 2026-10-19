export interface Source {
  label: string;
  url: string;
}
export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  maturity: string;
  headline: string;
  problem: string;
  architecture: string[];
  challenges: string;
  outcomes: string;
  limitations: string;
  stack: string[];
  sources: Source[];
  validation: string;
}
export const gain = {
  name: "GAIN",
  maturity: "Mobile prerelease",
  headline: "Gym App with AI Intelligence. Even Offline.",
  description:
    "An Arabic + English strength-training app that turns logged sets into an explicit plan for what comes next. Local persistence, deterministic progression, and experimental on-device adaptation in one complete product.",
  stack: ["React Native", "Expo", "TypeScript", "SQLite", "XGBoost", "Vitest"],
  sources: [
    { label: "Explore repository", url: "https://github.com/ElMolla10/gain" },
    {
      label: "Model & evaluation",
      url: "https://github.com/ElMolla10/gain/blob/main/docs/ML-EVALUATION.md",
    },
  ],
  tabs: [
    {
      id: "inference",
      title: "On-device inference",
      eyebrow: "01 / INTELLIGENCE",
      headline: "A rule sets the plan. A model handles the next set.",
      body: "A pure TypeScript engine calculates next-session progression from trusted working sets, rep ranges, equipment increments, and rejection history. A bundled experimental XGBoost model predicts next-set rep changes locally, without a network inference call.",
      detail:
        "The model is interpreted directly in TypeScript with float32 precision and tree-traversal logic. Comprehensive unit tests verify full parity with the exported offline model contract.",
      file: "packages/engine/src/liveAdaptationInference.ts",
      nodes: ["Mobile UI", "SQLite state", "Local inference"],
      note: "Deterministic guardrails · User-in-the-loop overrides · On-device execution",
    },
    {
      id: "offline",
      title: "Offline-first architecture",
      eyebrow: "02 / PERSISTENCE",
      headline: "The phone is the source of truth.",
      body: "Expo SQLite persists workouts locally. Client-generated UUIDs, updated_at timestamps, and deletion markers support optional sync through a shared protocol and a Cloudflare Worker backed by D1.",
      detail:
        "Saved sets are re-read before adaptation. Sessions reconstruct state from local SQLite, while edits and deletions dynamically refresh progression suggestions. Logging and rest timers run entirely offline.",
      file: "apps/mobile/src/sync/schema.ts",
      nodes: ["Workout logger", "Local SQLite", "Optional D1 sync"],
      note: "Local writes first · resumable sessions · zero mandatory accounts",
    },
    {
      id: "evaluation",
      title: "Adaptation & evaluation",
      eyebrow: "03 / VALIDATION",
      headline: "Freeze the forecast. Then observe the outcome.",
      body: "The first eligible pre-outcome forecast is frozen locally. Model and baseline MAE are compared on the same matched observations. Edited, skipped, or invalidated sets are excluded through a shared eligibility filter.",
      detail:
        "The decision engine enforces safe progression increments, respects discrete gym equipment steps, and guarantees fallback to baseline progression whenever user override is applied.",
      file: "apps/mobile/scripts/ml-evaluation-report.ts",
      nodes: ["Frozen forecast", "Matched outcome", "Paired baselines"],
      note: "Deterministic guardrails · Discrete equipment calibration · Offline first",
    },
  ],
  localizationLabel: "Arabic + English · direction-aware interface",
  demo: {
    src: "/videos/gain-iphone-live-adaptation.mp4",
    poster: "/images/gain-iphone-ai-poster.webp",
    captions: "/captions/gain-iphone-demo-en.vtt",
    label:
      "GAIN iPhone demo: log a set and apply a lighter next-set recommendation",
    durationLabel: "16 SEC",
    caption: "Real iPhone recording · on-device next-set adaptation",
    description:
      "27.5 kg × 4 reps logged. GAIN suggests 25 kg for the next set, and the suggestion is applied seamlessly.",
    walkthrough: [
      "00:00 — Start a workout on iPhone.",
      "00:02 — Enter 27.5 kg and 4 reps, then save the set.",
      "00:07 — Experimental AI displays a lighter next-set suggestion: 25 kg.",
      "00:09 — Apply the suggestion and continue logging at 25 kg.",
    ],
  },
  screenshotCaption:
    "Interactive UI previews · Real-time set progression & Arabic localization",
  validation:
    "The recorded iPhone interaction demonstrates local workout logging, real-time load adaptation, and explicit user-controlled application without cloud dependency.",
} as const;
export const projects: Project[] = [
  {
    id: "ragbase",
    number: "02",
    name: "RAGBase",
    category: "RETRIEVAL SYSTEMS",
    maturity: "Deployed on Railway · earlier AWS implementation",
    headline: "From documents to answers you can trace.",
    problem:
      "Make research papers queryable while preserving source-page citations and visibility into each request.",
    architecture: [
      "PDF / chunks",
      "MiniLM · 384d",
      "pgvector",
      "Groq / citations",
    ],
    challenges:
      "Page-preserving chunk boundaries, bounded overlap, and context selection. Top-k cosine retrieval is the default; optional PostgreSQL full-text retrieval uses reciprocal rank fusion rather than mixing score scales.",
    outcomes:
      "Current deployment runs on Railway with FastAPI, PostgreSQL/pgvector, Streamlit, Docker, and GitHub Actions. Implemented PDF ingestion, cited answers, document filtering, and query telemetry. The earlier AWS implementation utilized EC2, RDS PostgreSQL 16 with pgvector (IVFFlat), and S3; memory-bounded container scheduling enabled reliable operation on 2 GB RAM host instances.",
    limitations:
      "Arabic retrieval is limited by English-oriented embedding pre-training. Current architecture leverages sentence-transformers with pgvector; future iterations will integrate multilingual Arabic dense models and cross-encoder reranking.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "sentence-transformers",
      "Groq",
      "Docker",
      "Railway",
    ],
    sources: [
      { label: "Source code", url: "https://github.com/ElMolla10/ragbase" },
      {
        label: "Retrieval implementation",
        url: "https://github.com/ElMolla10/ragbase/blob/master/backend/retrieval.py",
      },
    ],
    validation:
      "Document ingestion, cited retrieval, and query telemetry are operational; formal multi-domain benchmarks have not yet been established.",
  },
  {
    id: "fpl-edge",
    number: "03",
    name: "FPL Edge",
    category: "DECISION ENGINEERING",
    maturity: "Hosted implementation · forecast model experimental",
    headline: "Better decisions under real constraints.",
    problem:
      "Turn noisy football data into explainable squad choices and legal multi-gameweek transfer strategies.",
    architecture: [
      "Official FPL API",
      "Player projections",
      "Route search",
      "Frozen audit",
    ],
    challenges:
      "Search 3, 5, or 8-gameweek routes while carrying squad legality, bank, selling values, free transfers, and hit costs. A quality gate keeps low-confidence candidates from becoming headline recommendations.",
    outcomes:
      "Implemented route explanations, legal bench-order optimization, and immutable prediction receipts. History derives calibration from official completed gameweeks and separates model-version cohorts.",
    limitations:
      "Projections are data-driven heuristic models with multi-gameweek route optimization. Evaluated against official historical gameweek results with calibrated decision auditing.",
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "Cloudflare",
      "Drizzle / D1",
      "Official FPL API",
    ],
    sources: [
      { label: "Source code", url: "https://github.com/ElMolla10/FPL-Edge" },
      {
        label: "Optimizer implementation",
        url: "https://github.com/ElMolla10/FPL-Edge/blob/main/app/lib/optimizer.ts",
      },
    ],
    validation:
      "Multi-gameweek route optimization, squad legality checks, and transfer decision audits are fully operational across official Premier League data.",
  },
];
