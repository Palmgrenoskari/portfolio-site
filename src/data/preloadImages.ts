import { projects } from "./projects";
import { workEntries } from "./work";
import { educationEntries } from "./education";
import { certifications } from "./certifications";

export interface PreloadImage {
  src: string;
  width: number;
  height: number;
}

// Sizes must match the `width`/`height` props of the component that renders
// each image, since those decide which optimizer URLs next/image requests.
const BRAND_MARK_SIZE = 28; // BrandMark on /projects (ProjectShowcase)
const ART_TILE_SIZE = 64; // ArtTile default inside ArtStrip
const LOGO_SIZE = 56; // WorkEntry / EducationEntry / CertificationEntry

function square(src: string, size: number): PreloadImage {
  return { src, width: size, height: size };
}

function collect(): PreloadImage[] {
  const list: PreloadImage[] = [];

  for (const project of projects) {
    const showcase = project.showcase;
    if (!showcase) continue;
    if (showcase.logo) list.push(square(showcase.logo, BRAND_MARK_SIZE));
    for (const tile of showcase.strip) list.push(square(tile.src, ART_TILE_SIZE));
  }

  for (const entry of workEntries) list.push(square(entry.logo, LOGO_SIZE));
  for (const entry of educationEntries) list.push(square(entry.logo, LOGO_SIZE));
  for (const cert of certifications) list.push(square(cert.badge, LOGO_SIZE));

  const seen = new Set<string>();
  return list.filter((img) => {
    const key = `${img.src}@${img.width}`;
    if (!img.src || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/** Every image shown on /projects and /about, deduped. */
export const preloadImages: PreloadImage[] = collect();
