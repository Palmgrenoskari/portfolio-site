import type { CSSProperties } from "react";
import { PlateStyle } from "@/data/types";

/**
 * Each game's card commits fully to its own palette, in both site themes.
 *
 * `vars` redefines the site's theme tokens (RGB triplets, see globals.css)
 * on the card root, so every child — badges, bullets, links, borders —
 * follows the game palette with no per-component work. Inline style beats
 * the `.dark` class override, which is what pins the card.
 *
 * `wrap` / `tile` are the art plate inside the card. Literal class strings
 * so Tailwind's scanner picks up the arbitrary colours.
 */
export const PLATE: Record<
  PlateStyle,
  { vars: CSSProperties; wrap: string; tile: string; pixelated: boolean }
> = {
  // Exilium "Ironhold": panel #212129 card, inset #191920 plate, bone text, weathered gold.
  stone: {
    vars: {
      "--surface": "33 33 41",
      "--fg": "230 224 208",
      "--muted": "151 145 127",
      "--border": "51 51 61",
      "--accent": "211 172 82",
    } as CSSProperties,
    wrap: "bg-[#191920] border border-[#b8933d]/50",
    tile: "bg-[#262630] ring-1 ring-[#b8933d]/45",
    pixelated: true,
  },
  // Päivänpulma: paper #faf7f2 card, ink text, sage accent.
  cream: {
    vars: {
      "--surface": "250 247 242",
      "--fg": "42 38 34",
      "--muted": "93 86 78",
      "--border": "214 207 196",
      "--accent": "111 157 114",
    } as CSSProperties,
    wrap: "bg-[#f3ede2] border border-[#e2dac9]",
    tile: "bg-[#faf7f2] ring-1 ring-[#e2dac9]",
    pixelated: false,
  },
};
