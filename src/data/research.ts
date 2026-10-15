export interface BenchmarkRow {
  model: string;
  accuracy: string;
  f1: string;
  mae: string;
  best?: boolean;
}
export const research = {
  id: "research",
  title:
    "Automatic Model Selection and Sign-Aware Multiplicative Sentiment Modulation for Algorithmic Trading",
  venue: "IEEE IMSA 2026",
  period: "July 2026",
  role: "First author",
  status: "Published in IEEE Xplore",
  url: "https://ieeexplore.ieee.org/document/11700381",
  pdfUrl: "/research/IMSA-2026-Sentiment-Modulation.pdf",
  pdfFilename: "IMSA-2026-Sentiment-Modulation.pdf",
  pdfDescription: "Author-provided camera-ready manuscript · 4 pages",
  sourceUrl: "https://github.com/ElMolla10/sentiment-trading",
  description:
    "Which financial language model should a trading system trust? And how should sentiment change a price signal without reversing its direction? This work connects automatic model benchmarking with sign-aware signal fusion.",
  dataset:
    "Financial PhraseBank · held-out stratified split · 3 sentiment classes",
  findings: [
    {
      title: "Benchmark before selecting.",
      body: "Fine-tuned DeBERTa-finance reached 94.2% accuracy and 0.9420 macro-F1, a 5.0 percentage-point accuracy lead over FinBERT. Candidates are evaluated using accuracy, macro-F1, and ordinal MAE.",
    },
    {
      title: "Preserve direction. Modulate conviction.",
      body: "Sign-aware multiplicative fusion strengthens a price signal when sentiment agrees with its long or short direction and attenuates it when sentiment disagrees. Sentiment changes conviction while preserving direction.",
    },
  ],
  result: "94.2%",
  resultLabel: "DeBERTa sentiment accuracy",
  improvement: "+5.0 pp",
  improvementLabel: "accuracy over FinBERT",
  interpretation:
    "An 81.7 percentage-point gap between the best and worst candidates highlights why a finance label is not a substitute for evaluation. The pmatorras checkpoint scores below the 33% random baseline.",
  limitation:
    "These are held-out sentiment-classification results, not evidence of trading profitability or live financial performance.",
  benchmarks: [
    {
      model: "DeBERTa",
      accuracy: "94.2%",
      f1: "0.9420",
      mae: "0.060",
      best: true,
    },
    { model: "FinBERT", accuracy: "89.2%", f1: "0.8932", mae: "0.114" },
    { model: "pmatorras", accuracy: "12.5%", f1: "0.028", mae: "1.157" },
  ] as BenchmarkRow[],
} as const;
