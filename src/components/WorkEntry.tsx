import Image from "next/image";
import TechBadge from "./TechBadge";
import { WorkEntry as WorkEntryType } from "@/data/types";

type WorkEntryProps = WorkEntryType;

export default function WorkEntry({
  logo,
  company,
  role,
  period,
  description,
  technologies,
  isHypothetical = false,
}: WorkEntryProps) {
  return (
    <div
      className={`bg-surface border rounded-lg p-6 mb-6 transition-colors hover:border-accent/50 ${
        isHypothetical ? "border-dashed border-muted" : "border-border"
      }`}
    >
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={logo || "/placeholder.svg"}
          alt={`${company} logo`}
          width={56}
          height={56}
          className="rounded-full bg-white/90 p-1 object-contain shrink-0"
        />
        <div>
          <h3 className="text-lg font-semibold">{company}</h3>
          <p className="font-sans text-fg/80">{role}</p>
          <p className="font-mono text-xs text-muted mt-0.5">{period}</p>
        </div>
      </div>
      <p className="font-sans text-fg/80 leading-relaxed mb-4 whitespace-pre-line">
        {description}
      </p>
      {technologies && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} type={tech.type} />
          ))}
        </div>
      )}
    </div>
  );
}
