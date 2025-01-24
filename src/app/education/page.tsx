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
      credits: "50/120",
      gpa: 4.12,
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
    },
    {
      logo: "/images/corgi.jpg",
      institution: "Paimio Upper Secondary School",
      degree: "Matriculation examination (Ylioppilastutkinto)",
      period: "Sep 2013 - May 2016",
      description:
        "Completed upper secondary education with a focus on Mathematics, Physics, and Chemistry.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-yellow-400">
        Education
      </h1>
      {educationEntries.map((entry, index) => (
        <EducationEntry key={index} {...entry} />
      ))}
    </div>
  );
}
