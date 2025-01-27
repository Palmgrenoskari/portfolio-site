"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import TechBadge from "./TechBadge";

interface Technology {
  name: string;
  type: "language" | "framework" | "tool" | "database" | "cloud";
}

interface InProgressProjectProps {
  title: string;
  description: string;
  plannedTechnologies: Technology[];
  status: "planning" | "in-progress";
}

export default function InProgressProject({
  title,
  description,
  plannedTechnologies,
  status,
}: InProgressProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-750">
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

      {isExpanded && (
        <div className="mt-4">
          <p className="text-gray-300 mb-4 whitespace-pre-line">
            {description}
          </p>
          <div className="flex items-center mb-4">
            <span className="text-sm font-semibold mr-2">Status:</span>
            <span
              className={`px-2 py-1 rounded-full text-xs ${
                status === "planning"
                  ? "bg-yellow-600 text-yellow-100"
                  : "bg-green-600 text-green-100"
              }`}
            >
              {status === "planning" ? "Planning" : "In Progress"}
            </span>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2">
              Planned Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {plannedTechnologies.map((tech) => (
                <TechBadge key={tech.name} name={tech.name} type={tech.type} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
