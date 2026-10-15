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
      "PyTorch",
      "TensorFlow / Keras",
      "scikit-learn",
      "XGBoost",
      "Hugging Face Transformers",
      "Reinforcement learning",
      "Optuna",
      "On-device inference",
      "Model evaluation",
    ],
    evidence: "IEEE research + CLS internship + GAIN",
    href: "#research",
  },
  {
    name: "LLMs, RAG & NLP",
    tools: [
      "RAG",
      "pgvector / IVFFlat",
      "Whisper ASR",
      "Ollama",
      "OpenAI / Groq APIs",
      "Semantic chunking",
      "Embedding pipelines",
      "sentence-transformers",
    ],
    evidence: "RAGBase + MALIK / Arabic ASR · CV & source",
    href: "#malik",
  },
  {
    name: "Python & data engineering",
    tools: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Pandera",
      "Feature engineering",
      "Cross-validation",
      "Algorithmic optimization",
      "Playwright",
    ],
    evidence: "CLS internship + price intelligence + FPL Edge",
    href: "#price-intelligence",
  },
  {
    name: "Software & mobile",
    tools: [
      "TypeScript / JavaScript",
      "C",
      "React Native / Expo",
      "React / Next.js",
      "FastAPI",
      "Streamlit",
      "REST APIs",
    ],
    evidence: "GAIN + RAGBase + FPL Edge",
    href: "#gain",
  },
  {
    name: "Cloud, DevOps & infrastructure",
    tools: [
      "AWS · EC2 / RDS / S3",
      "Docker / Compose",
      "GitHub Actions",
      "MLflow",
      "DVC",
      "Airflow",
      "Linux",
      "Kubernetes",
      "Scale Computing HyperCore",
      "Platform9",
      "Cloudflare",
    ],
    evidence: "Prosoft + BARQ Systems · infrastructure experience",
    href: "#experience",
  },
  {
    name: "Databases & storage",
    tools: [
      "PostgreSQL",
      "SQLite",
      "Supabase",
      "pgvector / IVFFlat",
      "Relational modeling",
      "Drizzle / D1",
    ],
    evidence: "GAIN + RAGBase + retail price history",
    href: "#ragbase",
  },
];
