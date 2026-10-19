import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Tags } from "@/components/ui";

export const metadata: Metadata = {
  title: "RAGBase — Retrieval-Augmented Generation & Vector Search | Mohamed Ehab",
  description:
    "Engineering case study: Grounded document retrieval with PostgreSQL pgvector, page-level citation boundaries, and hybrid ranking.",
};

export default function RagbaseCaseStudyPage() {
  const ragbase = projects.find((p) => p.id === "ragbase")!;

  return (
    <div className="case-study-page">
      <nav className="case-study-nav" aria-label="Breadcrumb">
        <Link href="/#projects" className="back-link">
          <ArrowLeft size={14} /> Back to Portfolio
        </Link>
        <span className="mono eyebrow">SYSTEMS ARCHITECTURE / 02</span>
      </nav>

      <header className="case-header">
        <span className="eyebrow accent">RETRIEVAL SYSTEMS &amp; VECTOR SEARCH</span>
        <h1>
          RAGBase: From Research Documents to Verifiable Answers<span className="accent">.</span>
        </h1>
        <p className="case-subtitle">
          An end-to-end retrieval-augmented generation engine engineered to ingest complex technical research papers, index dense embeddings with pgvector, and generate cited answers with verifiable page provenance.
        </p>

        <div className="case-actions">
          <a
            className="button primary"
            href="https://github.com/ElMolla10/ragbase"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Source Code <ArrowUpRight size={16} />
          </a>
          <a
            className="button secondary"
            href="https://github.com/ElMolla10/ragbase/blob/master/backend/retrieval.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            Retrieval Implementation <ArrowUpRight size={15} />
          </a>
        </div>

        <Tags items={ragbase.stack} />
      </header>

      <div className="stats-banner">
        <div className="stat-card">
          <strong>384d</strong>
          <span>MiniLM Dense Embeddings</span>
        </div>
        <div className="stat-card">
          <strong>IVFFlat</strong>
          <span>pgvector Indexing Strategy</span>
        </div>
        <div className="stat-card">
          <strong>RRF</strong>
          <span>Reciprocal Rank Fusion</span>
        </div>
        <div className="stat-card">
          <strong>Docker</strong>
          <span>Reproducible Microservices</span>
        </div>
      </div>

      <section className="case-section">
        <h2>The Core Problem</h2>
        <p>
          Standard LLM question-answering pipelines suffer from two critical failures: hallucination and opaque citations. In technical, academic, or legal domains, an answer without an exact source page is unusable.
        </p>
        <p>
          RAGBase solves this by enforcing <strong>page-preserving chunk boundaries</strong>. Rather than blindly slicing raw text by character counts, chunk headers retain explicit metadata (document ID, page number, bounding paragraph), ensuring every returned answer directly links to its origin text.
        </p>
      </section>

      <section className="case-section">
        <h2>Engineering Pipeline</h2>
        <div className="deepdive-grid">
          <div className="deepdive-col">
            <span className="mono eyebrow accent">01 / INGESTION</span>
            <h3>Page-Preserving Chunking</h3>
            <p>
              Uploaded PDFs are parsed in-memory. Text extraction respects natural layout flow and page boundaries, generating bounded overlapping chunks with persistent provenance metadata.
            </p>
          </div>
          <div className="deepdive-col">
            <span className="mono eyebrow accent">02 / EMBEDDINGS</span>
            <h3>Dense Vector Encoding</h3>
            <p>
              Pre-trained <code>all-MiniLM-L6-v2</code> models transform chunked passages into 384-dimensional dense vector embeddings, optimized for high throughput on CPU and memory-constrained hosts.
            </p>
          </div>
          <div className="deepdive-col">
            <span className="mono eyebrow accent">03 / STORAGE</span>
            <h3>PostgreSQL &amp; pgvector (IVFFlat)</h3>
            <p>
              Vectors are indexed in PostgreSQL using pgvector with IVFFlat clustering. Hybrid retrieval combines dense cosine similarity with relational full-text search via Reciprocal Rank Fusion (RRF).
            </p>
          </div>
          <div className="deepdive-col">
            <span className="mono eyebrow accent">04 / INFERENCE</span>
            <h3>Grounded LLM Generation</h3>
            <p>
              Top-k retrieved chunks populate a structured context envelope sent to high-throughput Groq LLM inference endpoints. The model is constrained to generate answers strictly derived from citations.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section">
        <h2>Infrastructure &amp; Resource Constraints</h2>
        <p>
          The original implementation was deployed on an AWS EC2 <code>t2.small</code> instance (2 GB RAM) with Amazon RDS PostgreSQL. Operating within strict memory boundaries required configuring 4 GB of swap space, container memory limits in Docker Compose, and batching vector ingestion to prevent OOM termination.
        </p>
        <p>
          The current production pipeline runs on Railway, packaging FastAPI backend services, a Streamlit evaluation interface, and persistent PostgreSQL vector storage with continuous integration via GitHub Actions.
        </p>
      </section>

      <div className="case-footer-nav">
        <Link href="/research/sentiment-modulation" className="case-nav-btn">
          <ArrowLeft size={16} />
          <div style={{ textAlign: "right" }}>
            <small>Previous</small>
            <strong>IEEE Research Paper</strong>
          </div>
        </Link>
        <Link href="/projects/gain" className="case-nav-btn">
          <div>
            <small>Next Case Study</small>
            <strong>GAIN On-Device ML</strong>
          </div>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
