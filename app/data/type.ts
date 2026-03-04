/* eslint-disable @typescript-eslint/no-unused-vars */
type Skill = {
  name: string;
  icon: string;
  color: string;
  category: "frontend" | "backend" | "tools" | "database";
  experience: number;
  projects: number;
};

type Experience = {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
  technologies?: string[];
  logo?: string;
  link?: string;
};
