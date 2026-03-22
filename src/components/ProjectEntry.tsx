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
      <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-750 hover:scale-[1.02]">
        <h3 className={`text-xl font-bold mb-2`}>{title}</h3>
        <p className="text-gray-300 mb-4 whitespace-pre-line">
          {description.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
            /^https?:\/\//.test(part) ? (
              <a
                key={i}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
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
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              {isImagesOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
              Images ({images.length})
            </button>

            {isImagesOpen && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="relative h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => setSelectedImage(img)}
                  >
                    <Image
                      src={img}
                      alt={`${title} preview ${index + 1}`}
                      fill
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
            className="flex items-center text-blue-400 hover:text-blue-300"
          >
            Visit Live Site <ExternalLink className="ml-1 w-4 h-4" />
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
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt={`${title} full preview`}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
