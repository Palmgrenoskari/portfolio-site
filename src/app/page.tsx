import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import BrandMark from "@/components/BrandMark";
import ProjectShowcaseHome from "@/components/ProjectShowcaseHome";
import { defaultStack, projects } from "@/data";
import { Project, ProjectShowcase } from "@/data/types";

// Featured = the live projects that carry a showcase (the two games).
const featured = projects
  .filter((p): p is Project & { showcase: ProjectShowcase } => !!p.showcase)
  .slice(0, 2);

// Same source of truth for the "currently building" links.
const building = featured.map((p) => ({
  label: new URL(p.liveUrl!).host.replace(/^www\./, ""),
  href: p.liveUrl!,
  logo: p.showcase.logo,
  mark: p.showcase.mark,
  title: p.title.split(" - ")[0],
}));

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
            Currently primarily working with data-retrieval tooling for LLMs
            (RAG, Text2SQL, Ingestion pipelines from various source systems),
            agentic loops and MCP.
          </p>
          <p>Varying hobby projects on the side :)</p>
        </div>

        <div className="font-mono text-sm text-muted mt-5">
          <p>
            <span className="text-accent">$</span> currently building
          </p>
          <ul className="mt-1.5 space-y-1 pl-4">
            {building.map((b) => (
              <li key={b.href} className="flex items-center gap-2">
                <span className="text-accent">&rarr;</span>
                <BrandMark
                  logo={b.logo}
                  mark={b.mark}
                  size={16}
                  alt={`${b.title} logo`}
                />
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg/90 hover:text-accent hover:underline transition-colors"
                >
                  {b.label}
                </a>
              </li>
            ))}
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
            <ProjectShowcaseHome key={project.title} project={project} />
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
