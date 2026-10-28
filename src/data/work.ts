import { WorkEntry } from "./types";

export const workEntries: WorkEntry[] = [
  {
    logo: "/images/peligen_icon.svg",
    company: "PeliGen Oy",
    url: "https://peligengames.com",
    role: "Founder",
    period: "Oct 2026 - Present",
    description: `My own indie game studio, run alongside my full-time role, focusing on games designed to fit around everyday life.

I lead product direction, design, full-stack development, infrastructure and community for two games in alpha: Exilium, a browser idle MMORPG, and Päivänpulma, a Finnish daily puzzle platform.`,
    technologies: [
      { name: "TypeScript", type: "language" },
      { name: "React", type: "framework" },
      { name: "Next.js", type: "framework" },
      { name: "Fastify", type: "framework" },
      { name: "PostgreSQL", type: "database" },
      { name: "Prisma", type: "database" },
      { name: "Vercel", type: "cloud" },
      { name: "Railway", type: "cloud" },
    ],
  },
  {
    logo: "/images/digia_logo_v1.png",
    company: "Digia",
    role: "Software Robotics Developer",
    period: "Aug 2025 - Present",
    description: `Developing software robotics and AI-driven solutions in close collaboration with customers.

Building LLM data-retrieval solutions, including modular and agentic RAG, Text-to-SQL, and synchronised ingestion pipelines across multiple source systems. Also designing and implementing agentic workflows and MCP servers that expose selected services to AI clients.`,
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
    description: `Built internal applications for intelligent-automation projects, primarily using LLMs and RAG.

Co-hosted Telia's Q3 Flash quarterly event in 2024.`,
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
      "Physical work in Hesburger's central warehouse. Full-time during summers (excl. 2024) and 30–60 hours per month alongside studies.",
    technologies: [
      { name: "People skills", type: "soft_skill" },
      { name: "Friendships", type: "soft_skill" },
      { name: "Physical health", type: "soft_skill" },
    ],
  },
];
