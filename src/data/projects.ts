import { Project, SmallerProject, PlannedProject } from "./types";

export const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    description: `A personal portfolio website built with React and Next.js.

      Yes, this one. 🙂`,
    liveUrl: "https://oskaripalmgren.dev",
    technologies: [
      { name: "TypeScript", type: "language" },
      { name: "React", type: "framework" },
      { name: "Next.js", type: "framework" },
      { name: "Tailwind CSS", type: "framework" },
      { name: "Node.js", type: "tool" },
    ],
  },
  {
    title: "Oura Analytics App (MVP)",
    description: `A web application designed for exploring and visualizing your Oura Ring data. It features dynamic graphs, easy to understand metrics, and an LLM Chat assistant for personalized guidance.

      Built with Python and Streamlit.`,
    liveUrl: "https://ouradashboard.streamlit.app",
    technologies: [
      { name: "Python", type: "language" },
      { name: "Streamlit", type: "framework" },
      { name: "Oura API", type: "tool" },
    ],
  },
];

export const smallerProjects: SmallerProject[] = [
  {
    title:
      "BSc Thesis: Comparison of CNN Architectures in Fruit Recognition.",
    description: `Trained three different CNN models on the Fruits360 dataset.

      Compared model performance on various subsets of the dataset based on accuracy and visual inspection of confusion matrices.

      Data: 131 classes, 90380 color images from Fruits-360 dataset @ kaggle.
      Models: VGG16, Resnet50V2, MobileNetV2
      `,
    technologies: [
      { name: "Python", type: "language" },
      { name: "TensorFlow", type: "framework" },
      { name: "Keras", type: "framework" },
      { name: "Jupyter", type: "tool" },
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
      { name: "Python", type: "language" },
      { name: "PyTorch", type: "framework" },
      { name: "Jupyter", type: "tool" },
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
      { name: "Python", type: "language" },
      { name: "pyautogui", type: "framework" },
    ],
    githubUrl: "https://github.com/Palmgrenoskari/minesweeper_automated",
  },
];

export const projectsPlanned: PlannedProject[] = [
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
      { name: "TypeScript", type: "language" },
      { name: "React", type: "framework" },
      { name: "Next.js", type: "framework" },
      { name: "Tailwind CSS", type: "framework" },
      { name: "SQLite", type: "database" },
      { name: "Riot API", type: "tool" },
    ],
    status: "in-progress",
    githubUrl: "https://github.com/palmgrenoskari/league_site",
  },
  {
    title: "League of Legends Match Data Processing Pipeline",
    description: `Need to build a pipeline that:

      1) Crawls large amounts of League of Legends related data such as match history data for meaningful aggregates (winrate, pickrate, etc)
      2) Extracts these aggregates from the data
      3) Store in SQLite and eventually schedule this to run consistently.

      Currently bottlenecked by very low API call rate limit. (Product registration pending)`,
    plannedTechnologies: [
      { name: "Python", type: "language" },
      { name: "SQLite", type: "database" },
      { name: "Riot API", type: "tool" },
    ],
    status: "in-progress",
    githubUrl: "https://github.com/palmgrenoskari/league_data",
  },
];
