import ProjectEntry from "@/components/ProjectEntry";
import ProjectPlanningSection from "@/components/ProjectPlans";
import SmallerProjects from "@/components/SmallerTasks";

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

  const smallerProjects = [
    {
      title:
        "BSc Thesis: Comparison of CNN Architectures in Fruit Recognition.",
      description: `Trained three different CNN models on the Fruits360 dataset.

      Compared model performance on various subsets of the dataset based on accuracy and visual inspection of confusion matrices.

      Data: 131 classes, 90380 color images from Fruits-360 dataset @ kaggle.
      Models: VGG16, Resnet50V2, MobileNetV2
      `,
      technologies: [
        { name: "Python", type: "language" as const },
        { name: "TensorFlow", type: "framework" as const },
        { name: "Keras", type: "framework" as const },
        { name: "Jupyter", type: "tool" as const },
      ],
      githubUrl:
        "https://github.com/Palmgrenoskari/machineLearning/tree/main/BSc",
    },
    {
      title: "Image Classification with PyTorch",
      description: `Image Classification using a pre-trained EfficientNet-B4 CNN model.

      Trained a "classification head" on top of a pre-trained EfficientNet-B4 CNN model on the 100-bird-species dataset (no longer available).

      Idea was to gain some exposure to PyTorch during an ICT laboratory course.

      Data: 184 classes, 29274 color images from 100-bird-species dataset @ kaggle.
      Model: EfficientNet-B4 (pre-trained)
      `,
      technologies: [
        { name: "Python", type: "language" as const },
        { name: "PyTorch", type: "framework" as const },
        { name: "Jupyter", type: "tool" as const },
      ],
      githubUrl: "https://github.com/Palmgrenoskari/Birds_CNN_PyTorch",
    },
    {
      title: "Automated Minesweeper Solver",
      description: `Automated Minesweeper Solver using pyautogui mouse, keyboard and image recognition capabilities.

      The solver is currently only solving easy boards on minesweeper.online no-guessing-mode.
      Getting IP banned every few runs made it impractical to continue.
      Might revisit this idea in the future with desktop versions of minesweeper.`,
      technologies: [
        { name: "Python", type: "language" as const },
        { name: "pyautogui", type: "framework" as const },
      ],
      githubUrl: "https://github.com/Palmgrenoskari/minesweeper_automated",
    },
  ];

  const projectsPlanned = [
    {
      title: "League of Legends Analytics App",
      description: `A web app where users can explore League of Legends related data.
      
      Such as:
      
      - Champion performance
      - Build and itemization performance
      - Leaderboards
      - Match History
      - Opponent Scouting

      GitHub has progress images for now.
      Unfortunately can't deploy/publish without Riot Games approval. (Pending)`,
      plannedTechnologies: [
        { name: "TypeScript", type: "language" as const },
        { name: "React", type: "framework" as const },
        { name: "Next.js", type: "framework" as const },
        { name: "Tailwind CSS", type: "framework" as const },
        { name: "SQLite", type: "database" as const },
        { name: "Riot API", type: "tool" as const },
      ],
      status: "in-progress" as const,
      githubUrl: "https://github.com/palmgrenoskari/league_site" as const,
    },
    {
      title: "League of Legends Match Data Processing Pipeline",
      description: `Need to build a pipeline that:
      
      1) Crawls large amounts of League of Legends related data such as match history data for meaningful aggregates (winrate, pickrate, etc)
      2) Extracts these aggregates from the data
      3) Store in SQLite and eventually schedule this to run consistently.
      
      Currently bottlenecked by very low API call rate limit. (Product registration pending)`,
      plannedTechnologies: [
        { name: "Python", type: "language" as const },
        { name: "SQLite", type: "database" as const },
        { name: "Riot API", type: "tool" as const },
      ],
      status: "in-progress" as const,
      githubUrl: "https://github.com/palmgrenoskari/league_data" as const,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
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
