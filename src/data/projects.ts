import { Project, SmallerProject, PlannedProject } from "./types";

export const projects: Project[] = [
  {
    title: "Exilium - Browser Idle RPG",
    description: `A free browser-based idle RPG in public alpha, inspired by Melvor Idle and classic MMORPGs. Train 12 skills, shape your build across five mastery trees, auto-battle nearly 90 monsters over 11 regions, chase six-rarity loot and 65 handcrafted uniques, and trade on a player-run order-book marketplace — all of it keeps progressing while the tab is closed.

      Under the hood the game is server-authoritative: a Fastify + Prisma backend owns all progression and re-simulates every tick with a deterministic seeded RNG, while the React client runs a mirrored predictor engine kept byte-identical to the server by a dedicated parity test suite. Also includes an action queue, real-time farming timers, leaderboards, quests, achievements, in-game chat and a custom pixel-art asset pipeline.

      Live: https://exiliumidle.com

      Feel free to register and try it out.`,
    liveUrl: "https://exiliumidle.com",
    technologies: [
      { name: "TypeScript", type: "language" },
      { name: "React", type: "framework" },
      { name: "Fastify", type: "framework" },
      { name: "Tailwind CSS", type: "framework" },
      { name: "Zustand", type: "tool" },
      { name: "Vite", type: "tool" },
      { name: "Vitest", type: "tool" },
      { name: "PostgreSQL", type: "database" },
      { name: "Prisma", type: "database" },
      { name: "Vercel", type: "cloud" },
      { name: "Railway", type: "cloud" },
    ],
  },
  {
    title: "Päivänpulma - Daily Puzzle Platform",
    description: `A live Finnish-language daily puzzle and brain-training platform with 28 games across six skill areas — word, logic, math, memory, speed and agility. Twelve games get a fresh deterministic puzzle every morning, the whole catalogue is playable in free-play mode, and a persistent per-game ELO skill system (Taito) turns your rating into the difficulty, rolled up into ranks from Pronssi to Haastaja.

      Much of the daily content is generated automatically: a nightly crawler pulls fresh words from Finnish news (Yle, Iltalehti, Ilta-Sanomat) and Gemini turns them into crosswords, word-grouping puzzles and clues — keeping the puzzles tied to current events.

      User accounts (Google + email), guest play that carries over on registration, friends, per-room leaderboards, a daily championship mode, a browsable archive of past puzzles, streaks and shareable results, all on a mobile-first, ad-free UI.

      Live site: https://paivanpulma.fi

      Try it out :)!`,
    liveUrl: "https://paivanpulma.fi",
    technologies: [
      { name: "TypeScript", type: "language" },
      { name: "React", type: "framework" },
      { name: "Next.js", type: "framework" },
      { name: "Tailwind CSS", type: "framework" },
      { name: "Fastify", type: "framework" },
      { name: "PostgreSQL", type: "database" },
      { name: "Prisma", type: "database" },
      { name: "Google Gemini", type: "tool" },
      { name: "Turborepo", type: "tool" },
      { name: "Vercel", type: "cloud" },
      { name: "Railway", type: "cloud" },
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
      { name: "Vercel", type: "cloud" },
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
];
