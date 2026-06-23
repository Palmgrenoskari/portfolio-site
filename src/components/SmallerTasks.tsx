"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Github } from "lucide-react";
import TechBadge from "./TechBadge";
import { SmallerProject } from "@/data/types";

type SmallerProjectsProps = SmallerProject;

export default function SmallerTasks({
  title,
  description,
  technologies,
  githubUrl,
}: SmallerProjectsProps) {
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
          <p className="font-sans text-fg/80 leading-relaxed mb-4 whitespace-pre-line">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} type={tech.type} />
            ))}
          </div>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-mono text-sm text-accent hover:underline"
            >
              view on github
              <Github className="w-4 h-4 ml-1" />
            </a>
          )}
        </div>
      ) : (
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} type={tech.type} />
          ))}
        </div>
      )}
    </div>
  );
}
