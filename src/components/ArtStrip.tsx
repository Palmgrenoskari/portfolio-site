import Image from "next/image";
import { PlateStyle, ShowcaseTile } from "@/data/types";
import { PLATE } from "./plates";

interface ArtTileProps {
  tile: ShowcaseTile;
  plate: PlateStyle;
  /** Fixed pixel size; when omitted the tile fills its grid cell. */
  size?: number;
}

export function ArtTile({ tile, plate, size }: ArtTileProps) {
  const p = PLATE[plate];
  return (
    <div
      className={`${p.tile} relative rounded-[6px] overflow-hidden shrink-0 ${
        size ? "" : "w-full aspect-square"
      }`}
      style={size ? { width: size, height: size } : undefined}
    >
      <Image
        src={tile.src}
        alt={tile.alt}
        width={size ?? 64}
        height={size ?? 64}
        className={`object-contain w-full h-full ${
          p.pixelated ? "[image-rendering:pixelated]" : ""
        }`}
      />
    </div>
  );
}

interface ArtStripProps {
  tiles: ShowcaseTile[];
  plate: PlateStyle;
  className?: string;
}

/** Ten tiles: one row on ≥sm, two full rows of five on mobile. */
export default function ArtStrip({
  tiles,
  plate,
  className = "",
}: ArtStripProps) {
  return (
    <div
      className={`${PLATE[plate].wrap} ring-1 ring-border rounded-md px-3 py-2 grid grid-cols-5 sm:grid-cols-10 gap-2 ${className}`}
    >
      {tiles.map((tile) => (
        <ArtTile key={tile.src} tile={tile} plate={plate} />
      ))}
    </div>
  );
}
