import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-mono text-xs text-muted flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>
          <span className="text-accent">$</span> echo &copy;{" "}
          {new Date().getFullYear()} Oskari Palmgren
        </span>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/palmgrenoskari"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accent transition-colors"
          >
            <FaGithub className="h-4 w-4" />
          </Link>
          <Link
            href="https://linkedin.com/in/osgren"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent transition-colors"
          >
            <FaLinkedin className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
