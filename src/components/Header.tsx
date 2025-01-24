import Link from "next/link";
import LogoWithName from "@/components/ClickableLogo";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <LogoWithName
            name="Oskari Palmgren"
            description="MSc Student & Aspiring GenAI Dev"
          />
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              className="hover:text-green-400 transition-colors"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/education"
              className="hover:text-yellow-400 transition-colors"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-purple-400 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/certifications"
              className="hover:text-red-400 transition-colors"
            >
              Certifications
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
