import { WorkEntry } from "./types";

export const workEntries: WorkEntry[] = [
  {
    logo: "/images/digia_logo_v1.png",
    company: "Digia",
    role: "Software Robotics Developer",
    period: "Aug 2025 - Present",
    description: `Developing software robotics automations, with hands-on involvement in customer collaboration and ongoing automation maintenance.

Recently, I’ve also worked in AI consulting, providing insights and recommendations for AI-driven projects as well as contributing to their development.`,
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
    description: `Developed Full-Stack GenAI Applications for various internal-use intelligent automation projects. My role spanned the entire lifecycle of application development, from initial project setup to deployment.

        Occasionally, I also got the chance to act as a bridge of communication between developers and business people, facilitating clear jargon-free communication.`,
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
