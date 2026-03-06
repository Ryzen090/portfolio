export interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
  hover: string;
}

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  tech: string[];
}

export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  level: number;
  projects: number;
}
