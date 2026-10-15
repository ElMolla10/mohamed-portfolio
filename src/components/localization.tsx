import { AudioLines, Languages } from "lucide-react";
import { localization } from "@/data/localization";
import { SourceLink, Tags } from "./ui";
export function Localization() {
  return (
    <section
      className="localization-feature"
      aria-labelledby="localization-heading"
    >
      <div className="localization-heading">
        <div>
          <span className="eyebrow">{localization.eyebrow}</span>
          <h3 id="localization-heading">{localization.title}</h3>
        </div>
        <p>{localization.description}</p>
      </div>
      <div className="localization-grid">
        <article>
          <div className="language-identity">
            <Languages size={23} />
            <div className="language-pair">
              <span lang="ar" dir="rtl">
                العربية
              </span>
              <span className="language-divider" aria-hidden="true">
                /
              </span>
              <span lang="en">English</span>
            </div>
          </div>
          <h4>{localization.interface.title}</h4>
          <p>{localization.interface.body}</p>
          <Tags items={localization.interface.tags} />
          <SourceLink href={localization.interface.url}>
            {localization.interface.linkLabel}
          </SourceLink>
        </article>
        <article>
          <div className="language-identity">
            <AudioLines size={23} />
            <span className="mono">AUDIO → TEXT → EVALUATION</span>
          </div>
          <h4>{localization.speech.title}</h4>
          <p>{localization.speech.body}</p>
          <Tags items={localization.speech.tags} />
          <SourceLink href={localization.speech.url}>
            {localization.speech.linkLabel}
          </SourceLink>
        </article>
      </div>
    </section>
  );
}
