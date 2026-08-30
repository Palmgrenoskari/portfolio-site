import Image from "next/image";
import { ProjectShowcase } from "@/data/types";

interface BrandMarkProps {
  logo?: ProjectShowcase["logo"];
  mark?: ProjectShowcase["mark"];
  size?: 16 | 20 | 28;
  alt: string;
}

export default function BrandMark({
  logo,
  mark,
  size = 20,
  alt,
}: BrandMarkProps) {
  if (logo) {
    return (
      <Image
        src={logo}
        alt={alt}
        width={size}
        height={size}
        loading="eager"
        className="rounded-sm shrink-0"
      />
    );
  }
  if (mark) {
    return (
      <span
        role="img"
        aria-label={alt}
        className="inline-flex items-center justify-center rounded-[4px] font-mono font-bold leading-none shrink-0"
        style={{
          width: size,
          height: size,
          background: mark.bg,
          color: mark.fg,
          fontSize: Math.round(size * 0.62),
        }}
      >
        {mark.letter}
      </span>
    );
  }
  return null;
}
