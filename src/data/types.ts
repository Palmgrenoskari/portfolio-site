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

export interface Project {
  title: string;
  description: string;
  liveUrl?: string;
  images?: string[];
  technologies: Technology[];
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
