export type Verification = `[TODO_VERIFY: ${string}]`;
export const siteConfig = {
  name: "Mohamed Ehab",
  fullName: "Mohamed Ehab El Molla",
  title:
    "Machine Learning & MLOps Engineer | Applied AI, NLP & Cloud Infrastructure",
  description:
    "Mohamed Ehab is a machine learning and MLOps engineer, first-author IEEE IMSA 2026 researcher, and cloud infrastructure specialist in Cairo. Explore published research, on-device AI, RAG, and source-backed engineering projects.",
  location: "Dokki, Cairo, Egypt",
  phoneDisplay: "+20 111 506 6400",
  phoneHref: "+201115066400",
  email: "imody10@gmail.com",
  github: "https://github.com/ElMolla10",
  linkedin: "https://www.linkedin.com/in/mohamed-el-molla/",
  cv: "/Mohamed_ElMolla_AIEngineer_CV.pdf",
  portrait: "/images/mohamed-ehab.webp",
  portraitAlt: "Mohamed Ehab, ML and infrastructure engineer",
  domain: "https://mohamed-ehab-portfolio.pages.dev",
  domains: [
    {
      title: "On-device intelligence",
      detail: "Local inference. Explicit guardrails.",
      path: "gain/packages/engine",
    },
    {
      title: "Retrieval systems",
      detail: "Ingestion to grounded answers.",
      path: "ragbase/backend",
    },
    {
      title: "Algorithmic optimization",
      detail: "Constraints before recommendations.",
      path: "FPL-Edge/app/lib",
    },
    {
      title: "Production infrastructure",
      detail: "The systems beneath the software.",
      path: "infrastructure / reliability",
    },
  ],
} as const;
export function publicUrl(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.domain;
  if (!raw) return undefined;
  const url = new URL(raw);
  if (!["https:", "http:"].includes(url.protocol))
    throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) URL");
  return url.origin;
}
