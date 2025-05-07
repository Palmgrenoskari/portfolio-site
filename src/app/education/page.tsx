import EducationEntry from "@/components/EducationEntry";

export default function EducationPage() {
  const educationEntries = [
    {
      logo: "/images/utu_logo_transparent_test.png",
      institution: "University of Turku",
      degree: "MSc in ICT (ongoing)",
      period: "Sep 2023 - Present",
      description:
        "Currently pursuing a Master's degree in ICT with a specialization in Data Analytics and Health Technology.",
      credits: "65/120",
      gpa: 4.07,
      technologies: [
        { name: "Python", type: "language" as const },
        { name: "Data Science", type: "hard_skill" as const },
        { name: "Machine Learning", type: "hard_skill" as const },
        { name: "Deep Learning", type: "hard_skill" as const },
        { name: "Computer Vision", type: "hard_skill" as const },
        { name: "Health Technology", type: "hard_skill" as const },
        { name: "Engineering", type: "hard_skill" as const },
      ],
    },
    {
      logo: "/images/utu_logo_transparent_test.png",
      institution: "University of Turku",
      degree: "Bachelor of Technology (ICT)",
      period: "Sep 2020 - Dec 2024",
      description:
        "Completed a Bachelor's degree in ICT with a minor in Statistics",
      credits: "183/180",
      thesis: "Comparison of CNN Architectures in Fruit Recognition.",
      gpa: 3.93,
      technologies: [
        { name: "Python", type: "language" as const },
        { name: "JavaScript", type: "language" as const },
        { name: "R", type: "language" as const },
        { name: "C", type: "language" as const },
        { name: "React", type: "framework" as const },
        { name: "SQL", type: "database" as const },
        { name: "Git", type: "tool" as const },
        { name: "Unix", type: "tool" as const },
        { name: "CMD", type: "tool" as const },
        { name: "MATLAB", type: "tool" as const },
        { name: "Computer Science", type: "hard_skill" as const },
        { name: "Mathematics", type: "hard_skill" as const },
        { name: "Statistics", type: "hard_skill" as const },
        { name: "Physics", type: "hard_skill" as const },
        { name: "Engineering", type: "hard_skill" as const },
      ],
    },
    {
      logo: "/images/paimio_logo.png",
      institution: "Paimio Upper Secondary School",
      degree: "Matriculation examination (Ylioppilastutkinto)",
      period: "Sep 2013 - May 2016",
      description:
        "Completed upper secondary education with a focus on Mathematics, Physics, and Chemistry.",
      technologies: [
        { name: "Mathematics", type: "hard_skill" as const },
        { name: "Physics", type: "hard_skill" as const },
        { name: "Chemistry", type: "hard_skill" as const },
      ],
    },
  ];

  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-yellow-400">
        Education
      </h1>
      {educationEntries.map((entry, index) => (
        <EducationEntry key={index} {...entry} />
      ))}
    </div>
  );
}
