"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Github } from "lucide-react";
import TechBadge from "./TechBadge";
import { PlannedProject } from "@/data/types";

type ProjectPlansProps = PlannedProject;

const statusLabel: Record<PlannedProject["status"], string> = {
  planning: "planning",
  archived: "archived",
  "in-progress": "in-progress",
};

export default function ProjectPlans({
  title,
  description,
  plannedTechnologies,
  status,
  githubUrl,
}: ProjectPlansProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-surface border border-border rounded-lg p-6 mb-6 transition-colors hover:border-accent/50">
      <div
        className="flex justify-between items-center gap-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-muted shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted shrink-0" />
        )}
      </div>

      {isExpanded ? (
        <div className="mt-4">
          <div className="mb-4 font-mono text-xs text-muted">
            <span className="text-accent">status:</span> {statusLabel[status]}
          </div>
          <p className="font-sans text-fg/80 leading-relaxed mb-4 whitespace-pre-line">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {plannedTechnologies.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} type={tech.type} />
            ))}
          </div>
          {(status === "in-progress" || status === "archived") && githubUrl && (
            <div className="mt-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-mono text-sm text-accent hover:underline"
              >
                <Github className="w-4 h-4 mr-1" />
                view on github
              </a>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-4 flex flex-wrap gap-2">
          {plannedTechnologies.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} type={tech.type} />
          ))}
        </div>
      )}
    </div>
  );
}
