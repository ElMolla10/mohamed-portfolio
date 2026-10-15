import { Award, GraduationCap } from "lucide-react";
import { credentials } from "@/data/credentials";
import { Reveal } from "./interactive";
import { SectionHeading, Tags } from "./ui";
export function Credentials() {
  return (
    <section className="credentials-section section-shell" id="education">
      <SectionHeading
        number="04"
        title="The academic foundation."
        description="An AI degree grounded in applied work, with infrastructure training that connects models to the systems running them."
      />
      <div className="credentials-grid">
        <Reveal className="degree-panel">
          <GraduationCap size={25} />
          <div className="credential-meta mono">
            <span>{credentials.status}</span>
            <span>{credentials.period}</span>
          </div>
          <h3>{credentials.degree}</h3>
          <p>
            {credentials.institution} · {credentials.location}
          </p>
          <span className="eyebrow">COURSEWORK</span>
          <Tags items={credentials.coursework} />
        </Reveal>
        <Reveal className="certification-panel">
          <Award size={25} />
          <span className="eyebrow">CERTIFICATIONS & TRAINING</span>
          <h3>{credentials.certificationProvider}</h3>
          <ul>
            {credentials.certifications.map((item) => (
              <li key={item}>
                <span className="status-dot" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
