import { TechnologyType } from "@/data/types";

const techColors: Record<TechnologyType, string> = {
  language: "bg-blue-600",
  framework: "bg-green-600",
  tool: "bg-yellow-600",
  database: "bg-purple-600",
  cloud: "bg-red-600",
  soft_skill: "bg-teal-600",
  hard_skill: "bg-indigo-600",
};

interface TechBadgeProps {
  name: string;
  type: TechnologyType;
}

export default function TechBadge({ name, type }: TechBadgeProps) {
  return (
    <span
      className={`${techColors[type]} text-white px-3 py-1 rounded-full text-sm`}
    >
      {name}
    </span>
  );
}
