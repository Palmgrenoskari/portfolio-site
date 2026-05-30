"use client";

import { useState } from "react";
import TechBadge from "./TechBadge";
import { ExternalLink, ChevronDown, ChevronUp, X } from "lucide-react";
import { Project } from "@/data/types";
import Image from "next/image";

type ProjectEntryProps = Project;
export default function ProjectEntry({
  title,
  description,
  liveUrl,
  images,
  technologies,
}: ProjectEntryProps) {
  const [isImagesOpen, setIsImagesOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
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
            <button
              onClick={() => setIsImagesOpen(!isImagesOpen)}
              className="flex items-center gap-2 font-mono text-sm text-accent hover:underline"
            >
              {isImagesOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
              images ({images.length})
            </button>

            {isImagesOpen && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="relative h-32 rounded-md overflow-hidden cursor-pointer border border-border hover:opacity-80 transition-opacity"
                    onClick={() => setSelectedImage(img)}
                  >
                    <Image
                      src={img}
                      alt={`${title} preview ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
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

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt={`${title} full preview`}
              fill
              sizes="100vw"
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
