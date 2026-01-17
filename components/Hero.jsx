import React from "react";
import { Linkedin, Download, ArrowRight } from "lucide-react";
import { SOCIAL_LINKS } from "../constants";
const getExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (days < 0) months--;
  if (months < 0) {
    years--;
    months += 12;
  }

  if (months === 12) {
    years++;
    months = 0;
  }

  // formatting layer
  if (months === 0) {
    return years;
  }

  return `${years}.${months}`;
};





const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto w-full">
        {/* Availability */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full
                      border border-zinc-200 dark:border-zinc-800
                      text-xs font-medium tracking-wide
                      text-zinc-600 dark:text-zinc-400">
          AVAILABLE FOR HIRE
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight
                     text-zinc-900 dark:text-white mb-4">
          Aman Sisodiya
        </h1>

        {/* Role */}
        <h2 className="text-2xl md:text-3xl font-semibold
                     text-zinc-800 dark:text-zinc-200 mb-3">
          Full Stack Developer - {getExperience("2024-03-01")}+ years
        </h2>

        {/* Tech Stack Line */}
        <p className="text-sm md:text-base uppercase tracking-wider
                    text-zinc-500 dark:text-zinc-400 mb-8">
          Java · Spring Boot · Distributed Systems · React
        </p>

        {/* Value Proposition */}
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400
                    max-w-2xl leading-relaxed mb-12">
          Building <span className="font-semibold text-zinc-900 dark:text-white">
            high-availability systems</span> and
          <span className="font-semibold text-zinc-900 dark:text-white">
            {" "}real-time data pipelines</span> for production-scale applications.
        </p>

        {/* Actions */}
        <div className="flex gap-4">
          <a
            href={SOCIAL_LINKS.linkedin}
            className="inline-flex items-center gap-2 px-6 py-3
                     bg-zinc-900 dark:bg-white
                     text-white dark:text-zinc-900
                     font-medium rounded-lg
                     hover:opacity-90 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={18} />
            View LinkedIn
          </a>

          <a
            href={SOCIAL_LINKS.resume}
            className="inline-flex items-center gap-2 px-6 py-3
                     border border-zinc-300 dark:border-zinc-700
                     text-zinc-900 dark:text-white
                     font-medium rounded-lg
                     hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
    </section>

  );
};

export default Hero;
