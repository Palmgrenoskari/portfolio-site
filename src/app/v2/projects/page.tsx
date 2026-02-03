"use client";

import { ProjectShowcase } from "@/components/v2/sections";
import { projects, smallerProjects, projectsPlanned } from "@/data";

export default function V2ProjectsPage() {
  return (
    <ProjectShowcase
      projects={projects}
      smallerProjects={smallerProjects}
      plannedProjects={projectsPlanned}
    />
  );
}
