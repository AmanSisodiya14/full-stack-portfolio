import React, { useRef, useEffect, useState } from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { CheckCircle2 } from 'lucide-react';

// Keywords to highlight in experience text
const KEYWORDS = [
  'REST APIs',
  'Kafka',
  'Redis',
  'JWT',
  'Spring Boot',
  'Microservices',
  'IoT',
  'Geofencing',
  'Java',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'Hibernate',
  'React',
  'JavaScript',
  'TypeScript',
  'Docker',
  'CI/CD',
  'Linux',
  'authentication',
  'authorization',
  'caching',


  'graph visualization',
  'platform services',
  'frontend & backend operations',
  'business rule execution',
  'custom role creation',
  'dashboards',
  'assets',
  'devices',
  'users',
];

// Function to highlight keywords in text
const highlightKeywords = (text) => {
  // Sort keywords by length (longest first) to match longer phrases first
  const sortedKeywords = [...KEYWORDS].sort((a, b) => b.length - a.length);

  // Track which parts of the string are already matched
  const matchedRanges = [];

  // Find all matches without overlapping
  sortedKeywords.forEach(keyword => {
    const regex = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    let match;
    while ((match = regex.exec(text)) !== null) {
      const start = match.index;
      const end = start + match[0].length;

      // Check if this range overlaps with any existing match
      const overlaps = matchedRanges.some(
        range => !(end <= range.start || start >= range.end)
      );

      if (!overlaps) {
        matchedRanges.push({ start, end, keyword: match[0] });
      }
    }
  });

  // Sort matches by start position
  matchedRanges.sort((a, b) => a.start - b.start);

  // Build the highlighted text
  const parts = [];
  let lastIndex = 0;
  let key = 0;

  matchedRanges.forEach(range => {
    // Add text before the match
    if (range.start > lastIndex) {
      parts.push(text.substring(lastIndex, range.start));
    }

    // Add the highlighted keyword
    parts.push(
      <span
        key={key++}
        className="font-semibold text-zinc-900 dark:text-white"
      >
        {range.keyword}
      </span>
    );

    lastIndex = range.end;
  });

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? <>{parts}</> : text;
};

const ExperienceItem = ({ exp, index }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative pl-8 md:pl-16 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline Dot */}
      <span className="absolute -left-[5px] md:-left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-900 dark:bg-white ring-4 ring-white dark:ring-zinc-950"></span>

      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
          {exp.company}
        </h3>
        <span className="text-sm font-mono text-zinc-500 dark:text-zinc-400 mt-1 md:mt-0">
          {exp.period}
        </span>
      </div>

      <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-4">
        {exp.role}
      </p>

      <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-3xl leading-relaxed">
        {highlightKeywords(exp.description)}
      </p>

      <div className="space-y-3">
        {exp.achievements.map((achievement, i) => (
          <div key={i} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-zinc-900 dark:text-white shrink-0 mt-0.5" />
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base">
              {highlightKeywords(achievement)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-zinc-900 dark:text-white">
          PROFESSIONAL <br /> EXPERIENCE
        </h2>

        <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-12 space-y-16">
          {EXPERIENCE_DATA.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
