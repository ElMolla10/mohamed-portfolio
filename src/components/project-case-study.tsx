import {
  Braces,
  GitBranch,
  ArrowRight,
  FileText,
  Network,
  Search,
  ShieldCheck,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { SourceLink, Tags, Verify } from "./ui";
export function ProjectCaseStudy({ project }: { project: Project }) {
  const isRag = project.id === "ragbase";
  return (
    <article
      id={project.id}
      className={`project-case ${isRag ? "rag" : "fpl"}`}
    >
      <div className="project-visual">
        <div className="visual-heading mono">
          <span>
            {isRag ? <Braces size={15} /> : <GitBranch size={15} />}{" "}
            {isRag ? "retrieval.pipeline" : "optimization.engine"}
          </span>
          <span>0{isRag ? "2" : "3"} / SYSTEM</span>
        </div>
        {isRag ? (
          <div className="rag-art">
            <div className="document-stack">
              <FileText size={30} />
              <span>research.pdf</span>
              <i />
              <i />
              <i />
            </div>
            <div className="retrieval-line">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="vector-block">
              <Search size={24} />
              <span>semantic search</span>
              <div className="vector-dots">
                {Array.from({ length: 28 }, (_, i) => (
                  <i key={i} />
                ))}
              </div>
            </div>
            <div className="retrieval-line short">
              <span />
              <span />
            </div>
            <div className="citation-block">
              <span className="accent mono">SOURCE-GROUNDED</span>
              <strong>Answer + citations</strong>
              <span className="citation-lines" />
              <span className="citation-lines" />
            </div>
          </div>
        ) : (
          <div className="fpl-art">
            <div className="pitch">
              <div className="pitch-center" />
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <span key={i} className={`player player-${i}`} />
              ))}
            </div>
            <div className="constraint-list">
              <div>
                <ShieldCheck size={15} />
                <span>Squad legality</span>
                <span className="accent">checked</span>
              </div>
              <div>
                <Network size={15} />
                <span>Transfer routes</span>
                <span className="accent">3 / 5 / 8 GW</span>
              </div>
              <div>
                <GitBranch size={15} />
                <span>Model cohorts</span>
                <span className="accent">separated</span>
              </div>
            </div>
          </div>
        )}
        <ol className="pipeline">
          {project.architecture.map((node, i) => (
            <li key={node}>
              <span>{node}</span>
              {i < project.architecture.length - 1 && <ArrowRight size={12} />}
            </li>
          ))}
        </ol>
      </div>
      <div className="project-content">
        <div className="project-meta">
          <span>
            {project.number} / {project.category}
          </span>
        </div>
        <div className="project-title">
          <h3>{project.name}</h3>
          <SourceLink href={project.sources[0].url}>View source</SourceLink>
        </div>
        <p className="project-headline">{project.headline}</p>
        <span className="maturity supporting">{project.maturity}</span>
        <div className="case-details">
          <div>
            <h4>THE PROBLEM</h4>
            <p>{project.problem}</p>
          </div>
          <div>
            <h4>ENGINEERING CHALLENGE</h4>
            <p>{project.challenges}</p>
          </div>
          <details>
            <summary>
              Verified implementation & limitations <span>+</span>
            </summary>
            <h4>VERIFIED OUTCOMES</h4>
            <p>{project.outcomes}</p>
            <h4>LIMITATIONS & EVALUATION</h4>
            <p>{project.limitations}</p>
            {project.verification && <Verify>{project.verification}</Verify>}
            <SourceLink href={project.sources[1].url}>
              {project.sources[1].label}
            </SourceLink>
          </details>
        </div>
        <Tags items={project.stack} />
      </div>
    </article>
  );
}
