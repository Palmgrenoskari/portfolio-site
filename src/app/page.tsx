import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TechBadge from "@/components/TechBadge";
import WiseProfilePicture from "@/components/WiseProfilePicture";

export default function Home() {
  const technologies = [
    { name: "Python", type: "language" as const },
    { name: "JavaScript", type: "language" as const },
    { name: "TypeScript", type: "language" as const },
    { name: "HTML5", type: "language" as const },
    { name: "CSS3", type: "language" as const },
    { name: "R", type: "language" as const },
    { name: "React", type: "framework" as const },
    { name: "Next.js", type: "framework" as const },
    { name: "Streamlit", type: "framework" as const },
    { name: "Tailwind CSS", type: "framework" as const },
    { name: "MySQL", type: "database" as const },
    { name: "SQLite", type: "database" as const },
    { name: "MongoDB", type: "database" as const },
    { name: "Git", type: "tool" as const },
    { name: "Docker", type: "tool" as const },
    { name: "K8s", type: "tool" as const },
    { name: "Node.js", type: "tool" as const },
    { name: "Azure", type: "cloud" as const },
    { name: "AWS", type: "cloud" as const },
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
      <WiseProfilePicture />
      <p className="text-xs text-gray-500 mt-2 text-center italic">
        Temporary corgi placeholder (because who doesn't love these fluff
        balls?)
      </p>
      <br />
      <h1 className="text-4xl font-bold mb-4">Oskari Palmgren</h1>
      <p className="text-xl text-gray-300 mb-6 text-center max-w-3xl">
        Master's student in ICT specializing in Data Analytics and Health
        Technology.
        <br />
        <br />
        Experienced in building full-stack GenAI-driven applications with Python
        and Azure. Skilled in modern web technologies like JavaScript, React,
        and Next.js, creating dynamic and responsive applications.
      </p>
      <div className="flex space-x-4 mb-8">
        <Link
          href="https://github.com/palmgrenoskari"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://linkedin.com/in/osgren"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
        >
          <FaLinkedin />
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-2 w-full">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="transition-all duration-300 hover:scale-110"
          >
            <TechBadge name={tech.name} type={tech.type} />
          </div>
        ))}
      </div>
    </div>
  );
}
