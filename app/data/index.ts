import { Github, Linkedin, Send } from "lucide-react";

export const socialLinks = [
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

export const projects = [
  {
    id: 1,
    title: "Svay Rieng Football Club",
    description:
      "A full-featured online shopping platform with payment integration and real-time inventory.",
    tech: ["Next.JS", "Ant Design"],
  },
  {
    id: 2,
    title: "NSSF Hospital Admin",
    description:
      "Mobile application for workout tracking, nutrition planning, and health monitoring.",
    tech: ["Angular", "Material UI"],
  },
];
