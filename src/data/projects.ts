import { Project, SmallerProject, PlannedProject, ShowcaseTile } from "./types";

// --- showcase helpers -------------------------------------------------------

const EX = "/images/projects/exilium";
const PP = "/images/projects/paivanpulma";

const monster = (name: string): ShowcaseTile => ({
  src: `${EX}/monsters/${name}.webp`,
  alt: name.replace(/_/g, " "),
});

const game = (slug: string): ShowcaseTile => ({
  src: `${PP}/games/${slug}.svg`,
  alt: slug,
});

export const projects: Project[] = [
  {
    title: "Exilium - Browser Idle MMORPG",
    description: `A free browser-based idle MMORPG, classic MMORPG experience packaged into idle genre. Train 12 skills, shape your build across five mastery trees, auto-battle nearly 90 monsters over 11 regions, chase six-rarity loot and 65 handcrafted uniques, and trade on a player-run order-book marketplace — all of it keeps progressing while the tab is closed.

      Under the hood the game is server-authoritative: a Fastify + Prisma backend owns all progression and re-simulates every tick with a deterministic seeded RNG, while the React client runs a mirrored predictor engine kept byte-identical to the server by a dedicated parity test suite. Also includes an action queue, real-time farming timers, leaderboards, quests, achievements, in-game chat and a custom pixel-art asset pipeline.

      Live: https://exiliumidle.com

      Feel free to register and try it out.`,
    liveUrl: "https://exiliumidle.com",
    showcase: {
      logo: `${EX}/logo.png`,
      hook: "A classic MMORPG at idle pace — fights run themselves, and your exile keeps working while the tab is closed.",
      stats: [
        "skilling",
        "mastery trees",
        "auto-battle",
        "offline progress",
        "player economy",
      ],
      features: [
        {
          icon: "swords",
          text: "Auto-battle a bestiary of monsters across an illustrated world map",
        },
        {
          icon: "git-branch",
          text: "Forge an archetype by mixing mastery trees — not a fixed class",
        },
        {
          icon: "store",
          text: "Player-run order-book marketplace — no NPC shops feed the economy",
        },
        {
          icon: "moon-star",
          text: "Skills, farming timers and fights keep progressing offline",
        },
      ],
      underTheHood:
        "Server-authoritative: a Fastify + Prisma backend owns all progression and re-simulates every tick with a deterministic seeded RNG. The React client runs a mirrored predictor engine kept byte-identical to the server by a dedicated parity test suite. Also: an action queue, real-time farming timers, leaderboards, quests, achievements, in-game chat and a custom pixel-art asset pipeline.",
      pixelated: true,
      hero: {
        background: `${EX}/map.webp`,
        tiles: [],
      },
      // Ascending monster level, left to right.
      strip: [
        monster("chicken"), // 3
        monster("coconut_crab"), // 22
        monster("forest_wolf"), // 35
        monster("forest_witch"), // 90
        monster("sand_wyrm"), // 110
        monster("tower_archmage"), // 165
        monster("hellhound"), // 180
        monster("ancient_sphinx"), // 195
        monster("kraken_spawn"), // 262
        monster("oblivion_herald"), // 357
      ],
    },
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
    showcase: {
      mark: { letter: "P", bg: "#6f9d72", fg: "#f3ede2" },
      hook: "Päivä kerrallaan terävämpi — a growing library of Finnish brain games, with fresh puzzles every morning.",
      stats: ["daily puzzles", "free play", "skill ranks", "ad-free"],
      features: [
        {
          icon: "calendar-days",
          text: "Deterministic daily puzzles — the same board for everyone",
        },
        {
          icon: "newspaper",
          text: "Crosswords and word groups generated nightly from Finnish news",
        },
        {
          icon: "trending-up",
          text: "Per-game ELO (Taito) sets your difficulty and climbs you through the ranks",
        },
        {
          icon: "users",
          text: "Friends, leaderboards, daily championship, streaks and shareable results",
        },
      ],
      underTheHood:
        "A nightly crawler pulls fresh words from Yle, Iltalehti and Ilta-Sanomat; Gemini turns them into crosswords, grouping puzzles and clues, so the dailies track current events. Turborepo monorepo: a Next.js web app and a Fastify + Prisma API on PostgreSQL. Accounts via Google or email, guest progress carries over on registration, a full archive of past puzzles — mobile-first and ad-free.",
      lightTiles: true,
      hero: {
        tiles: [
          game("elementit"),
          game("ristikko"),
          game("sudoku"),
          game("naapurit"),
          game("matikkasade"),
          game("valkky"),
          game("neuroverkko"),
          game("suunta"),
        ],
      },
      strip: [
        game("ristikko"),
        game("matikkasade"),
        game("neuroverkko"),
        game("elementit"),
        game("calcudoku"), // Laskudoku
        game("naapurit"),
        game("suunta"),
        game("luokittelija"),
        game("muistipari"),
        game("valkky"),
      ],
    },
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
