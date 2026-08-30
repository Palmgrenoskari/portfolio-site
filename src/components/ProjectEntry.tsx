import TechBadge from "./TechBadge";
import ImageGallery from "./ImageGallery";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/types";

type ProjectEntryProps = Project;
export default function ProjectEntry({
  title,
  description,
  liveUrl,
  images,
  technologies,
}: ProjectEntryProps) {
  return (
    <div className="bg-surface border border-border rounded-lg p-6 mb-6 transition-colors hover:border-accent/50">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="font-sans text-fg/80 leading-relaxed mb-4 whitespace-pre-line">
        {description.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
          /^https?:\/\//.test(part) ? (
            <a
              key={i}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {part}
            </a>
          ) : (
            part
          )
        )}
      </p>

      {images && images.length > 0 && (
        <div className="mb-4">
          <ImageGallery images={images} title={title} />
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <TechBadge key={tech.name} name={tech.name} type={tech.type} />
        ))}
      </div>
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-mono text-sm text-accent hover:underline"
        >
          visit live site <ExternalLink className="ml-1 w-4 h-4" />
        </a>
      )}
    </div>
  );
}
