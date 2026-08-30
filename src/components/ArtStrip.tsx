import Image from "next/image";
import { ShowcaseTile } from "@/data/types";

interface ArtTileProps {
  tile: ShowcaseTile;
  /** Nearest-neighbour scaling for pixel-art sprites. */
  pixelated?: boolean;
  /** Light paper background in both themes (for art drawn for a light UI). */
  lightTiles?: boolean;
  /** Fixed pixel size; when omitted the tile fills its grid cell. */
  size?: number;
}

export function ArtTile({
  tile,
  pixelated = false,
  lightTiles = false,
  size,
}: ArtTileProps) {
  return (
    <div
      className={`${
        lightTiles
          ? "bg-[#faf7f2]"
          : "bg-surface ring-1 ring-border"
      } relative rounded-[6px] overflow-hidden shrink-0 ${
        size ? "" : "w-full aspect-square"
      }`}
      style={size ? { width: size, height: size } : undefined}
    >
      <Image
        src={tile.src}
        alt={tile.alt}
        width={size ?? 64}
        height={size ?? 64}
        // The light-tile inset lives on the image, not the container: iOS
        // Safari resolves a child's percentage height inside a *padded*
        // aspect-ratio box against the wrong box, pushing the icon down and
        // clipping it. With border-box sizing the padding stays inside the
        // tile and object-contain centres the art in the remaining area.
        className={`object-contain w-full h-full ${lightTiles ? "p-1" : ""} ${
          pixelated ? "[image-rendering:pixelated]" : ""
        }`}
      />
    </div>
  );
}

interface ArtStripProps {
  tiles: ShowcaseTile[];
  pixelated?: boolean;
  lightTiles?: boolean;
  className?: string;
}

/** Ten tiles: one row on ≥sm, two full rows of five on mobile. */
export default function ArtStrip({
  tiles,
  pixelated,
  lightTiles,
  className = "",
}: ArtStripProps) {
  return (
    <div
      className={`${
        lightTiles
          ? "bg-bg ring-1 ring-border px-2 py-1.5 gap-1.5"
          : "bg-bg ring-1 ring-border px-3 py-2 gap-2"
      } rounded-md grid grid-cols-5 sm:grid-cols-10 ${className}`}
    >
      {tiles.map((tile) => (
        <ArtTile
          key={tile.src}
          tile={tile}
          pixelated={pixelated}
          lightTiles={lightTiles}
        />
      ))}
    </div>
  );
}
