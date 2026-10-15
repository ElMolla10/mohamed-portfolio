export interface AdditionalProject {
  id: string;
  name: string;
  category: string;
  period: string;
  maturity: string;
  summary: string;
  architecture: string[];
  details: string;
  stack: string[];
  source: string;
  sourceLabel: string;
  evidenceNote: string;
  validation?: string;
}
export const additionalProjects: AdditionalProject[] = [
  {
    id: "trading-engine",
    name: "Agentic E-Trading Engine",
    category: "GRADUATION THESIS",
    period: "2026",
    maturity: "Paper-trading system · team of 5",
    summary:
      "An autonomous paper-trading system that connects price forecasting, adaptive position sizing, and deterministic execution guardrails.",
    architecture: [
      "Market data",
      "XGBoost + ElasticNet",
      "Contextual bandit",
      "Risk gates / Alpaca",
    ],
    details:
      "A contextual epsilon-greedy bandit adapts position sizing to realized after-cost P&L. Seven deterministic risk layers include drawdown throttling, a kill switch, end-of-day flattening, and exposure caps. PostgreSQL persistence, drift monitoring, idempotent orders, and crash recovery support the execution path.",
    stack: [
      "Python",
      "XGBoost",
      "ElasticNet",
      "Contextual bandits",
      "PostgreSQL",
      "Alpaca API",
    ],
    source: "https://github.com/ElMolla10/Alpaca",
    sourceLabel: "Trading engine source",
    evidenceNote:
      "Thesis scope and team size from the CV; architecture cross-checked against the public repository. Paper trading is distinguished from live investment performance.",
  },
  {
    id: "malik",
    name: "MALIK / Arabic ASR",
    category: "SPEECH & MEDIA PIPELINES",
    period: "2025 – 2026",
    maturity: "Research pipeline & local clipping workflow",
    summary:
      "Long-form Arabic transcription and AI-assisted clipping, from overlapping audio chunks to captioned vertical video.",
    architecture: [
      "yt-dlp / audio",
      "Whisper.cpp",
      "Groq clip selection",
      "FFmpeg render",
    ],
    details:
      "Arabic normalization, overlapping chunks, and WER/CER evaluation on FLEURS support transcription experiments. A Groq LLM agent selects semantic hooks; FFmpeg produces captioned vertical clips with dynamic framing. The ASR benchmark and downstream clipping workflow have separate evaluation scopes.",
    stack: ["Python", "yt-dlp", "Whisper.cpp", "FLEURS", "Groq", "FFmpeg"],
    source: "https://github.com/ElMolla10/arabic-long-form-asr",
    sourceLabel: "ASR research & clipper source",
    evidenceNote:
      "ASR code and FLEURS experiments are public. The complete MALIK orchestration and rendering workflow is described in the CV; the linked repository covers the ASR component and optional downstream clipper.",
  },
  {
    id: "price-intelligence",
    name: "Competitor Price Intelligence",
    category: "AUTOMATED DATA ENGINEERING",
    period: "2026",
    maturity: "Scheduled retail-intelligence pipeline",
    summary:
      "Daily pricing and change detection for Egyptian retail brands, with historical observations in Supabase/PostgreSQL.",
    architecture: [
      "Retail / Shopify",
      "Playwright scraper",
      "Snapshot diff",
      "PostgreSQL history",
    ],
    details:
      "The CV reports a 17-brand project scope and scheduled Render cloud jobs. The inspected source uses Shopify API detection, Playwright fallback, snapshot comparisons, and filtering of dynamic interface noise. The current checked-in target file contains 11 entries; historical scope and current configuration are kept distinct.",
    stack: [
      "Python",
      "Playwright",
      "Shopify APIs",
      "Supabase",
      "PostgreSQL",
      "Render",
    ],
    source: "https://github.com/ElMolla10/Competitor-tracker",
    sourceLabel: "Price intelligence source",
    evidenceNote:
      "17 brands is the CV-reported project scope, not a live count inferred from the current repository.",
    validation:
      "The CV reports a historical scope of 17 brands; the current repository configuration lists 11. The checked-in configuration is not presented as evidence of 17 active targets.",
  },
];
