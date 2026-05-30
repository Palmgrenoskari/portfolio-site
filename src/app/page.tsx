import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TechBadge from "@/components/TechBadge";
import { defaultStack, projects } from "@/data";

const firstSentence = (text: string) =>
  text
    .trim()
    .split("\n")[0]
    .split(/(?<=\.)\s/)[0];

// Featured = the two live, current projects.
const featured = projects.slice(0, 2);

export default function Home() {
  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="mb-16">
        <p className="font-mono text-sm text-accent">// software developer</p>
        <h1 className="text-4xl sm:text-5xl font-bold mt-2">Oskari Palmgren</h1>
        <div className="font-sans text-fg/80 leading-relaxed mt-4 max-w-xl space-y-3">
          <p>
            Full-time developer working on software robotics and modern
            AI-driven solutions, building useful products in close collaboration
            with customers.
          </p>
          <p>
            Recently my work has mainly revolved around data retrieval
            tooling/MCPs for LLMs (RAG, Text2SQL, ...).
          </p>
          <p>Varying hobby projects on the side :)</p>
        </div>

        <div className="font-mono text-sm text-muted mt-5">
          <p>
            <span className="text-accent">$</span> currently building
          </p>
          <ul className="mt-1.5 space-y-1 pl-4">
            <li>
              <span className="text-accent">&rarr;</span>{" "}
              <a
                href="https://paivanpulma.fi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg/90 hover:text-accent hover:underline transition-colors"
              >
                Päivänpulma.fi
              </a>
            </li>
            <li>
              <span className="text-accent">&rarr;</span>{" "}
              <a
                href="https://exilium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg/90 hover:text-accent hover:underline transition-colors"
              >
                Exilium.com
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <Link
            href="https://github.com/palmgrenoskari"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-2xl text-muted hover:text-accent transition-colors"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/osgren"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-2xl text-muted hover:text-accent transition-colors"
          >
            <FaLinkedin />
          </Link>
        </div>
      </section>

      {/* Featured work */}
      <section className="mb-16">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-mono text-xl">
            <span className="text-accent">##</span> featured work
          </h2>
          <Link
            href="/projects"
            className="font-mono text-sm text-accent hover:underline inline-flex items-center gap-1"
          >
            all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((project) => (
            <div
              key={project.title}
              className="bg-surface border border-border rounded-lg p-5 flex flex-col transition-colors hover:border-accent/50"
            >
              <h3 className="text-lg font-semibold">
                {project.title.split(" - ")[0]}
              </h3>
              <p className="font-sans text-sm text-fg/80 leading-relaxed mt-2 grow">
                {firstSentence(project.description)}.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.slice(0, 10).map((tech) => (
                  <TechBadge
                    key={tech.name}
                    name={tech.name}
                    type={tech.type}
                  />
                ))}
              </div>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-mono text-sm text-accent hover:underline mt-4"
                >
                  visit live site <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Default stack — short and opinionated; full detail lives in projects */}
      <section className="mb-16">
        <p className="font-mono text-sm text-accent mb-4">
          // default go-to stack
        </p>
        <div className="border-l-2 border-accent pl-4 space-y-1.5 font-mono text-sm">
          {defaultStack.map((group) => (
            <div key={group.label} className="flex gap-3">
              <span className="text-muted w-12 shrink-0">{group.label}</span>
              <span className="text-fg/90">{group.items.join(" · ")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Explore */}
      <section className="border-t border-border pt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
        <Link
          href="/projects"
          className="text-muted hover:text-accent transition-colors inline-flex items-center gap-1"
        >
          &rarr; projects
        </Link>
        <Link
          href="/about"
          className="text-muted hover:text-accent transition-colors inline-flex items-center gap-1"
        >
          &rarr; about &amp; background
        </Link>
      </section>
    </div>
  );
}
