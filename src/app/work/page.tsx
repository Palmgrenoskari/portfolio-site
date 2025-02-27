import WorkEntry from "@/components/WorkEntry";

type TechnologyType =
  | "language"
  | "framework"
  | "tool"
  | "database"
  | "cloud"
  | "soft_skill";

interface Technology {
  name: string;
  type: TechnologyType;
}

export default function WorkPage() {
  const workEntries: {
    logo: string;
    company: string;
    role: string;
    period: string;
    description: string;
    technologies: Technology[];
    isHypothetical?: boolean;
  }[] = [
    {
      logo: "/images/diamond_transparent.png",
      company: "Your Company?",
      role: "Dream Position",
      period: "Future",
      description: "Excited to see what the future holds!",
      technologies: [
        { name: "Languages", type: "language" },
        { name: "Frameworks", type: "framework" },
        { name: "Databases", type: "database" },
        { name: "Tools", type: "tool" },
        { name: "Cloud", type: "cloud" },
        { name: "Soft Skills", type: "soft_skill" },
      ],
      isHypothetical: true,
    },
    {
      logo: "/images/telia_transparent.png",
      company: "Telia Finland",
      role: "IA Developer Trainee",
      period: "May 2024 - Aug 2024",
      description: `Developed Full-Stack GenAI Applications for various internal-use intelligent automation projects. My role spanned the entire lifecycle of application development, from initial project setup to deployment.

        Occasionally, I also got the chance to act as a bridge of communication between developers and business people, facilitating clear jargon-free communication.`,
      technologies: [
        { name: "Python", type: "language" },
        { name: "Streamlit", type: "framework" },
        { name: "Oracle SQL", type: "database" },
        { name: "Docker", type: "tool" },
        { name: "K8s", type: "tool" },
        { name: "Git", type: "tool" },
        { name: "Azure", type: "cloud" },
        { name: "Business Skills", type: "soft_skill" },
      ],
    },
    {
      logo: "/images/hesburger_transparent.png",
      company: "Hes-Pro (Finland) Oy",
      role: "Warehouse Worker",
      period: "Jan 2020 - Present",
      description:
        "Physical work in Hesburger's central warehouse. Full hours during the summer (excl. 2024), 30-50h/month during studies.",
      technologies: [
        { name: "People skills", type: "soft_skill" },
        { name: "Friendships", type: "soft_skill" },
        { name: "Physical health", type: "soft_skill" },
      ],
    },
  ];

  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-400">
        Work Experience
      </h1>
      {workEntries.map((entry, index) => (
        <WorkEntry key={index} {...entry} />
      ))}
    </div>
  );
}
