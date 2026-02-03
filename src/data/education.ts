import { EducationEntry } from "./types";

export const educationEntries: EducationEntry[] = [
  {
    logo: "/images/utu_logo_transparent_test.png",
    institution: "University of Turku",
    degree: "MSc in ICT (ongoing) 🐌",
    period: "Sep 2023 - Present",
    description:
      "Currently pursuing a Master's degree in ICT with a specialization in Data Analytics and Health Technology.",
    credits: "65/120",
    gpa: 4.07,
    technologies: [
      { name: "Python", type: "language" },
      { name: "Data Science", type: "hard_skill" },
      { name: "Machine Learning", type: "hard_skill" },
      { name: "Deep Learning", type: "hard_skill" },
      { name: "Computer Vision", type: "hard_skill" },
      { name: "Health Technology", type: "hard_skill" },
      { name: "Engineering", type: "hard_skill" },
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
      { name: "Python", type: "language" },
      { name: "JavaScript", type: "language" },
      { name: "R", type: "language" },
      { name: "C", type: "language" },
      { name: "React", type: "framework" },
      { name: "SQL", type: "database" },
      { name: "Git", type: "tool" },
      { name: "Unix", type: "tool" },
      { name: "CMD", type: "tool" },
      { name: "MATLAB", type: "tool" },
      { name: "Computer Science", type: "hard_skill" },
      { name: "Mathematics", type: "hard_skill" },
      { name: "Statistics", type: "hard_skill" },
      { name: "Physics", type: "hard_skill" },
      { name: "Engineering", type: "hard_skill" },
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
      { name: "Mathematics", type: "hard_skill" },
      { name: "Physics", type: "hard_skill" },
      { name: "Chemistry", type: "hard_skill" },
    ],
  },
];
