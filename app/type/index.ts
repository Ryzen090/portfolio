import React from "react";

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
  end: string;
  event: string;
  company: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
  projects: number;
  years: string;
  endorsements: string;
  category: string;
}

export interface Tool {
  name: string;
  icon: string | React.ReactNode;
}

export interface Certification {
  name: string;
  title: string;
  year: string;
}

export interface Testimonial {
  avatar: string;
  author: string;
  role: string;
  company: string;
  text: string;
}

export type TabId =
  | "skills"
  | "Experiences"
  | "certifications"
  | "tools"
  | "testimonials";

export interface TAB {
  id: TabId;
  label: string;
}
