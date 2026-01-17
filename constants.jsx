import React from "react";
import {
  Database,
  Server,
  Terminal,
  Lock,
  ShoppingCart,
  Monitor,
} from "lucide-react";
import { link } from "fs";

export const SOCIAL_LINKS = {
  email: "sisodiya.aman07@gmail.com",
  linkedin: "https://linkedin.com/in/AmanSisodiya14", // Placeholder URL based on context
  github: "https://github.com/AmanSisodiya14", // Placeholder URL based on context
  resume: "/AMAN_SISODIYA_FULLSTACK.pdf",
};

export const EXPERIENCE_DATA = [
  {
    company: "Techlene Software Solutions",
    role: "Jr. Java Developer",
    period: "March 2024 - Present",
    description:
      "Contributing to the development of the Metasetu IoT Platform, focusing on scalable backend architecture.",
    achievements: [
      "Built and maintained REST APIs and handled end-to-end frontend & backend operations for core platform services.",
      "Developed advanced platform features including geofencing, business rule engine, and custom role management.",
      "Implemented and managed core platform modules such as asset module, device module, and user module, ensuring reliability and scalability.",
      "Built separate analytics and dashboard modules to support high-performance graph visualization and data exploration.",
      "Built Kafka-based event streaming pipelines processing 500K+ daily messages, supporting high-throughput, low-latency, real-time data at scale.",
      "Improved system responsiveness through targeted Redis caching optimizations.",
      "Implemented JWT authentication to reduce unauthorized access attempts.",
    ],
  },
];

export const PROJECTS_DATA = [
  {
    title: "JWT Security Service",
    description:
      "A standalone JWT-based authentication service built with Spring Boot, designed to be reusable across multiple applications. Implements token generation and validation to secure REST APIs and distributed services.",
    fullDescription:
      "This project provides a robust, reusable JWT authentication service designed for microservices architectures. It handles token generation, validation, and lifecycle management, ensuring secure communication between services. Key features include refresh token rotation, blacklisting for logout, and role-based access control (RBAC) support. The service is built with Spring Boot and Spring Security, optimized for performance and scalability.",
    images: ["/jwt_security.png"],
    tech: ["Java", "Spring Boot", "JWT", "Spring Security"],
    link: "#",
    github: "https://github.com/AmanSisodiya14/security-service-jwt.git",
  },
  {
    title: "WebLock",
    description:
      "WebLock is a security-focused web app for encrypting files and sharing them safely. Users can upload documents, choose an encryption algorithm, and generate an encrypted output with their own key.",
    fullDescription: `People share sensitive files through insecure channels (email, chat apps, random cloud drives), which is basically asking for trouble.

WebLock fixes that by encrypting files before they’re shared, so only the intended person can open them.

Workflow is simple: upload file → choose encryption → set a key → download encrypted file.

Decryption requires the correct key, so leaks or interceptions become useless to attackers.

Supports multiple encryption algorithms, letting users balance speed vs. cryptographic strength.

Adds hash-based integrity checks to confirm whether a file was modified or tampered with during transfer (digital signature vibes).

Built-in file sharing means you can send encrypted files directly from WebLock without bouncing between apps.

Core value props: secure data handling, end-to-end control, tamper detection, and easy sharing — no stress, no paranoia, no “did someone intercept this?” drama.`,
    images: [
      "/weblock1.png",
      "/weblock2.png",
      "/weblock3.png",
      "/weblock4.png",
      "/weblock5.png",
      "/weblock6.png",
      "/weblock7.png",
    ],
    tech: ["Java", "JSP", "AES Encryption", "MySQL"],
    link: "#",
    github: "https://github.com/AmanSisodiya14/WebLock.git",
  },
  {
    title: "Online Grocery Website",
    description:
      "A full-stack e-commerce web application with product browsing, cart, checkout, and order management features. Developed an admin dashboard for inventory and order control.",
    fullDescription:
      "A comprehensive e-commerce platform tailored for online grocery shopping. It features a user-friendly product catalog, dynamic search and filtering, a shopping cart with real-time price calculation, and a seamless checkout process. The admin dashboard provides powerful tools for inventory management, order tracking, and sales analytics, helping business owners streamline their operations. Built with a responsive design to work perfectly on mobile and desktop devices.",
    images: ["/online_grocery.png"],
    tech: ["Java", "Spring Boot", "Hibernate", "React"],
    link: "#",
    github: "https://github.com/AmanSisodiya14/Online-Grocery-Website.git",
  },
];

export const SKILLS_DATA = [
  {
    title: "Data & Infrastructure",
    skills: ["SQL", "Kafka", "Redis", "MySQL", "PostgreSQL"],
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: "Frontend (Working Knowledge) ",
    skills: ["React", "HTML", "CSS", "JavaScript"],
    icon: <Monitor className="w-6 h-6" />,
  },
  // {
  //   title: "DevOps & Tools (Foundational)",
  //   skills: ["Git", "Docker", "Postman", "CI/CD", "Linux"],
  //   icon: <Terminal className="w-6 h-6" />
  // }
];

export const EDUCATION_DATA = {
  degree: "Bachelor of Technology (Computer Science & Engineering)",
  university: "Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore",
  year: "Graduated 2024",
};
