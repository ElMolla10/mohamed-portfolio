# CV and source audit — October 15, 2026

## Authoritative CV

The complete one-page `Downloads/Mohamed_ElMolla_AIEngineer_CV.pdf` was extracted with pdftotext and visually reviewed as a rendered page. It is served unchanged as `/Mohamed_ElMolla_AIEngineer_CV.pdf`; SHA-256 `294d62cb3f3e91f489837a359d9c2175b3174519313de40ebae07d65dbd8cbb8`.

| CV content                                                                         | Website destination                                                                                                                                                                 |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mohamed Ehab El Molla; ML/MLOps role and AI graduate summary                       | Hero, metadata, about                                                                                                                                                               |
| Dokki, Cairo; email; telephone; LinkedIn; GitHub                                   | Location, contact and metadata                                                                                                                                                      |
| Prosoft, Infrastructure Specialist (Cloud & Virtualization), Aug 2026–Present      | Experience timeline; exact scope includes HyperCore, Platform9, VMware migration, HA compute/storage/networking, private-cloud sizing, government/manufacturing/industrial accounts |
| BARQ Systems DevOps & Infrastructure Engineer internship, Aug 2025                 | Experience timeline; Docker, CI/CD, Linux, networking and monitoring                                                                                                                |
| CLS Learning Solutions ML Engineer internship, Apr–Jul 2025                        | Experience timeline; classification, predictive pipelines, Optuna, ROC-AUC/macro-F1, tracking                                                                                       |
| First-author IEEE IMSA 2026 research, Jul 2026                                     | Hero publication link; dedicated research section; exact benchmark table; IEEE and code links                                                                                       |
| Agentic E-Trading Engine, 2026; team of 5                                          | Additional systems; paper trading, XGBoost/ElasticNet, contextual bandit, seven risk layers, drift/idempotency/recovery                                                             |
| GAIN, 2026                                                                         | Existing flagship retained, including on-device inference, offline architecture and evaluation                                                                                      |
| RAGBase, 2026                                                                      | Current Railway case study; earlier AWS work preserved as history, not current hosting                                                                                              |
| MALIK / long-form Arabic ASR, 2025–2026                                            | Additional systems; Whisper.cpp, overlapping chunks, FLEURS, normalization, Groq selection and FFmpeg rendering                                                                     |
| Competitor Price Intelligence, 2026                                                | Additional systems; CV reports 17-brand scope, Render jobs and Supabase/PostgreSQL history                                                                                          |
| ESLSCA AI BSc, 2023–Jun 2026; all six coursework topics                            | Education section                                                                                                                                                                   |
| Scale Computing TPC, Infrastructure & Data Center Architecture, Sales Professional | Certifications and training section; no certification dates or credential IDs invented                                                                                              |
| All CV technical skills                                                            | Six grouped capability domains; exact tools represented without assigning every tool to every project                                                                               |

## Research evidence and limits

The user explicitly confirmed publication and supplied https://ieeexplore.ieee.org/document/11700381. The CV identifies the title, first-author role, IMSA 2026 and July 2026. The author's public publication announcement also reports the IEEE publication: https://www.linkedin.com/posts/mohamed-el-molla_machinelearning-nlp-algorithmictrading-activity-7510621203988996096-NXjT.

The IEEE landing page could not be fetched by the web reader or curl during this audit. Consequently no DOI, citation count, full author list, publication-date precision beyond the supplied CV, awards or impact claims were inferred. The site links directly to the user-provided IEEE document and describes publication based on the CV and user confirmation.

Local `sentiment-trading/README.md`, `sentiment_trading/selector.py` and `modulator.py` support the implementation description. The metrics are the exact supplied benchmark values: DeBERTa 94.2% / 0.9420 / 0.060; FinBERT 89.2% / 0.8932 / 0.114; pmatorras 12.5% / 0.028 / 1.157. Classification results are not presented as trading returns. No new model evaluation was run by this website task.

## Repository checks

- **GAIN:** local source revision d17ecb6; README, progression engine, inference interpreter, live-adaptation and paired-evaluation docs inspected previously. Android prerelease and experimental model labels retained. Screens are real app web renders with sample data, not device validation.
- **RAGBase:** local source revision 2f8e695; config/retrieval/README inspected. The user explicitly confirmed the move to Railway in this revision. Current deployment stays Railway, with in-memory PDF processing. AWS EC2/RDS/S3 and 4 GB swap on 2 GB RAM describe the earlier CV implementation. English-oriented embeddings, missing reranker and unknown retrieval benchmarks remain explicit limitations.
- **FPL Edge:** local source revision 7d6078c; source snapshot, optimizer, route solver and tests inspected previously. Existing case study retained. No Elo implementation or forecast advantage invented.
- **Trading engine:** public ElMolla10/Alpaca README inspected. CV supplies thesis, team size, contextual bandit and operating details. Public repository documents the prediction/risk/execution architecture. No live profitability claimed.
- **MALIK / ASR:** public ElMolla10/arabic-long-form-asr README and `asr_experiments.py` inspected, including normalization and WER/CER helpers. Local MALIK workflow document inspected. The public source link covers the ASR component and optional clipper, not an asserted complete public release of every orchestration step.
- **Price intelligence:** public ElMolla10/Competitor-tracker tree, targets.json, scraper.py and differ.py inspected. Shopify detection, Playwright fallback and noise-filtered diffs are implemented. CV reports historical scope of 17 brands; current targets.json has 11 entries. Both are disclosed in the expandable evidence details.

## Remaining publication checks

- GAIN real-device screenshots and field-validation results.
- RAGBase retrieval-quality benchmarks.
- FPL Edge out-of-sample forecast/decision-quality results.
- Reconcile the price tracker's 17-brand CV scope with 11 checked-in targets.

Previous placeholders for employer dates/responsibilities, previous internships, qualifications, skills evidence from the CV, domain and CV selection are resolved. Employer responsibilities are CV-sourced, not independently employer-certified. All website source and assets are in ElMolla10/mohamed-portfolio; deployment targets Cloudflare Pages.
