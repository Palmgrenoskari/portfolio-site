import { Project, SmallerProject, PlannedProject } from "./types";

export const projects: Project[] = [
  {
    title: "Päivänpulma - Daily Puzzle Platform",
    description: `A live Finnish-language daily puzzle and word-game site. Features Sanailija (a Wordle-style word game with daily and practice modes), daily Sudoku, and Kynäilijä (a drawing game), with more games on the way.

      Includes user accounts (Google + email/password), guest play with localStorage history, friends lists, and per-game leaderboards. Built as a full-stack TypeScript monorepo: Next.js frontend on Vercel, Fastify API on Railway, and PostgreSQL via Prisma.

      Live site: https://paivanpulma.fi

      My most complete production project so far — go solve today's puzzle! 🧩`,
    liveUrl: "https://paivanpulma.fi",
    technologies: [
      { name: "TypeScript", type: "language" },
      { name: "React", type: "framework" },
      { name: "Next.js", type: "framework" },
      { name: "Tailwind CSS", type: "framework" },
      { name: "Fastify", type: "framework" },
      { name: "PostgreSQL", type: "database" },
      { name: "Prisma", type: "database" },
      { name: "Vercel", type: "cloud" },
      { name: "Railway", type: "cloud" },
    ],
  },
  {
    title: "Exilium - Idle MMORPG",
    description: `An online idle MMORPG currently in development. Inspired by classic MMORPGs like RuneScape and World of Warcraft, Exilium brings the satisfying progression and strategic gameplay of these titles into an idle format.

      Train skills, gather resources, and progress your character — even while you're away. Trade with other players, join a guild and climb the leaderboards.

      Live alpha version: https://exiliumidle.com

      Feel free to register and try it out. Just keep in mind it is in very early development :)`,
    liveUrl: "https://exiliumidle.com",
    images: [
      "/images/exilius_preview.png",
      "/images/exilius_preview2.png",
      "/images/exilius_preview3.png",
      "/images/exilius_preview4.png",
      "/images/exilius_preview5.png",
      "/images/exilius_preview6.png",
    ],
    technologies: [
      { name: "TypeScript", type: "language" },
      { name: "React", type: "framework" },
      { name: "Fastify", type: "framework" },
      { name: "Vite", type: "tool" },
      { name: "Zod", type: "tool" },
      { name: "PostgreSQL", type: "database" },
      { name: "Prisma", type: "database" },
      { name: "Cloudflare", type: "cloud" },
    ],
  },
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

      Should revisit this idea again in the future. Current MVP is old, outdated and not maintained — maybe should throw Claude Code at it brrr... 🤖`,
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
    title: "BSc Thesis: Comparison of CNN Architectures in Fruit Recognition.",
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

      Might revisit this idea in the future.`,
    plannedTechnologies: [
      { name: "TypeScript", type: "language" },
      { name: "React", type: "framework" },
      { name: "Next.js", type: "framework" },
      { name: "Tailwind CSS", type: "framework" },
      { name: "SQLite", type: "database" },
      { name: "Riot API", type: "tool" },
    ],
    status: "archived",
    githubUrl: "https://github.com/palmgrenoskari/league_site",
  },
  {
    title: "League of Legends Match Data Processing Pipeline",
    description: `A data pipeline that:

      1) Crawls large amounts of League of Legends match history data
      2) Extracts meaningful aggregates (winrate, pickrate, etc.)
      3) Stores results in SQLite

      Might revisit this idea in the future.`,
    plannedTechnologies: [
      { name: "Python", type: "language" },
      { name: "SQLite", type: "database" },
      { name: "Riot API", type: "tool" },
    ],
    status: "archived",
    githubUrl: "https://github.com/palmgrenoskari/league_data",
  },
];
