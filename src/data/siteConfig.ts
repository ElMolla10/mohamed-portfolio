export type Verification = `[TODO_VERIFY: ${string}]`;
export const siteConfig = {
  name: "Mohamed Ehab",
  title: "ML Engineer · Software & Infrastructure",
  description:
    "Mohamed Ehab is an AI/ML and infrastructure engineer in Cairo, building offline-first mobile intelligence, retrieval systems, and algorithmic decision engines. Explore source-backed engineering case studies.",
  location: "Cairo, Egypt",
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
