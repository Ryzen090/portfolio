import { Github, Linkedin, Send } from "lucide-react";
import {
  TAB,
  Tool,
  Project,
  Experience,
  SocialLink,
  Technology,
  Testimonial,
  Certification,
} from "../type";

export const SOCIAL: SocialLink[] = [
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

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Svay Rieng Football",
    image: "/pkrsr.png",
    description:
      "A modern club management platform featuring match updates and team statistics.",
    tech: ["Next.js", "Ant Design"],
  },
  {
    id: 2,
    title: "NSSF Hospital Admin",
    image: "/pkrsr.png",
    description:
      "Administrative system for healthcare operations and streamlined service workflows.",
    tech: ["Angular", "Material UI"],
  },
  {
    id: 3,
    title: "NSSF Inspection Admin",
    image: "/pkrsr.png",
    description:
      "Administrative system for inspection workflows and reporting.",
    tech: ["Angular", "Material UI"],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    year: "2024",
    end: "Present",
    event: "Junior Frontend Developer",
    company: "Polygram Solution",
    technologies: ["Angular", "Material UI"],
  },
  {
    year: "2023",
    end: "2024",
    event: "Junior Frontend Developer",
    company: "Wonderpass Technology",
    technologies: ["Next.js", "Ant Design"],
  },
];

export const SKILLS: Technology[] = [
  {
    name: "HTML",
    image: "🌐",
  },
  {
    name: "CSS",
    image: "🎨",
  },
  {
    name: "JavaScript",
    image: "⚡",
  },
  {
    name: "TypeScript",
    image: "📘",
  },
  {
    name: "Tailwind",
    image: "🌊",
  },
  {
    name: "React",
    image: "⚛️",
  },
  {
    name: "Angular",
    image: "🅰️",
  },
  {
    name: "Vue",
    image: "💚",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Hun Sen Batheay High School",
    year: "2020",
    title: "High School Diploma",
  },
  {
    name: "Royal University Of Phnom Penh",
    year: "2024",
    title: "Bachelor of Science",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "One of the best frontend developers I've worked with. Clean code and great communication.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Corp",
    avatar: "👩‍💼",
  },
  {
    text: "Delivered complex features ahead of schedule. Highly recommended!",
    author: "Mike Chen",
    role: "CTO",
    company: "StartupX",
    avatar: "👨‍💻",
  },
];

export const TOOLS: Tool[] = [
  { name: "VS Code", icon: "💻" },
  { name: "Git", icon: "📦" },
  { name: "Sourcetree", icon: "🌳" },
  { name: "Figma", icon: "🎨" },
  { name: "ClickUp", icon: "📋" },
  { name: "Postman", icon: "📬" },
];

export const TABS: TAB[] = [
  { id: "experiences", label: "EXPERIENCES" },
  { id: "certifications", label: "CERTIFICATIONS" },
  { id: "technologies", label: "TECHNOLOGIES" },
  { id: "tools", label: "TOOLS" },
  { id: "testimonials", label: "TESTIMONIALS" },
];
