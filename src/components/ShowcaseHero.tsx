import Image from "next/image";
import { PlateStyle, ProjectShowcase } from "@/data/types";
import { ArtTile } from "./ArtStrip";
import { PLATE } from "./plates";

interface ShowcaseHeroProps {
  hero: ProjectShowcase["hero"];
  plate: PlateStyle;
  title: string;
}

/** Image header for the home-page featured cards. */
export default function ShowcaseHero({
  hero,
  plate,
  title,
}: ShowcaseHeroProps) {
  if (hero.background) {
    return (
      <div className="relative h-36 sm:h-40 overflow-hidden border-b border-border">
        <Image
          src={hero.background}
          alt={`${title} world map`}
          fill
          sizes="(max-width: 640px) 100vw, 360px"
          className="object-cover object-[center_40%]"
        />
        {hero.tiles.length > 0 && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b21] via-[#1b1b21]/30 to-transparent" />
            <div className="absolute bottom-3 left-4 flex gap-2">
              {hero.tiles.map((tile) => (
                <ArtTile key={tile.src} tile={tile} plate={plate} size={40} />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div
      className={`${PLATE[plate].wrap} border-0 border-b h-36 sm:h-40 flex items-center justify-center px-4`}
    >
      <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
        {hero.tiles.map((tile) => (
          <ArtTile key={tile.src} tile={tile} plate={plate} size={44} />
        ))}
      </div>
    </div>
  );
}
