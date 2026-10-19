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
    maturity: "Simulated execution & paper trading · Team of 5",
    summary:
      "An autonomous algorithmic trading system connecting machine learning price forecasting, adaptive position sizing, and deterministic execution guardrails.",
    architecture: [
      "Market data",
      "XGBoost + ElasticNet",
      "Contextual bandit",
      "Risk gates / Alpaca",
    ],
    details:
      "A contextual epsilon-greedy bandit adapts position sizing to realized after-cost P&L. Seven deterministic risk layers include drawdown throttling, a kill switch, end-of-day flattening, and exposure caps. PostgreSQL persistence, drift monitoring, idempotent orders, and crash recovery ensure fault tolerance across market sessions.",
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
      "ESLSCA graduation thesis. Architecture implements multi-layer risk controls and automated recovery against simulated market feeds.",
    validation:
      "Evaluated in paper-trading environments with automated state persistence, slippage simulation, and drift detection.",
  },
  {
    id: "malik",
    name: "MALIK / Arabic ASR",
    category: "SPEECH & MEDIA PIPELINES",
    period: "2025 – 2026",
    maturity: "Research pipeline & automated clipping workflow",
    summary:
      "Long-form Arabic transcription and AI-assisted clipping, from overlapping audio chunks to captioned vertical video.",
    architecture: [
      "yt-dlp / audio",
      "Whisper.cpp",
      "Groq clip selection",
      "FFmpeg render",
    ],
    details:
      "Custom Arabic text normalization, overlapping window chunking, and WER/CER evaluation against the FLEURS benchmark. A Groq LLM agent extracts high-engagement hooks, while an FFmpeg pipeline renders captioned vertical video with dynamic framing and synchronized Arabic subtitles.",
    stack: ["Python", "yt-dlp", "Whisper.cpp", "FLEURS", "Groq", "FFmpeg"],
    source: "https://github.com/ElMolla10/arabic-long-form-asr",
    sourceLabel: "ASR research & clipper source",
    evidenceNote:
      "Open-source Arabic speech pipeline evaluated on FLEURS benchmark with reproducible normalization and clipping workflows.",
  },
  {
    id: "price-intelligence",
    name: "Competitor Price Intelligence",
    category: "AUTOMATED DATA ENGINEERING",
    period: "2026",
    maturity: "Scheduled retail-intelligence pipeline",
    summary:
      "Daily pricing and change detection for Egyptian retail brands, with historical observations stored in Supabase/PostgreSQL.",
    architecture: [
      "Retail / Shopify",
      "Playwright scraper",
      "Snapshot diff",
      "PostgreSQL history",
    ],
    details:
      "Engineered an automated price-intelligence pipeline across a 17-brand retail scope, with 11 entries maintained in the open-source configuration. Leverages headless Playwright scraping with Shopify API fast-path detection, structural DOM snapshot comparisons, and dynamic interface noise filtering. Managed via scheduled cloud jobs with PostgreSQL historical tracking.",
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
      "Designed for multi-brand price telemetry; repository contains the core scraping engine and reference storefront configurations.",
    validation:
      "Automated daily ingestion with snapshot-based diffing, change-event alerts, and longitudinal price history.",
  },
];
