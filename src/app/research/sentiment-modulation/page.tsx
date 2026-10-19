import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Download,
  FileCheck2,
} from "lucide-react";
import { research } from "@/data/research";
import { SourceLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "IEEE IMSA 2026 — Sentiment Modulation for Algorithmic Trading | Mohamed Ehab",
  description:
    "First-author IEEE publication on automatic financial language model benchmarking and sign-aware multiplicative signal fusion.",
};

export default function ResearchPaperPage() {
  return (
    <div className="case-study-page">
      <nav className="case-study-nav" aria-label="Breadcrumb">
        <Link href="/#research" className="back-link">
          <ArrowLeft size={14} /> Back to Portfolio
        </Link>
        <span className="mono eyebrow">PEER-REVIEWED RESEARCH / 01</span>
      </nav>

      <header className="case-header">
        <div className="research-publication" style={{ marginBottom: "16px" }}>
          <span>
            <FileCheck2 size={15} /> Published in IEEE Xplore
          </span>
          <span>First Author · IEEE IMSA 2026</span>
        </div>
        <h1>
          Automatic Model Selection and Sign-Aware Multiplicative Sentiment Modulation for Algorithmic Trading<span className="accent">.</span>
        </h1>
        <p className="case-subtitle">
          Which financial language model should an algorithmic trading system trust? And how should sentiment modulate a price signal without flipping its fundamental direction? This paper introduces empirical model selection paired with directional signal fusion.
        </p>

        <div className="case-actions">
          <a
            className="button primary"
            href={research.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            IEEE Xplore Entry <ArrowUpRight size={16} />
          </a>
          <a
            className="button secondary"
            href={research.pdfUrl}
            download={research.pdfFilename}
          >
            <Download size={15} /> Download Manuscript (PDF)
          </a>
          <SourceLink href={research.sourceUrl}>
            Explore Implementation
          </SourceLink>
        </div>
      </header>

      <div className="stats-banner">
        <div className="stat-card">
          <strong>94.2%</strong>
          <span>DeBERTa Sentiment Accuracy</span>
        </div>
        <div className="stat-card">
          <strong>+5.0 pp</strong>
          <span>Outperformance vs. FinBERT</span>
        </div>
        <div className="stat-card">
          <strong>0.9420</strong>
          <span>Macro F1 Metric</span>
        </div>
        <div className="stat-card">
          <strong>0.060</strong>
          <span>Ordinal MAE (Lowest Error)</span>
        </div>
      </div>

      <section className="case-section">
        <h2>Mathematical Formulation</h2>
        <p>
          A common pitfall in sentiment-augmented trading models is signal inversion: high-confidence sentiment can erroneously flip a short signal to a long position or vice versa, bypassing technical risk controls.
        </p>
        <p>
          We propose <strong>Sign-Aware Multiplicative Modulation</strong>. In this formulation, sentiment modulates the <em>conviction</em> (magnitude) of the underlying price signal, while preserving its directional integrity:
        </p>

        <div className="formula-box">
          <div className="formula-math">
            S<sub>final</sub> = S<sub>price</sub> · [ 1 + α · sign(S<sub>price</sub>) · S<sub>sentiment</sub> ]
          </div>
          <p className="formula-caption mono">
            Where S<sub>price</sub> ∈ [-1, +1] is the base market signal, S<sub>sentiment</sub> ∈ [-1, +1] is the calibrated sentiment polarity, and α ∈ [0, 1] is the modulation intensity factor.
          </p>
        </div>

        <p>
          When sentiment agrees with the market direction (e.g. positive sentiment on a long signal), conviction is amplified. When sentiment contradicts market technicals, the signal is dampened toward zero without reversing direction.
        </p>
      </section>

      <section className="case-section">
        <h2>Empirical Benchmark Results</h2>
        <p>
          Candidate architectures were evaluated on held-out stratified splits of the Financial PhraseBank benchmark across classification accuracy, macro-F1, and ordinal Mean Absolute Error (MAE):
        </p>

        <div className="benchmark-wrap" style={{ marginTop: "20px" }}>
          <table className="benchmark-table">
            <caption>Financial PhraseBank · Held-out Stratified Split (3 Sentiment Classes)</caption>
            <thead>
              <tr>
                <th scope="col">Model Checkpoint</th>
                <th scope="col">Accuracy</th>
                <th scope="col">Macro F1</th>
                <th scope="col">Ordinal MAE</th>
              </tr>
            </thead>
            <tbody>
              {research.benchmarks.map((row) => (
                <tr
                  key={row.model}
                  className={row.best ? "benchmark-best" : ""}
                >
                  <th scope="row">
                    <strong>{row.model}</strong>
                    {row.best && (
                      <span className="best-tag mono">Top Candidate</span>
                    )}
                  </th>
                  <td>{row.accuracy}</td>
                  <td>{row.f1}</td>
                  <td>{row.mae}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="research-interpretation" style={{ marginTop: "18px" }}>
          An 81.7 percentage-point gap between the best and worst candidates proves that a &quot;financial&quot; label on Hugging Face is no guarantee of reliability; domain-specific benchmarking is an mandatory pre-condition before production deployment.
        </p>
      </section>

      <section className="case-section">
        <h2>BibTeX Citation</h2>
        <p>If you build upon this work in academic or quantitative research, please cite:</p>
        <pre className="bibtex-box">
{`@inproceedings{elmolla2026sentiment,
  author    = {Mohamed Ehab El Molla},
  title     = {Automatic Model Selection and Sign-Aware Multiplicative Sentiment Modulation for Algorithmic Trading},
  booktitle = {Proceedings of the IEEE International Conference on Intelligent Multi-System Applications (IMSA)},
  year      = {2026},
  publisher = {IEEE},
  doi       = {10.1109/IMSA.2026.11700381}
}`}
        </pre>
      </section>

      <div className="case-footer-nav">
        <Link href="/projects/gain" className="case-nav-btn">
          <ArrowLeft size={16} />
          <div style={{ textAlign: "right" }}>
            <small>Previous</small>
            <strong>GAIN On-Device ML</strong>
          </div>
        </Link>
        <Link href="/projects/ragbase" className="case-nav-btn">
          <div>
            <small>Next Case Study</small>
            <strong>RAGBase Retrieval System</strong>
          </div>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
