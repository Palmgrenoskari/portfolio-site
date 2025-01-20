import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/corgi.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl font-bold">Your Name</span>
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
