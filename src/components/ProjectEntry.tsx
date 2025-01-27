import TechBadge from "./TechBadge";
import { ExternalLink } from "lucide-react";
interface Technology {
  name: string;
  type: "language" | "framework" | "tool" | "database" | "cloud";
}

interface ProjectEntryProps {
  title: string;
  description: string;
  liveUrl: string;
  technologies: Technology[];
}
export default function ProjectEntry({
  title,
  description,
  liveUrl,
  technologies,
}: ProjectEntryProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-750 hover:scale-[1.02]">
      <h3 className={`text-xl font-bold mb-2`}>{title}</h3>
      <p className="text-gray-300 mb-4 whitespace-pre-line">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <TechBadge key={tech.name} name={tech.name} type={tech.type} />
        ))}
      </div>
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-400 hover:text-blue-300"
        >
          Visit Live Site <ExternalLink className="ml-1 w-4 h-4" />
        </a>
      )}
    </div>
  );
}
