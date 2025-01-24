import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <div>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-purple-400">
          Projects
        </h1>
      </div>
      <div className="bg-white/5 p-6 rounded-lg mb-8 backdrop-blur-sm">
        <p className="text-xl text-yellow-400 mb-4">🚧 Under Construction 🚧</p>
        <div className="flex items-center gap-4">
          <p className="text-gray-300">
            Not yet implemented. Check Github in the meantime:
          </p>
          <Link
            href="https://github.com/palmgrenoskari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}
