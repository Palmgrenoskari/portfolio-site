import ProjectEntry from "@/components/ProjectEntry";
import ProjectPlanningSection from "@/components/ProjectPlans";
import SmallerProjects from "@/components/SmallerTasks";
import { projects, smallerProjects, projectsPlanned } from "@/data";

export const metadata = {
  title: "Projects — Oskari Palmgren",
  description: "Things I've built — live projects, smaller experiments and an archive.",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xl mb-6">
      <span className="text-accent">##</span> {children}
    </h2>
  );
}

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <header className="mb-12">
        <p className="font-mono text-sm text-accent">// projects</p>
        <h1 className="text-3xl font-bold mt-1">Things I&apos;ve built</h1>
        <p className="font-sans text-muted mt-3 max-w-2xl">
          A mix of production projects, smaller experiments, and a few ideas
          parked in the archive.
        </p>
      </header>

      <section className="mb-16">
        <SectionLabel>main projects</SectionLabel>
        {projects.map((project, index) => (
          <ProjectEntry key={index} {...project} />
        ))}
      </section>

      <section className="mb-16">
        <SectionLabel>smaller projects</SectionLabel>
        {smallerProjects.map((project, index) => (
          <SmallerProjects key={index} {...project} />
        ))}
      </section>

      <section>
        <SectionLabel>archive</SectionLabel>
        {projectsPlanned.map((project, index) => (
          <ProjectPlanningSection key={index} {...project} />
        ))}
      </section>
    </div>
  );
}
