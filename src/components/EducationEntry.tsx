import Image from "next/image";
import TechBadge from "./TechBadge";

interface Technology {
  name: string;
  type:
    | "language"
    | "framework"
    | "tool"
    | "database"
    | "cloud"
    | "soft_skill"
    | "hard_skill";
}

interface EducationEntryProps {
  logo: string;
  institution: string;
  degree: string;
  period: string;
  description?: string;
  credits?: string;
  thesis?: string;
  gpa?: number;
  technologies?: Technology[];
}

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
    <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-750 hover:scale-[1.02]">
      <div className="flex items-center mb-4">
        <Image
          src={logo}
          alt={`${institution} logo`}
          width={64}
          height={64}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-bold">{institution}</h3>
          <p className="text-gray-400">{degree}</p>
          <p className="text-sm text-gray-500">{period}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      {credits && <p className="text-gray-300 mb-2">Credits: {credits}</p>}
      {thesis && <p className="text-gray-300 mb-2">Thesis: {thesis}</p>}
      {gpa !== undefined && (
        <p className="text-gray-300 mb-4 whitespace-pre-line">
          GPA: {gpa.toFixed(2)}
        </p>
      )}
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
