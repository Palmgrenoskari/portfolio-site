import Image from "next/image";
import TechBadge from "./TechBadge";
import { EducationEntry as EducationEntryType } from "@/data/types";

type EducationEntryProps = EducationEntryType;

export default function EducationEntry({
  logo,
  institution,
  degree,
  period,
  description,
  credits,
  thesis,
  gpa,
  technologies,
}: EducationEntryProps) {
  return (
    <div className="bg-surface border border-border rounded-lg p-6 mb-6 transition-colors hover:border-accent/50">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={logo}
          alt={`${institution} logo`}
          width={56}
          height={56}
          className="rounded-full bg-white/90 p-1 object-contain shrink-0"
        />
        <div>
          <h3 className="text-lg font-semibold">{institution}</h3>
          <p className="font-sans text-fg/80">{degree}</p>
          <p className="font-mono text-xs text-muted mt-0.5">{period}</p>
        </div>
      </div>
      <p className="font-sans text-fg/80 leading-relaxed mb-3">{description}</p>
      <div className="font-mono text-xs text-muted space-y-1 mb-4">
        {credits && (
          <p>
            <span className="text-accent">credits:</span> {credits}
          </p>
        )}
        {thesis && (
          <p>
            <span className="text-accent">thesis:</span> {thesis}
          </p>
        )}
        {gpa !== undefined && (
          <p>
            <span className="text-accent">gpa:</span> {gpa.toFixed(2)}
          </p>
        )}
      </div>
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
