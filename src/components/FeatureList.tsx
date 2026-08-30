import {
  CalendarDays,
  GitBranch,
  LucideIcon,
  MoonStar,
  Newspaper,
  Store,
  Swords,
  TrendingUp,
  Users,
} from "lucide-react";
import { FeatureIcon, ProjectShowcase } from "@/data/types";

const ICONS: Record<FeatureIcon, LucideIcon> = {
  swords: Swords,
  "git-branch": GitBranch,
  store: Store,
  "moon-star": MoonStar,
  "calendar-days": CalendarDays,
  newspaper: Newspaper,
  "trending-up": TrendingUp,
  users: Users,
};

interface FeatureListProps {
  features: ProjectShowcase["features"];
  className?: string;
}

export default function FeatureList({
  features,
  className = "",
}: FeatureListProps) {
  return (
    <ul className={`space-y-1.5 ${className}`}>
      {features.map((f) => {
        const Icon = ICONS[f.icon];
        return (
          <li
            key={f.text}
            className="flex items-start gap-2.5 font-sans text-sm text-fg/85 leading-snug"
          >
            <Icon className="w-4 h-4 mt-0.5 text-accent shrink-0" aria-hidden />
            <span>{f.text}</span>
          </li>
        );
      })}
    </ul>
  );
}
