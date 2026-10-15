export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
  status: string;
}
export const experience: Experience[] = [
  {
    role: "Infrastructure Specialist (Cloud & Virtualization)",
    organization: "Prosoft",
    period: "Aug 2026 – Present",
    description:
      "Lead evaluations of Scale Computing HyperCore and Platform9 Private Cloud Director for enterprise VMware migrations. Design highly available compute, storage, and networking; size bare-metal and private-cloud clusters; translate fault-tolerance and hybrid-cloud requirements into architectures for government, manufacturing, and industrial accounts.",
    status: "CURRENT ROLE",
  },
  {
    role: "DevOps & Infrastructure Engineer Intern",
    organization: "BARQ Systems",
    period: "Aug 2025",
    description:
      "Automated deployment workflows with Docker and CI/CD. Supported Linux administration, networking, and infrastructure monitoring for scalable enterprise deployments and consistent environments.",
    status: "INTERNSHIP",
  },
  {
    role: "Machine Learning Engineer Intern",
    organization: "CLS Learning Solutions",
    period: "Apr 2025 – Jul 2025",
    description:
      "Built classification and predictive pipelines with Python, scikit-learn, XGBoost, and Pandas, covering validation, feature engineering, and cross-validation. Used Optuna, ROC-AUC, macro-F1, and experiment/artifact tracking to make model development reproducible.",
    status: "INTERNSHIP",
  },
];
