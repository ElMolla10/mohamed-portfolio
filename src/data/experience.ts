import type { Verification } from "./siteConfig";
export interface Experience {
  role: string;
  organization: string;
  period: string | Verification;
  description: string;
  status: string;
  verification?: Verification;
}
export const experience: Experience[] = [
  {
    role: "Infrastructure Engineering",
    organization: "Prosoft",
    period: "[TODO_VERIFY: Prosoft start date]",
    description:
      "Current infrastructure role, as supplied in the portfolio brief. The scope of enterprise reliability, deployment, networking, and systems administration needs confirmation before specific responsibilities are published.",
    status: "CURRENT · USER-SUPPLIED",
    verification: "[TODO_VERIFY: exact title and approved responsibilities]",
  },
  {
    role: "Applied AI & product engineering",
    organization: "Independent projects",
    period: "Repository-backed work",
    description:
      "Built GAIN’s offline mobile architecture, RAGBase’s retrieval pipeline, and FPL Edge’s constrained decision engine. These are personal engineering projects, not employment claims.",
    status: "PROJECT EXPERIENCE",
  },
  {
    role: "Previous ML / DevOps roles",
    organization: "Details pending",
    period: "[TODO_VERIFY: employers and dates]",
    description:
      "Add verified internships or previous roles, with exact dates and responsibilities.",
    status: "VERIFICATION PENDING",
  },
];
