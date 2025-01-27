import ProjectEntry from "@/components/ProjectEntry";
import ProjectPlanningSection from "@/components/ProjectPlanningSection";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: `A personal portfolio website built with React and Next.js.
      
      Yes, this one. 🙂`,
      liveUrl: "https://oskaripalmgren.dev",
      technologies: [
        { name: "TypeScript", type: "language" as const },
        { name: "React", type: "framework" as const },
        { name: "Next.js", type: "framework" as const },
        { name: "Tailwind CSS", type: "framework" as const },
        { name: "Node.js", type: "tool" as const },
      ],
    },
    {
      title: "Oura Analytics App (MVP)",
      description: `A web application designed for exploring and visualizing your Oura Ring data. It features dynamic graphs, easy to understand metrics, and an LLM Chat assistant for personalized guidance.

      Built with Python and Streamlit.`,
      liveUrl: "https://ouradashboard.streamlit.app",
      technologies: [
        { name: "Python", type: "language" as const },
        { name: "Streamlit", type: "framework" as const },
        { name: "Oura API", type: "tool" as const },
      ],
    },
  ];

  const projectsPlanned = [
    {
      title: "League of Legends Match Data Processing Pipeline",
      description: `Need to build a pipeline that:
      1) Fetches all the data (from "not so great" Riot API according to reddit)
      2) Extracts meaningful information from the data, such as pick rates, win rates, ban rates and other interesting statistics.
      3) Stores the data in SQLite
      
      And schedule this pipeline to run for example once a day.`,
      plannedTechnologies: [
        { name: "Python", type: "language" as const },
        { name: "SQLite", type: "database" as const },
        { name: "Riot API", type: "tool" as const },
      ],
      status: "planning" as const,
    },
    {
      title: "League of Legends Analytics App",
      description: `A web app where users can explore League of Legends related data.
      
      Such as:
      
      - Champion performance
      - Build and itemization performance
      - Leaderboards
      - Matchups
      - Global trends

      Requires data from the pipeline above.`,
      plannedTechnologies: [
        { name: "TypeScript", type: "language" as const },
        { name: "React", type: "framework" as const },
        { name: "Next.js", type: "framework" as const },
        { name: "Tailwind CSS", type: "framework" as const },
        { name: "SQLite", type: "database" as const },
        { name: "Riot API", type: "tool" as const },
      ],
      status: "planning" as const,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-400">
        Projects
      </h1>
      <div className="mb-12">
        {projects.map((project, index) => (
          <ProjectEntry key={index} {...project} />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center text-purple-400">
        Project Drawing Board
      </h2>
      <div className="bg-gray-900 rounded-lg p-6 mb-8 shadow-lg">
        {projectsPlanned.map((project, index) => (
          <ProjectPlanningSection key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
