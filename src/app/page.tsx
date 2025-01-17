import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TechBadge from "@/components/TechBadge";

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
    { name: "Git", type: "tool" as const },
    { name: "Docker", type: "tool" as const },
    { name: "Node.js", type: "tool" as const },
    { name: "MySQL", type: "database" as const },
    { name: "SQLite", type: "database" as const },
    { name: "MongoDB", type: "database" as const },
    { name: "Azure", type: "cloud" as const },
    { name: "AWS", type: "cloud" as const },
  ];

  return (
    <div className="flex flex-col items-center">
      <Image
        src="/placeholder.svg"
        alt="Your Name"
        width={200}
        height={200}
        className="rounded-full mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">Oskari Palmgren</h1>
      <p className="text-xl text-gray-300 mb-6 text-center max-w-2xl">
        Full-stack developer passionate about creating beautiful and functional
        web applications. Experienced in modern JavaScript frameworks and always
        eager to learn new technologies.
      </p>
      <div className="flex space-x-4 mb-8">
        <Link
          href="https://github.com/palmgrenoskari"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-blue-400 transition-colors"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://linkedin.com/in/osgren"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-blue-400 transition-colors"
        >
          <FaLinkedin />
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {technologies.map((tech) => (
          <TechBadge key={tech.name} name={tech.name} type={tech.type} />
        ))}
      </div>
    </div>
  );
}
