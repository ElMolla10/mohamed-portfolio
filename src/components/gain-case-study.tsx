"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Database,
  Dumbbell,
  Smartphone,
  Cpu,
  Play,
} from "lucide-react";
import { gain } from "@/data/projects";
import { onTabKey } from "./interactive";
import { SourceLink, Tags, ValidationNote } from "./ui";
export function GainCaseStudy() {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStarted, setVideoStarted] = useState(false);
  const [playbackError, setPlaybackError] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);
  const mediaUrl = useRef<string | null>(null);
  const mediaRequest = useRef<AbortController | null>(null);
  useEffect(
    () => () => {
      mediaRequest.current?.abort();
      if (mediaUrl.current) URL.revokeObjectURL(mediaUrl.current);
    },
    [],
  );
  async function playDemo() {
    if (!videoRef.current || videoLoading) return;
    setPlaybackError(false);
    setVideoLoading(true);
    const controller = new AbortController();
    mediaRequest.current = controller;
    try {
      // Fetch this small clip only on demand. A local blob supports reliable
      // native seeking even when the static host ignores HTTP Range headers.
      if (!mediaUrl.current) {
        const response = await fetch(gain.demo.src, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Recording unavailable");
        const clip = await response.blob();
        if (controller.signal.aborted) return;
        mediaUrl.current = URL.createObjectURL(clip);
      }
      const video = videoRef.current;
      if (!video) return;
      video.src = mediaUrl.current;
      await video.play();
    } catch {
      if (!controller.signal.aborted) setPlaybackError(true);
    } finally {
      if (!controller.signal.aborted) setVideoLoading(false);
    }
  }
  const tab = gain.tabs[active];
  return (
    <article id="gain" className="gain-case">
      <div className="gain-top">
        <div className="gain-copy">
          <div className="project-meta">
            <span className="project-number">01</span>
            <span>FLAGSHIP CASE STUDY</span>
            <span className="maturity">
              <span className="status-dot" />
              {gain.maturity}
            </span>
          </div>
          <div className="gain-wordmark">
            <span className="gain-icon">
              <Dumbbell size={23} />
            </span>
            <h3>
              GAIN<span className="accent">.</span>
            </h3>
          </div>
          <h4>{gain.headline}</h4>
          <p>{gain.description}</p>
          <div className="gain-language-note">
            <span lang="ar" dir="rtl">
              العربية
            </span>
            <span>{gain.localizationLabel}</span>
          </div>
          <Tags items={gain.stack} />
          <div className="gain-links">
            {gain.sources.map((source) => (
              <SourceLink href={source.url} key={source.url}>
                {source.label}
              </SourceLink>
            ))}
          </div>
          <div className="engineering-principle">
            <CheckCircle2 size={16} />
            <span>Saved locally. Explained clearly. Accepted by the user.</span>
          </div>
        </div>
        <div className="gain-media-column">
          <figure className="gain-video-visual">
            <div className="visual-grid" aria-hidden="true" />
            <div className="gain-video-header mono">
              <span>
                <span className="status-dot" /> RECORDED ON IPHONE
              </span>
              <span>{gain.demo.durationLabel}</span>
            </div>
            <div className="gain-video-player">
              <video
                ref={videoRef}
                onPlay={() => setVideoStarted(true)}
                className="gain-device-video"
                controls={videoStarted}
                playsInline
                muted
                preload="none"
                poster={gain.demo.poster}
                width={384}
                height={848}
                aria-label={gain.demo.label}
                aria-describedby="gain-demo-caption"
              >
                <source src={gain.demo.src} type="video/mp4" />
                <track
                  kind="captions"
                  src={gain.demo.captions}
                  srcLang="en"
                  label="English walkthrough"
                />
                Your browser does not support embedded video.{" "}
                <a href={gain.demo.src}>Watch the iPhone recording</a>.
              </video>
              {!videoStarted && (
                <button
                  className="gain-play-button"
                  onClick={playDemo}
                  disabled={videoLoading}
                >
                  <Play size={16} fill="currentColor" />
                  {videoLoading ? "Loading demo…" : "Play iPhone demo"}
                </button>
              )}
            </div>
            {playbackError && (
              <p className="video-error" role="status">
                Playback could not start.{" "}
                <a href={gain.demo.src}>Open the recording</a>.
              </p>
            )}
            <figcaption id="gain-demo-caption">
              <strong>{gain.demo.caption}</strong>
              <span>{gain.demo.description}</span>
            </figcaption>
          </figure>
          <details className="gain-demo-transcript">
            <summary>
              Read the demo walkthrough <span>+</span>
            </summary>
            <ol>
              {gain.demo.walkthrough.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </details>
          <details className="gain-stills">
            <summary>
              Interface previews · Arabic + English <span>+</span>
            </summary>
            <div className="gain-stills-grid">
              <figure>
                <Image
                  src="/images/gain-today.png"
                  alt="GAIN English Today screen, repository web render with sample data"
                  width={824}
                  height={1784}
                  sizes="150px"
                />
                <figcaption>English · Today</figcaption>
              </figure>
              <figure>
                <Image
                  src="/images/gain-today-ar.png"
                  alt="GAIN Arabic Today screen, repository web render with sample data"
                  width={824}
                  height={1784}
                  sizes="150px"
                />
                <figcaption>
                  <span lang="ar" dir="rtl">
                    العربية
                  </span>{" "}
                  · Today
                </figcaption>
              </figure>
              <figure>
                <Image
                  src="/images/gain-workout.png"
                  alt="GAIN workout logger, repository web render with sample data"
                  width={824}
                  height={1784}
                  sizes="150px"
                />
                <figcaption>Workout logger</figcaption>
              </figure>
            </div>
            <p>{gain.screenshotCaption}</p>
          </details>
        </div>
      </div>
      <div className="gain-deepdive" id="architecture">
        <div
          className="tab-list"
          role="tablist"
          aria-label="GAIN engineering deep dive"
        >
          {gain.tabs.map((item, index) => (
            <button
              id={`gain-tab-${index}`}
              role="tab"
              aria-selected={active === index}
              aria-controls={`gain-panel-${index}`}
              tabIndex={active === index ? 0 : -1}
              className={active === index ? "active" : ""}
              key={item.id}
              onClick={() => setActive(index)}
              onKeyDown={(event) =>
                onTabKey(event, index, gain.tabs.length, setActive)
              }
            >
              <span>0{index + 1}</span>
              {item.title}
              <ArrowUpRight size={14} />
            </button>
          ))}
        </div>
        <div
          className="tab-panel"
          id={`gain-panel-${active}`}
          role="tabpanel"
          aria-labelledby={`gain-tab-${active}`}
          tabIndex={0}
        >
          <div className="tab-prose">
            <span className="eyebrow accent">{tab.eyebrow}</span>
            <h4>{tab.headline}</h4>
            <p>{tab.body}</p>
            <p className="small-copy">{tab.detail}</p>
            <a
              className="file-link"
              href={`https://github.com/ElMolla10/gain/blob/main/${tab.file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>↳</span>
              {tab.file}
              <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="architecture-diagram">
            <span className="diagram-label mono">
              DATA FLOW / {tab.id.toUpperCase()}
            </span>
            <div className="diagram-nodes">
              {tab.nodes.map((node, index) => {
                const Icon = [Smartphone, Database, Cpu][index];
                return (
                  <div className="node-group" key={node}>
                    <div className="diagram-node">
                      <Icon size={23} />
                      <strong>{node}</strong>
                      <span className="mono">0{index + 1}</span>
                    </div>
                    {index < 2 && (
                      <ArrowRight className="flow-arrow" size={18} />
                    )}
                  </div>
                );
              })}
            </div>
            <p className="diagram-note">
              <span className="status-dot" />
              {tab.note}
            </p>
          </div>
        </div>
        <div className="gain-verification">
          <ValidationNote>{gain.validation}</ValidationNote>
          <span className="mono">
            Guardrails are behavior, not an accuracy claim.
          </span>
        </div>
      </div>
    </article>
  );
}
