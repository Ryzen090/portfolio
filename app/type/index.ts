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
  responsibilities: string[];
  type?: string;
  level?: string;
  workMode?: string;
}

export interface Technology {
  name: string;
  image: string;
}

export interface Tool {
  name: string;
  image: string;
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
  | "technologies"
  | "experiences"
  | "certifications"
  | "tools"
  | "testimonials";

export interface TAB {
  id: TabId;
  label: string;
}
