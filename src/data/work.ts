import { WorkEntry } from "./types";

export const workEntries: WorkEntry[] = [
  {
    logo: "/images/digia_logo_v1.png",
    company: "Digia",
    role: "Software Robotics Developer",
    period: "Aug 2025 - Present",
    description: `Software robotics and modern AI-driven solutions, building useful products in close collaboration with customers.

Currently primarily working with data-retrieval tooling for LLMs (RAG, Text2SQL, Ingestion pipelines from various source systems), agentic loops and MCP.`,
    technologies: [
      { name: "Python", type: "language" },
      { name: "TypeScript", type: "language" },
      { name: "React", type: "framework" },
      { name: "PostgreSQL", type: "database" },
      { name: "Docker", type: "tool" },
      { name: "Git", type: "tool" },
      { name: "Azure", type: "cloud" },
      { name: "AWS", type: "cloud" },
      { name: "Consulting", type: "soft_skill" },
    ],
  },
  {
    logo: "/images/telia_transparent.png",
    company: "Telia Finland",
    role: "IA Developer Trainee",
    period: "May 2024 - Aug 2024",
    description: `Developed applications for various internal-use intelligent automation projects. Mostly LLM/RAG solutions.

Co-host in Telia 2024 Q3 Flash (Quarterly event)`,
    technologies: [
      { name: "Python", type: "language" },
      { name: "Streamlit", type: "framework" },
      { name: "Oracle SQL", type: "database" },
      { name: "Docker", type: "tool" },
      { name: "K8s", type: "tool" },
      { name: "Git", type: "tool" },
      { name: "Azure", type: "cloud" },
      { name: "Business Skills", type: "soft_skill" },
    ],
  },
  {
    logo: "/images/hesburger_transparent.png",
    company: "Hes-Pro (Finland) Oy",
    role: "Warehouse Worker",
    period: "Jan 2020 - Oct 2025",
    description:
      "Physical work in Hesburger's central warehouse. Full hours during the summer (excl. 2024), 30-60h/month during studies.",
    technologies: [
      { name: "People skills", type: "soft_skill" },
      { name: "Friendships", type: "soft_skill" },
      { name: "Physical health", type: "soft_skill" },
    ],
  },
];
