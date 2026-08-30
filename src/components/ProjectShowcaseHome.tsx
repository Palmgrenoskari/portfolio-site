import { ArrowRight } from "lucide-react";
import { Project, ProjectShowcase } from "@/data/types";
import BrandMark from "./BrandMark";
import ShowcaseHero from "./ShowcaseHero";
import StatLine from "./StatLine";
import { PLATE } from "./plates";

interface ProjectShowcaseHomeProps {
  project: Project & { showcase: ProjectShowcase };
}

/** Featured card on the home page: image header, hook, stat line, CTA (no tech chips — those live on /projects). */
export default function ProjectShowcaseHome({
  project,
}: ProjectShowcaseHomeProps) {
  const { title, liveUrl, showcase } = project;
  const shortTitle = title.split(" - ")[0];

  return (
    <div
      style={PLATE[showcase.plate].vars}
      className="bg-surface text-fg border border-border rounded-lg overflow-hidden flex flex-col transition-colors hover:border-accent/50"
    >
      <ShowcaseHero
        hero={showcase.hero}
        plate={showcase.plate}
        title={shortTitle}
      />
      <div className="p-5 flex flex-col grow">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <BrandMark
            logo={showcase.logo}
            mark={showcase.mark}
            size={20}
            alt={`${shortTitle} logo`}
          />
          {shortTitle}
        </h3>
        <p className="font-sans text-sm text-fg/80 leading-relaxed mt-2">
          {showcase.hook}
        </p>
        <StatLine stats={showcase.stats} className="mt-3" />
        <div className="grow" />
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-sm text-accent hover:underline mt-4"
          >
            play <ArrowRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
