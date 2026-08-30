import Image from "next/image";
import { ProjectShowcase } from "@/data/types";
import { ArtTile } from "./ArtStrip";

interface ShowcaseHeroProps {
  hero: ProjectShowcase["hero"];
  pixelated?: boolean;
  lightTiles?: boolean;
  title: string;
}

/** Image header for the home-page featured cards. */
export default function ShowcaseHero({
  hero,
  pixelated,
  lightTiles,
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
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
            <div className="absolute bottom-3 left-4 flex gap-2">
              {hero.tiles.map((tile) => (
                <ArtTile
                  key={tile.src}
                  tile={tile}
                  pixelated={pixelated}
                  lightTiles={lightTiles}
                  size={40}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div
      className={`${
        lightTiles ? "bg-[#f3ede2] border-[#e2dac9]" : "bg-bg border-border"
      } border-b h-36 sm:h-40 flex items-center justify-center px-4`}
    >
      <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
        {hero.tiles.map((tile) => (
          <ArtTile
            key={tile.src}
            tile={tile}
            pixelated={pixelated}
            lightTiles={lightTiles}
            size={56}
          />
        ))}
      </div>
    </div>
  );
}
