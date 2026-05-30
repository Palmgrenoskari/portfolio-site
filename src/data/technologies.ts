// Intentionally short and opinionated — "the stack I reach for", not an
// inventory. The full tech detail lives on each project (in context), so there's
// nothing to second-guess here. Grouped by purpose.
export const defaultStack: { label: string; items: string[] }[] = [
  {
    label: "lang",
    items: ["TypeScript (Web)", "Python (AI/Automation/Analytics)"],
  },
  { label: "build", items: ["React", "Next.js", "Fastify"] },
  { label: "data", items: ["PostgreSQL", "Prisma"] },
  { label: "ship", items: ["Vercel", "Railway", "Docker", "AWS", "Azure"] },
];
