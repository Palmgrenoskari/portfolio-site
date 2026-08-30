"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

/** Collapsible thumbnail grid with a lightbox (extracted from ProjectEntry). */
export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [isImagesOpen, setIsImagesOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div>
        <button
          type="button"
          aria-expanded={isImagesOpen}
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
