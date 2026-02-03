import ProjectEntry from "@/components/ProjectEntry";
import ProjectPlanningSection from "@/components/ProjectPlans";
import SmallerProjects from "@/components/SmallerTasks";
import { projects, smallerProjects, projectsPlanned } from "@/data";

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-400">
        Main Projects
      </h1>
      <div className="mb-12">
        {projects.map((project, index) => (
          <ProjectEntry key={index} {...project} />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center text-purple-400">
        Smaller Projects
      </h2>
      <div className="mb-12">
        {smallerProjects.map((project, index) => (
          <SmallerProjects key={index} {...project} />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center text-purple-400">
        Project Pipeline
      </h2>
      <div className="mb-12">
        {projectsPlanned.map((project, index) => (
          <ProjectPlanningSection key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
