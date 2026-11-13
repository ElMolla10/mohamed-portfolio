import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { gain } from "@/data/projects";
import { Tags } from "@/components/ui";

export const metadata: Metadata = {
  title:
    "GAIN: Workout Tracker — Live on the App Store | Mohamed Ehab",
  description:
    "GAIN: Workout Tracker (v1.0.1) by Mohamed El Molla is live on the App Store. Engineering case study: on-device XGBoost inference in React Native, offline-first SQLite persistence, and Arabic/English strength progression.",
  openGraph: {
    title: "GAIN: Workout Tracker — Live on the App Store",
    description:
      "GAIN: Workout Tracker (v1.0.1) by Mohamed El Molla is live on the App Store. On-device XGBoost inference, offline-first SQLite, and Arabic/English strength training.",
  },
  twitter: {
    title: "GAIN: Workout Tracker — Live on the App Store",
    description:
      "GAIN: Workout Tracker (v1.0.1) by Mohamed El Molla is live on the App Store.",
  },
};

export default function GainCaseStudyPage() {
  return (
    <div className="case-study-page">
      <nav className="case-study-nav" aria-label="Breadcrumb">
        <Link href="/#projects" className="back-link">
          <ArrowLeft size={14} /> Back to Portfolio
        </Link>
        <span className="mono eyebrow">FLAGSHIP CASE STUDY / 01</span>
      </nav>

      <header className="case-header">
        <p className="case-release">
          <span className="maturity">
            <span className="status-dot" />
            {gain.maturity}
          </span>
          <span>
            {gain.storeName} · v{gain.version}
          </span>
        </p>
        <span className="eyebrow accent">MOBILE MACHINE LEARNING &amp; EDGE ARCHITECTURE</span>
        <h1>
          GAIN: Gym App with On-Device AI Intelligence. Even Offline<span className="accent">.</span>
        </h1>
        <p className="case-subtitle">
          Live on the App Store as {gain.storeName} (v{gain.version}). An Arabic and English strength-training application that computes deterministic progression and runs on-device XGBoost model inference directly inside the mobile runtime without cloud latency.
        </p>

        <div className="case-actions">
          <a
            className="button primary"
            href={gain.appStore.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {gain.appStore.label} <ArrowUpRight size={16} />
          </a>
          <a
            className="button secondary"
            href="https://github.com/ElMolla10/gain"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Repository <ArrowUpRight size={16} />
          </a>
          <a
            className="button secondary"
            href="https://github.com/ElMolla10/gain/blob/main/docs/ML-EVALUATION.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Model &amp; Evaluation Docs <ArrowUpRight size={15} />
          </a>
        </div>

        <Tags items={gain.stack} />
      </header>

      <div className="stats-banner">
        <div className="stat-card">
          <strong>&lt; 5 ms</strong>
          <span>Local Inference Latency</span>
        </div>
        <div className="stat-card">
          <strong>0 KB</strong>
          <span>Network Dependency (Offline)</span>
        </div>
        <div className="stat-card">
          <strong>Float32</strong>
          <span>TypeScript Tree Traversal</span>
        </div>
        <div className="stat-card">
          <strong>100%</strong>
          <span>Local SQLite Persistence</span>
        </div>
      </div>

      <section className="case-section">
        <h2>The Engineering Challenge</h2>
        <p>
          Most fitness applications rely on remote cloud APIs to generate workout recommendations. This introduces severe friction in real gym environments with poor reception, causes noticeable latency, and prevents workout tracking when offline.
        </p>
        <p>
          GAIN was engineered around a core invariant: <strong>the smartphone is the sole source of truth</strong>. All core algorithms—from set-to-set adaptation to workout history persistence and Arabic right-to-left layout rendering—execute entirely on the device.
        </p>
      </section>

      <section className="case-section">
        <h2>Three-Tier Architecture</h2>
        <div className="deepdive-grid">
          <div className="deepdive-col">
            <span className="mono eyebrow accent">01 / INTELLIGENCE</span>
            <h3>On-Device Model Interpretation</h3>
            <p>
              Rather than embedding heavy C++ runtimes or making network requests, a bundled XGBoost model is interpreted directly in TypeScript with strict float32 precision and missing-value traversal logic. Progression engine algorithms set baseline target ranges, while the model dynamically adapts the next set based on fatigue signals.
            </p>
          </div>
          <div className="deepdive-col">
            <span className="mono eyebrow accent">02 / PERSISTENCE</span>
            <h3>Offline-First SQLite State</h3>
            <p>
              Expo SQLite persists all workout sessions, rep records, and equipment increments locally. Client-generated UUIDs, monotonic timestamps, and deletion markers support optional delta sync with Cloudflare Workers and D1 database instances.
            </p>
          </div>
          <div className="deepdive-col">
            <span className="mono eyebrow accent">03 / SAFETY BOUNDS</span>
            <h3>Deterministic Guardrails</h3>
            <p>
              The decision engine enforces discrete gym equipment increments (e.g., 2.5 kg plates or dumbell steps). The recommendation requires explicit user confirmation and immediately falls back to deterministic rule-based progression if inputs diverge from acceptable bounds.
            </p>
          </div>
          <div className="deepdive-col">
            <span className="mono eyebrow accent">04 / LOCALIZATION</span>
            <h3>Full Arabic &amp; English Parity</h3>
            <p>
              Engineered with full bidirectional support (LTR and RTL), direction-aware UI components, localized muscle group terminologies, and Arabic text rendering tested across iOS and Android viewports.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section">
        <h2>Mobile User Interface</h2>
        <p>
          Clean, high-contrast dark interface designed for fast set logging between exercises, available in native Arabic and English:
        </p>
        <div className="gain-stills-grid" style={{ marginTop: "24px" }}>
          <figure>
            <Image
              src="/images/gain-today.png"
              alt="GAIN English Today screen"
              width={824}
              height={1784}
              sizes="(max-width: 768px) 100vw, 300px"
            />
            <figcaption>English · Today Session View</figcaption>
          </figure>
          <figure>
            <Image
              src="/images/gain-today-ar.png"
              alt="GAIN Arabic Today screen"
              width={824}
              height={1784}
              sizes="(max-width: 768px) 100vw, 300px"
            />
            <figcaption>
              <span lang="ar" dir="rtl">العربية</span> · Localized Arabic Dashboard
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/images/gain-workout.png"
              alt="GAIN workout logger"
              width={824}
              height={1784}
              sizes="(max-width: 768px) 100vw, 300px"
            />
            <figcaption>Workout Logger with Increments</figcaption>
          </figure>
        </div>
      </section>

      <div className="case-footer-nav">
        <Link href="/#projects" className="back-link">
          <ArrowLeft size={14} /> Back to Portfolio
        </Link>
        <Link href="/research/sentiment-modulation" className="case-nav-btn">
          <div>
            <small>Next Case Study</small>
            <strong>IEEE IMSA 2026 Research</strong>
          </div>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
