import React from 'react';
export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  fullDescription?: string;
  images?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}
