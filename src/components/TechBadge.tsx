import { TechnologyType } from "@/data/types";

interface TechBadgeProps {
  name: string;
  // Kept for grouping/semantics; no longer drives colour.
  type?: TechnologyType;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="font-mono text-xs text-muted border border-border rounded px-2 py-0.5 hover:border-accent hover:text-accent transition-colors">
      {name}
    </span>
  );
}
