export interface SkillDomain {
  name: string;
  tools: string[];
  evidence: string;
  href: string;
  pending?: string;
}
export const skills: SkillDomain[] = [
  {
    name: "AI & machine learning",
    tools: [
      "XGBoost",
      "On-device inference",
      "Model evaluation",
      "scikit-learn¹",
      "TensorFlow¹",
    ],
    evidence: "GAIN · model contracts & paired evaluation",
    href: "#gain",
    pending: "[TODO_VERIFY: PyTorch and Optuna project evidence]",
  },
  {
    name: "LLMs, RAG & NLP",
    tools: [
      "sentence-transformers",
      "Embedding pipelines",
      "Vector search",
      "Groq / Llama",
    ],
    evidence: "RAGBase · retrieval to grounded generation",
    href: "#ragbase",
    pending: "[TODO_VERIFY: Ollama, Gemma and Whisper case studies]",
  },
  {
    name: "Python & data engineering",
    tools: ["Python", "SQL", "Pandas¹", "Pandera¹", "Algorithmic optimization"],
    evidence: "RAGBase + FPL Edge · data to decisions",
    href: "#fpl-edge",
  },
  {
    name: "Software & mobile",
    tools: [
      "TypeScript",
      "React Native",
      "Expo",
      "Next.js",
      "React",
      "REST APIs",
    ],
    evidence: "GAIN + FPL Edge · complete applications",
    href: "#gain",
  },
  {
    name: "DevOps & infrastructure",
    tools: [
      "Docker",
      "GitHub Actions",
      "Cloudflare Workers",
      "Railway",
      "MLflow¹",
      "DVC¹",
    ],
    evidence: "RAGBase · deployment & CI",
    href: "#ragbase",
    pending:
      "[TODO_VERIFY: Prosoft infrastructure scope and Linux administration]",
  },
  {
    name: "Databases & storage",
    tools: [
      "PostgreSQL",
      "pgvector",
      "SQLite",
      "Relational modeling",
      "Drizzle / D1",
    ],
    evidence: "GAIN + RAGBase · persistence & retrieval",
    href: "#architecture",
  },
];
