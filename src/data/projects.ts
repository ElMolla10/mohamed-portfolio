import type { Verification } from "./siteConfig";
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
  verification?: Verification;
}
export const gain = {
  name: "GAIN",
  maturity: "Android prerelease",
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
        "The model is interpreted in TypeScript with float32 behavior and missing-value traversal. Reference parity tests verify the exported model contract; they do not establish real-world prediction accuracy.",
      file: "packages/engine/src/liveAdaptationInference.ts",
      nodes: ["Mobile UI", "SQLite state", "Local inference"],
      note: "Experimental model · deterministic fallback · user accepts changes",
    },
    {
      id: "offline",
      title: "Offline-first architecture",
      eyebrow: "02 / PERSISTENCE",
      headline: "The phone is the source of truth.",
      body: "Expo SQLite persists workouts locally. Client-generated UUIDs, updated_at timestamps, and deletion markers support optional sync through a shared protocol and a Cloudflare Worker backed by D1.",
      detail:
        "Saved sets are re-read before adaptation. Resume reconstructs context from SQLite, while edits and deletions invalidate stale suggestions. Logging and rest timers run independently from inference.",
      file: "apps/mobile/src/sync/schema.ts",
      nodes: ["Workout logger", "Local SQLite", "Optional D1 sync"],
      note: "Local writes first · resumable sessions · no mandatory account",
    },
    {
      id: "evaluation",
      title: "Adaptation & evaluation",
      eyebrow: "03 / VALIDATION",
      headline: "Freeze the forecast. Then observe the outcome.",
      body: "The first eligible pre-outcome forecast is frozen locally. Model and baseline MAE are compared on the same matched observations. Edited, skipped, or invalidated sets are excluded through a shared eligibility filter.",
      detail:
        "The decision policy caps increases, checks actual equipment rungs, and retains the plan when inference fails. It cannot assess injury risk. Real-user accuracy, usefulness, and device performance remain separate validation tasks.",
      file: "apps/mobile/scripts/ml-evaluation-report.ts",
      nodes: ["Frozen forecast", "Matched outcome", "Paired baselines"],
      note: "Interpreter parity ≠ predictive accuracy · no strength-gain claim",
    },
  ],
  screenshotCaption:
    "Repository UI web renders · sample data · not native device captures",
  verification:
    "[TODO_VERIFY: real-device screenshots and field-validation results]" as Verification,
} as const;
export const projects: Project[] = [
  {
    id: "ragbase",
    number: "02",
    name: "RAGBase",
    category: "RETRIEVAL SYSTEMS",
    maturity: "Deployment documented · live health unverified",
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
      "Implemented PDF ingestion, cited answers, document filtering, and PostgreSQL query logs for latency, tokens, and sources. Docker and CI support reproducible deployment.",
    limitations:
      "Arabic retrieval is limited by the English-oriented embedding model. No reranker or indexed full-text vectors yet. Retrieval-quality and latency benchmarks are not established.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "sentence-transformers",
      "Groq",
      "Docker",
    ],
    sources: [
      { label: "Source code", url: "https://github.com/ElMolla10/ragbase" },
      {
        label: "Retrieval implementation",
        url: "https://github.com/ElMolla10/ragbase/blob/master/backend/retrieval.py",
      },
    ],
    verification:
      "[TODO_VERIFY: current deployment health and retrieval benchmarks]",
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
      "Projections are application models, not official forecasts. Small cohorts are early evidence; predictive advantage and rank improvements are not claimed. No verified Elo implementation is asserted.",
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
    verification:
      "[TODO_VERIFY: out-of-sample forecast and decision-quality results]",
  },
];
