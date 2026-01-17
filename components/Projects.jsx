import React, { useRef, useEffect, useState } from "react";
import { PROJECTS_DATA } from "../constants";
import {
  ExternalLink,
  Github,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";

const ProjectCard = ({
  project,
  index,
  onViewMore,
}) => {
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
      { threshold: 0.1, rootMargin: "50px" },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col h-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <div className="h-1 w-12 bg-zinc-900 dark:bg-white rounded-full"></div>
      </div>

      <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-grow leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs font-semibold px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-zinc-100 dark:border-zinc-900 mt-auto">
        <a
          href={project.github}
          className="flex items-center gap-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={18} />
          Source Code
        </a>

        <button
          onClick={() => onViewMore(project)}
          className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
        >
          <Maximize2 size={18} />
          View Details
        </button>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (project.images && project.images.length > 0 && lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (project.images && project.images.length > 0 && lightboxIndex !== null) {
      setLightboxIndex(
        (prev) => (prev - 1 + project.images.length) % project.images.length,
      );
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;

      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % project.images.length);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex(
          (prev) =>
            (prev - 1 + project.images.length) % project.images.length,
        );
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, project.images]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && project.images && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center animate-in fade-in duration-200">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={32} />
          </button>

          <button
            onClick={handlePrevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors hidden md:block"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="relative max-w-7xl max-h-[90vh] p-4">
            <img
              src={project.images[lightboxIndex]}
              alt={`Full screen view ${lightboxIndex + 1}`}
              className="max-h-[85vh] max-w-full object-contain rounded-sm shadow-2xl"
            />
            <div className="absolute bottom-[-40px] left-0 w-full text-center text-white/50 text-sm">
              Image {lightboxIndex + 1} of {project.images.length}
            </div>
          </div>

          <button
            onClick={handleNextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors hidden md:block"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}

      <div className="relative w-full max-w-6xl bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] modal-enter">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 px-8 pb-8 pt-4 md:px-12 md:pb-12 md:pt-8 overflow-y-auto custom-scrollbar order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
            {project.title}
          </h2>

          <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 text-justify">
            {(project.fullDescription || project.description)
              .split("\n")
              .filter((line) => line.trim()).length > 1 ? (
              <ul className="list-disc pl-5 space-y-2">
                {(project.fullDescription || project.description)
                  .split("\n")
                  .filter((line) => line.trim())
                  .map((line, idx) => (
                    <li key={idx}>{line.trim()}</li>
                  ))}
              </ul>
            ) : (
              <p className="whitespace-pre-wrap">
                {project.fullDescription || project.description}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-4 mt-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Github size={20} />
              View Source
            </a>
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border-2 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Right Side: Image Gallery */}
        <div
          className={`w-full md:w-1/2 bg-zinc-100 dark:bg-zinc-950 order-1 md:order-2 h-64 md:h-auto border-b md:border-b-0 md:border-l border-zinc-200 dark:border-zinc-800 ${project.images && project.images.length > 1 ? "p-6 overflow-y-auto custom-scrollbar" : "flex relative overflow-hidden"}`}
        >
          {project.images && project.images.length > 0 ? (
            project.images.length === 1 ? (
              // Single Image View
              <div
                className="w-full h-full relative cursor-pointer group"
                onClick={() => setLightboxIndex(0)}
              >
                <img
                  src={project.images[0]}
                  alt={`${project.title} Preview`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <Maximize2
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-90 group-hover:scale-110 drop-shadow-lg"
                    size={48}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none md:hidden"></div>
              </div>
            ) : (
              // Grid View for Multiple Images
              <div className="grid grid-cols-2 gap-4">
                {project.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`relative aspect-video group cursor-pointer overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 ${idx === 0 ? "col-span-2 aspect-[16/10]" : ""}`}
                    onClick={() => setLightboxIndex(idx)}
                  >
                    <img
                      src={img}
                      alt={`${project.title} Screenshot ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Maximize2
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100"
                        size={24}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-zinc-400">
              <ImageIcon size={48} className="mb-4 opacity-50" />
              <p>No preview available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCreateProject = () => {
    // In a real app, this would open a modal to create a project
    console.log("Create project clicked");
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-zinc-900 dark:text-white">
          FEATURED <br /> PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onViewMore={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
