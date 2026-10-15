import { ArrowUpRight, BookOpen, FileCheck2, FlaskConical } from "lucide-react";
import { research } from "@/data/research";
import { SourceLink } from "./ui";
import { Reveal } from "./interactive";
export function Research() {
  return (
    <section
      className="research-section section-shell"
      id="research"
      aria-labelledby="research-heading"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">01 / PUBLISHED RESEARCH</span>
          <h2 id="research-heading">Research that made it to IEEE.</h2>
        </div>
        <a
          className="research-index-link"
          href={research.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BookOpen size={16} /> IEEE Xplore <ArrowUpRight size={15} />
        </a>
      </div>
      <Reveal>
        <article className="research-feature">
          <div className="research-prose">
            <div className="research-publication">
              <span>
                <FileCheck2 size={15} />
                {research.status}
              </span>
              <span>
                {research.role} · {research.venue}
              </span>
            </div>
            <h3>{research.title}</h3>
            <p className="research-description">{research.description}</p>
            <div className="research-contributions">
              {research.findings.map((finding, index) => (
                <div key={finding.title}>
                  <span className="mono">0{index + 1}</span>
                  <div>
                    <h4>{finding.title}</h4>
                    <p>{finding.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="research-links">
              <a
                className="button primary"
                href={research.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the published paper
                <ArrowUpRight size={16} />
              </a>
              <SourceLink href={research.sourceUrl}>
                Explore implementation
              </SourceLink>
            </div>
            <p className="research-period mono">
              {research.venue} / {research.period} / IEEE document 11700381
            </p>
          </div>
          <div className="research-evidence">
            <div className="evidence-heading mono">
              <FlaskConical size={14} />
              <span>HELD-OUT BENCHMARK</span>
            </div>
            <div className="research-stat">
              <strong>{research.result}</strong>
              <span>{research.resultLabel}</span>
            </div>
            <div className="research-improvement">
              <strong>{research.improvement}</strong>
              <span>{research.improvementLabel}</span>
            </div>
            <div className="benchmark-wrap">
              <table className="benchmark-table">
                <caption>{research.dataset}</caption>
                <thead>
                  <tr>
                    <th scope="col">Model</th>
                    <th scope="col">Accuracy</th>
                    <th scope="col">Macro-F1</th>
                    <th scope="col">MAE ↓</th>
                  </tr>
                </thead>
                <tbody>
                  {research.benchmarks.map((row) => (
                    <tr
                      key={row.model}
                      className={row.best ? "benchmark-best" : undefined}
                    >
                      <th scope="row">
                        {row.best ? <strong>{row.model}</strong> : row.model}
                      </th>
                      {[row.accuracy, row.f1, row.mae].map((value, index) => (
                        <td key={index}>
                          {row.best ? <strong>{value}</strong> : value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="research-interpretation">{research.interpretation}</p>
            <p className="research-limitation">{research.limitation}</p>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
