import { ExternalLink } from "lucide-react";
import { Project, ProjectShowcase as Showcase } from "@/data/types";
import TechBadge from "./TechBadge";
import BrandMark from "./BrandMark";
import ArtStrip from "./ArtStrip";
import FeatureList from "./FeatureList";
import StatLine from "./StatLine";
import UnderTheHood from "./UnderTheHood";

type ProjectShowcaseProps = Project & { showcase: Showcase };

/** Rich card for the projects page: art strip, feature bullets, collapsible tech notes. */
export default function ProjectShowcase({
  title,
  liveUrl,
  technologies,
  showcase,
}: ProjectShowcaseProps) {
  const shortTitle = title.split(" - ")[0];

  return (
    <div className="bg-surface border border-border rounded-lg p-6 mb-6 transition-colors hover:border-accent/50">
      <h3 className="text-xl font-semibold flex items-center gap-2.5">
        <BrandMark
          logo={showcase.logo}
          mark={showcase.mark}
          size={28}
          alt={`${shortTitle} logo`}
        />
        {title}
      </h3>
      <p className="font-sans text-fg/85 leading-relaxed mt-2">{showcase.hook}</p>

      <ArtStrip
        tiles={showcase.strip}
        pixelated={showcase.pixelated}
        lightTiles={showcase.lightTiles}
        className="mt-4"
      />

      <FeatureList features={showcase.features} className="mt-5" />
      <StatLine stats={showcase.stats} className="mt-4" />

      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech) => (
          <TechBadge key={tech.name} name={tech.name} type={tech.type} />
        ))}
      </div>

      <div className="mt-4">
        <UnderTheHood text={showcase.underTheHood} />
      </div>

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-mono text-sm text-accent hover:underline mt-4"
        >
          visit live site <ExternalLink className="ml-1 w-4 h-4" />
        </a>
      )}
    </div>
  );
}
