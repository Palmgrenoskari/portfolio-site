import {
  technologies,
  workEntries,
  educationEntries,
  projects,
  certifications,
} from "@/data";

type ResponsePattern = {
  patterns: RegExp[];
  response: () => string;
};

const responsePatterns: ResponsePattern[] = [
  // Skills / Technologies
  {
    patterns: [/skill/i, /tech/i, /know/i, /stack/i, /language/i, /framework/i],
    response: () => {
      const languages = technologies
        .filter((t) => t.type === "language")
        .map((t) => t.name);
      const frameworks = technologies
        .filter((t) => t.type === "framework")
        .map((t) => t.name);
      const tools = technologies
        .filter((t) => t.type === "tool")
        .map((t) => t.name);
      const cloud = technologies
        .filter((t) => t.type === "cloud" || t.type === "database")
        .map((t) => t.name);

      return `Oskari's tech stack includes:

🔤 Languages: ${languages.join(", ")}
⚡ Frameworks: ${frameworks.join(", ")}
🔧 Tools: ${tools.join(", ")}
☁️ Cloud/DB: ${cloud.join(", ")}

He's particularly strong with Python, TypeScript, and React!`;
    },
  },

  // Work experience
  {
    patterns: [/work/i, /job/i, /experience/i, /career/i, /employ/i, /company/i],
    response: () => {
      const jobs = workEntries
        .map(
          (w) =>
            `• ${w.role} at ${w.company} (${w.period})`
        )
        .join("\n");

      return `Here's Oskari's work experience:

${jobs}

Currently working as a Software Robotics Developer at Digia, building automations and doing AI consulting!`;
    },
  },

  // Education
  {
    patterns: [/education/i, /study/i, /school/i, /university/i, /degree/i, /learn/i],
    response: () => {
      const edu = educationEntries
        .map(
          (e) =>
            `• ${e.degree} - ${e.institution}${e.gpa ? ` (GPA: ${e.gpa})` : ""}`
        )
        .join("\n");

      return `Oskari's educational background:

${edu}

Currently pursuing a Master's in ICT with a focus on Data Analytics and Health Technology!`;
    },
  },

  // Projects
  {
    patterns: [/project/i, /build/i, /made/i, /create/i, /portfolio/i],
    response: () => {
      const projs = projects
        .map((p) => `• ${p.title}`)
        .join("\n");

      return `Here are some of Oskari's projects:

${projs}

The most exciting one is Exilius - an idle MMORPG currently in development! Check out the Projects page for more details.`;
    },
  },

  // Certifications
  {
    patterns: [/cert/i, /credential/i, /azure/i, /aws/i, /cloud cert/i],
    response: () => {
      const certs = certifications
        .map((c) => `• ${c.title} (${c.issued})`)
        .join("\n");

      return `Oskari's cloud certifications:

${certs}

He has credentials from both Azure and AWS!`;
    },
  },

  // Contact / Hire
  {
    patterns: [/contact/i, /hire/i, /reach/i, /email/i, /connect/i],
    response: () => {
      return `You can connect with Oskari through:

📧 Check his LinkedIn for direct contact
🔗 GitHub: github.com/OPSphystech420
💼 LinkedIn: linkedin.com/in/oskaripalmgren

He's currently open to new opportunities!`;
    },
  },

  // About / Who
  {
    patterns: [/who/i, /about/i, /tell me about/i, /yourself/i, /oskari/i],
    response: () => {
      return `Oskari Palmgren is a Software Developer based in Finland 🇫🇮

He specializes in:
• Full-stack development (React, Next.js, Python)
• Software robotics & automation
• AI/ML and data analytics

Currently working at Digia while finishing his Master's degree in ICT. He's passionate about building things that make a difference!`;
    },
  },

  // Greeting
  {
    patterns: [/^hi$/i, /^hello$/i, /^hey$/i, /^sup$/i, /^yo$/i],
    response: () => {
      const greetings = [
        "Hey there! 👋 How can I help you learn about Oskari today?",
        "Hello! Ready to explore Oskari's portfolio? Ask me anything!",
        "Hi! I'm here to tell you all about Oskari's skills and projects!",
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    },
  },

  // Thanks
  {
    patterns: [/thank/i, /thanks/i, /thx/i],
    response: () => {
      return "You're welcome! 😊 Let me know if you have any other questions about Oskari!";
    },
  },
];

const fallbackResponses = [
  "I can tell you about Oskari's skills, projects, work experience, or education. What would you like to know?",
  "Hmm, I'm not sure about that. Try asking about Oskari's tech stack, projects, or career!",
  "I'm best at answering questions about Oskari's professional background. What interests you?",
];

export function getAIResponse(query: string): string {
  // Check each pattern
  for (const { patterns, response } of responsePatterns) {
    if (patterns.some((pattern) => pattern.test(query))) {
      return response();
    }
  }

  // Fallback
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}
