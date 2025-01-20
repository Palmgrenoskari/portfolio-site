import Image from "next/image";
import TechBadge from "./TechBadge";

interface Technology {
  name: string;
  type: "language" | "framework" | "tool" | "database" | "cloud" | "other";
}

interface WorkEntryProps {
  logo: string;
  company: string;
  role: string;
  period: string;
  description?: string;
  technologies?: Technology[];
  colorIndex: number;
  isHypothetical?: boolean;
}

const colors = [
  "text-blue-400",
  "text-green-400",
  "text-yellow-400",
  "text-purple-400",
  "text-red-400",
];

export default function WorkEntry({
  logo,
  company,
  role,
  period,
  description,
  technologies,
  colorIndex,
  isHypothetical = false,
}: WorkEntryProps) {
  return (
    <div
      className={`
      bg-gray-800 rounded-lg p-6 mb-6 shadow-lg 
      transition-all duration-300 ease-in-out 
      hover:shadow-xl hover:bg-gray-750 hover:scale-[1.02]
      ${
        isHypothetical
          ? "border-2 border-dashed border-gray-600 bg-opacity-80"
          : ""
      }
    `}
    >
      <div className="flex items-center mb-4">
        <Image
          src={logo || "/placeholder.svg"}
          alt={`${company} logo`}
          width={64}
          height={64}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-bold">{company}</h3>
          <p className="text-gray-400">{role}</p>
          <p className="text-sm text-gray-500">{period}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-4 whitespace-pre-line">{description}</p>
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
