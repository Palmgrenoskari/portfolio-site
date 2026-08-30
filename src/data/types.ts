export type TechnologyType =
  | "language"
  | "framework"
  | "tool"
  | "database"
  | "cloud"
  | "soft_skill"
  | "hard_skill";

export interface Technology {
  name: string;
  type: TechnologyType;
}

export type PlateStyle = "stone" | "cream";

// String keys only: Project crosses the server->client boundary, so no component refs.
export type FeatureIcon =
  | "swords"
  | "git-branch"
  | "store"
  | "moon-star"
  | "calendar-days"
  | "newspaper"
  | "trending-up"
  | "users";

export interface ShowcaseTile {
  src: string;
  alt: string;
}

export interface ProjectShowcase {
  /** Brand mark: an image, or a lettered tile for projects without a logo file. */
  logo?: string;
  mark?: { letter: string; bg: string; fg: string };
  hook: string;
  /** Rendered joined with " · ". */
  stats: string[];
  features: { icon: FeatureIcon; text: string }[];
  /** Technical paragraph, collapsed by default. */
  underTheHood: string;
  plate: PlateStyle;
  /** With `background`, tiles are overlaid on the image; without, they form a mosaic. */
  hero: { background?: string; tiles: ShowcaseTile[] };
  /** Art row on the projects page. */
  strip: ShowcaseTile[];
}

export interface Project {
  title: string;
  description: string;
  liveUrl?: string;
  images?: string[];
  technologies: Technology[];
  showcase?: ProjectShowcase;
}

export interface SmallerProject {
  title: string;
  description: string;
  technologies: Technology[];
  githubUrl: string;
}

export interface PlannedProject {
  title: string;
  description: string;
  plannedTechnologies: Technology[];
  status: "in-progress" | "planning" | "archived";
  githubUrl: string;
}

export interface EducationEntry {
  logo: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
  credits?: string;
  thesis?: string;
  gpa?: number;
  technologies: Technology[];
  /** Invert the logo in light mode (for white/transparent logos). */
  invertInLight?: boolean;
}

export interface WorkEntry {
  logo: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: Technology[];
  isHypothetical?: boolean;
}

export interface Certification {
  badge: string;
  title: string;
  issued: string;
  expiration?: string;
  link: string;
  description: string;
}

export interface Route {
  href: string;
  label: string;
}
