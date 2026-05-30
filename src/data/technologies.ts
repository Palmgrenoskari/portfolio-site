import { Technology } from "./types";

// Curated to reflect what I actively build with — kept condensed on purpose.
// The longer tail of tools/libraries (Vite, Zod, Railway, Cloudflare, SQLite,
// Streamlit, R, K8s, …) lives on the Projects / About pages, in context.
export const technologies: Technology[] = [
  { name: "Python", type: "language" },
  { name: "TypeScript", type: "language" },
  { name: "JavaScript", type: "language" },
  { name: "React", type: "framework" },
  { name: "Next.js", type: "framework" },
  { name: "Fastify", type: "framework" },
  { name: "Tailwind CSS", type: "framework" },
  { name: "PostgreSQL", type: "database" },
  { name: "Prisma", type: "database" },
  { name: "Node.js", type: "tool" },
  { name: "Docker", type: "tool" },
  { name: "Git", type: "tool" },
  { name: "AWS", type: "cloud" },
  { name: "Azure", type: "cloud" },
];
