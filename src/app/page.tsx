import { Research } from "@/components/research";
import { AdditionalProjects } from "@/components/additional-projects";
import { Credentials } from "@/components/credentials";
import { copy } from "@/data/copy";
import { Github, Linkedin } from "@/components/brand-icons";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Mail,
  Download,
  Terminal,
  Cpu,
  Layers,
  Workflow,
  Code2,
  Server,
  Database,
} from "lucide-react";
import {
  Header,
  SystemOverview,
  Reveal,
  CopyEmail,
} from "@/components/interactive";
import { GainCaseStudy } from "@/components/gain-case-study";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { SectionHeading, SourceLink, Verify } from "@/components/ui";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { skills } from "@/data/skills";
import { siteConfig } from "@/data/siteConfig";
const skillIcons = [Cpu, Layers, Workflow, Code2, Server, Database];
export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero section-shell" id="home">
          <div className="hero-grid">
            <Reveal className="hero-copy">
              <div className="status-pill">
                <span className="status-dot" />
                {copy.hero.status}{" "}
                <span className="pill-location">{copy.hero.location}</span>
              </div>
              <h1 className="hero-name">
                {siteConfig.name}
                <span className="accent">.</span>
              </h1>
              <p className="hero-role">
                ML &amp; MLOps Engineer <span>/</span> Software &amp;
                Infrastructure
              </p>
              <p className="hero-positioning">
                {copy.hero.headline[0]}
                <br />
                {copy.hero.headline[1]}{" "}
                <span className="hero-final">{copy.hero.headline[2]}.</span>
              </p>
              <p className="hero-intro">
                {copy.hero.intro[0]}
                <br className="desktop-break" /> {copy.hero.intro[1]}
              </p>
              <p className="hero-description">
                {copy.hero.description[0]}
                <br className="desktop-break" /> {copy.hero.description[1]}
              </p>
              <a className="hero-publication" href="#research">
                <span className="publication-mark">IEEE</span>
                <span>First-author research · published in IEEE Xplore</span>
                <ArrowUpRight size={15} />
              </a>
              <div className="hero-actions">
                <a className="button primary" href="#gain">
                  Explore Case Studies <ArrowDown size={16} />
                </a>
                <a className="button secondary" href={siteConfig.cv} download>
                  <Download size={15} /> Download CV
                </a>
              </div>
              <div className="hero-socials">
                <a href="#contact">
                  Let’s talk <ArrowUpRight size={14} />
                </a>
                <span />
                <SourceLink href={siteConfig.github}>
                  <Github />
                  GitHub
                </SourceLink>
                <SourceLink href={siteConfig.linkedin}>
                  <Linkedin />
                  LinkedIn
                </SourceLink>
              </div>
            </Reveal>
            <Reveal className="overview-wrap">
              <SystemOverview />
              <div className="overview-caption mono">
                <span>{copy.hero.caption[0]}</span>
                <span>{copy.hero.caption[1]}</span>
              </div>
            </Reveal>
          </div>
          <div className="hero-bottom">
            <span className="mono">
              <span className="accent">↳</span> FROM LOCAL INFERENCE TO DEPLOYED
              APPLICATIONS
            </span>
            <a href="#projects" className="mono">
              SCROLL TO EXPLORE <ArrowDown size={13} />
            </a>
          </div>
        </section>
        <Research />
        <section className="projects-section section-shell" id="projects">
          <SectionHeading
            number="02"
            title={copy.sections.projects.title}
            description={copy.sections.projects.description}
          />
          <Reveal>
            <GainCaseStudy />
          </Reveal>
          <div className="supporting-grid">
            {projects.map((project) => (
              <Reveal key={project.id}>
                <ProjectCaseStudy project={project} />
              </Reveal>
            ))}
          </div>
          <AdditionalProjects />
          <div className="source-note">
            <span className="status-dot" />
            <p>
              Every case study links to its implementation. Maturity and
              validation limits are stated explicitly.
            </p>
            <SourceLink href={siteConfig.github}>Explore GitHub</SourceLink>
          </div>
        </section>
        <section className="experience-section section-shell" id="experience">
          <SectionHeading
            number="03"
            title={copy.sections.experience.title}
            description={copy.sections.experience.description}
          />
          <div className="experience-layout">
            <div className="experience-intro">
              <Server size={28} />
              <h3>
                {copy.experience.headline[0]}
                <br />
                {copy.experience.headline[1]}
              </h3>
              <p>{copy.experience.body}</p>
              <span className="mono accent">{copy.experience.caption}</span>
            </div>
            <ol className="timeline">
              {experience.map((item, index) => (
                <li key={item.role}>
                  <div
                    className={`timeline-point ${index === 0 ? "current" : ""}`}
                  />
                  <div className="timeline-meta">
                    <span>{item.status}</span>
                    <span>
                      {item.period.startsWith("[TODO_VERIFY") ? (
                        <Verify>{item.period}</Verify>
                      ) : (
                        item.period
                      )}
                    </span>
                  </div>
                  <h3>{item.role}</h3>
                  <p className="organization">{item.organization}</p>
                  <p>{item.description}</p>
                  {item.verification && <Verify>{item.verification}</Verify>}
                </li>
              ))}
            </ol>
          </div>
        </section>
        <Credentials />
        <section className="skills-section section-shell" id="skills">
          <SectionHeading
            number="05"
            title={copy.sections.skills.title}
            description={copy.sections.skills.description}
          />
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skillIcons[index];
              return (
                <Reveal className="skill-domain" key={skill.name}>
                  <div className="skill-heading">
                    <Icon size={20} />
                    <span className="mono">0{index + 1}</span>
                  </div>
                  <h3>{skill.name}</h3>
                  <ul>
                    {skill.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                  <a className="skill-evidence" href={skill.href}>
                    {skill.evidence}
                    <ArrowUpRight size={14} />
                  </a>
                  {skill.pending && <Verify>{skill.pending}</Verify>}
                </Reveal>
              );
            })}
          </div>
          <p className="skills-footnote">{copy.skillsFootnote}</p>
        </section>
        <section className="about-section section-shell" id="about">
          <div>
            <span className="eyebrow">06 / THE ENGINEER</span>
            <h2>
              The model is
              <br />
              only the beginning<span className="accent">.</span>
            </h2>
            <span className="location">
              <MapPin size={15} /> {siteConfig.location}
            </span>
          </div>
          <div className="about-prose">
            {copy.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
        <section className="contact-section section-shell" id="contact">
          <div className="contact-panel">
            <div className="contact-top mono">
              <span>
                <Terminal size={15} /> ~/contact
              </span>
              <span>LET’S BUILD SOMETHING USEFUL</span>
            </div>
            <div className="contact-body">
              <span className="eyebrow accent">
                HAVE A SYSTEM WORTH BUILDING?
              </span>
              <h2>
                Let’s make it work<span className="accent">.</span>
              </h2>
              <p>
                ML engineering, intelligent products, or the infrastructure
                beneath them.
                <br />
                I’m always interested in a thoughtful technical conversation.
              </p>
              <div className="email-row">
                <Mail size={21} />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                <CopyEmail />
              </div>
              <div className="contact-links">
                <a href={`tel:${siteConfig.phoneHref}`}>
                  {siteConfig.phoneDisplay}
                </a>
                <SourceLink href={siteConfig.linkedin}>LinkedIn</SourceLink>
                <SourceLink href={siteConfig.github}>GitHub</SourceLink>
                <a href={siteConfig.cv} download>
                  Download CV <Download size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer section-shell">
        <a className="brand" href="#home">
          mohamed.ehab<span className="accent">_</span>
        </a>
        <p>{copy.footer}</p>
        <a href="#home">
          Back to top <ArrowRight className="up-arrow" size={14} />
        </a>
      </footer>
      <aside
        className="verification-footer section-shell"
        aria-label="Publication checks"
      >
        <details>
          <summary>
            Publication checks <ArrowUpRight size={13} />
          </summary>
          <p>
            Professional experience, education, certifications, and skills are
            sourced from the supplied CV. Repository details and evaluation
            limits are distinguished in each case study.
          </p>
        </details>
      </aside>
    </>
  );
}
