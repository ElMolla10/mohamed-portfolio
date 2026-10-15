import { ArrowRight, AudioLines, TrendingUp, Workflow } from "lucide-react";
import { additionalProjects } from "@/data/additionalProjects";
import { SourceLink, Tags, Verify } from "./ui";
import { Reveal } from "./interactive";
const icons = [TrendingUp, AudioLines, Workflow];
export function AdditionalProjects() {
  return (
    <div className="additional-projects">
      <div className="archive-heading">
        <div>
          <span className="eyebrow">MORE SYSTEMS / CV & SOURCE</span>
          <h3>From market signals to spoken Arabic.</h3>
        </div>
        <p>
          Research, data pipelines, and tools built around real operational
          constraints.
        </p>
      </div>
      <div className="archive-grid">
        {additionalProjects.map((project, index) => {
          const Icon = icons[index];
          return (
            <Reveal key={project.id}>
              <article className="archive-project" id={project.id}>
                <div className="archive-meta">
                  <Icon size={20} />
                  <span className="mono">{project.period}</span>
                </div>
                <span className="eyebrow">{project.category}</span>
                <h4>{project.name}</h4>
                <span className="archive-maturity">{project.maturity}</span>
                <p>{project.summary}</p>
                <ol
                  className="archive-flow"
                  aria-label={`${project.name} architecture`}
                >
                  {project.architecture.map((node, i) => (
                    <li key={node}>
                      <span>{node}</span>
                      {i < project.architecture.length - 1 && (
                        <ArrowRight size={11} />
                      )}
                    </li>
                  ))}
                </ol>
                <details>
                  <summary>
                    Engineering details & evidence <span>+</span>
                  </summary>
                  <p>{project.details}</p>
                  <p className="evidence-note">{project.evidenceNote}</p>
                  {project.verification && (
                    <Verify>{project.verification}</Verify>
                  )}
                </details>
                <Tags items={project.stack} />
                <SourceLink href={project.source}>
                  {project.sourceLabel}
                </SourceLink>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
