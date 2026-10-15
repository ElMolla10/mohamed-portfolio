"use client";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Database,
  Dumbbell,
  Smartphone,
  Cpu,
} from "lucide-react";
import { gain } from "@/data/projects";
import { onTabKey } from "./interactive";
import { SourceLink, Tags, Verify } from "./ui";
export function GainCaseStudy() {
  const [active, setActive] = useState(0);
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
        <figure className="gain-visual">
          <div className="visual-grid" />
          <span className="visual-label mono">PRODUCT / MOBILE</span>
          <div className="phone phone-back">
            <div className="phone-speaker" />
            <Image
              src="/images/gain-workout.png"
              alt="GAIN workout logger web render with sample data"
              width={824}
              height={1784}
              sizes="230px"
            />
          </div>
          <div className="phone phone-front">
            <div className="phone-speaker" />
            <Image
              src="/images/gain-today.png"
              alt="GAIN Today screen web render showing sample workout targets"
              width={824}
              height={1784}
              sizes="250px"
            />
          </div>
          <span className="offline-chip">
            <span className="status-dot" /> LOCAL-FIRST BY DESIGN
          </span>
          <figcaption>{gain.screenshotCaption}</figcaption>
        </figure>
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
          <Verify>{gain.verification}</Verify>
          <span className="mono">
            Guardrails are behavior, not an accuracy claim.
          </span>
        </div>
      </div>
    </article>
  );
}
