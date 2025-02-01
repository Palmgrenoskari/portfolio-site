"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Github } from "lucide-react";
import TechBadge from "./TechBadge";

interface Technology {
  name: string;
  type: "language" | "framework" | "tool" | "database" | "cloud";
}

interface SmallerProjectsProps {
  title: string;
  description: string;
  technologies: Technology[];
  githubUrl?: string;
}

export default function SmallerTasks({
  title,
  description,
  technologies,
  githubUrl,
}: SmallerProjectsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-750 hover:scale-[1.02]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-bold">{title}</h3>
        {isExpanded ? (
          <ChevronUp className="w-6 h-6 text-gray-400" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-400" />
        )}
      </div>

      {isExpanded ? (
        <div className="mt-4">
          <p className="text-gray-300 mb-4 whitespace-pre-line">
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
              className="flex items-center text-blue-400 hover:text-blue-300"
            >
              View on GitHub
              <Github className="w-5 h-5 ml-1" />
            </a>
          )}
        </div>
      ) : (
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} type={tech.type} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
