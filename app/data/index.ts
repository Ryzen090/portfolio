import { Github, Linkedin, Send } from "lucide-react";

const SOCIAL = [
  {
    icon: Github,
    href: "https://github.com/Ryzen090",
    label: "GitHub",
    hover: "hover:bg-[#24292e] hover:text-white",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/san-chhayly-a25b39323/",
    label: "LinkedIn",
    hover: "hover:bg-[#0A66C2] hover:text-white",
  },
  {
    icon: Send,
    href: "https://t.me/CHHAY_Lyz",
    label: "Telegram",
    hover: "hover:bg-[#229ED9] hover:text-white",
  },
];

const PROJECTS = [
  {
    id: 1,
    title: "Svay Rieng Football",
    image: "/pkrsr.png",
    description:
      "A modern club management platform featuring match updates, team statistics.",
    tech: ["Next.js", "Ant Design"],
  },
  {
    id: 2,
    title: "NSSF Hospital Admin",
    image: "/pkrsr.png",
    description:
      "Administrative system for healthcare operations, and streamlined service workflows.",
    tech: ["Angular", "Material UI"],
  },
  {
    id: 3,
    title: "NSSF Inspection Admin",
    image: "/pkrsr.png",
    description:
      "Administrative system for healthcare operations, and streamlined service workflows.",
    tech: ["Angular", "Material UI"],
  },
];

const EXPERIENCES: Experience[] = [
  {
    year: "2024-Present",
    title: "Frontend Developer",
    company: "Polygram Solution",
    description: "Leading frontend architecture for enterprise applications",
    achievements: [
      "Redesigned core product",
      "Mentored 3 juniors",
      "Improved performance by 40%",
    ],
  },
  {
    year: "2023-2024",
    title: "Frontend Developer",
    company: "Wonderpass Technology",
    description: "Built responsive web applications for global clients",
    achievements: [
      "Delivered 10+ projects",
      "Implemented design system",
      "Reduced bugs by 60%",
    ],
  },
];

const SKILLS = [
  { name: "HTML", level: 88, projects: 12 },
  { name: "CSS", level: 90, projects: 15 },
  {
    name: "JavaScript",
    level: 82,
    projects: 10,
  },
  {
    name: "typescript",
    level: 82,
    projects: 10,
  },
  {
    name: "Tailwind",
    level: 82,
    projects: 10,
  },
  { name: "React", level: 82, projects: 10 },
  {
    name: "Angular",
    level: 95,
    projects: 20,
  },
  { name: "vue", level: 82, projects: 10 },
];

export { SOCIAL, PROJECTS, EXPERIENCES, SKILLS };
