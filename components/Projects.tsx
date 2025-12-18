"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
// import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  category: "web" | "mobile" | "fullstack" | "ecommerce" | "design";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  // const [activeFilter, setActiveFilter] = useState<
  //   "all" | "web" | "mobile" | "fullstack" | "ecommerce" | "design"
  // >("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with modern UI and secure payments.",
      fullDescription:
        "A comprehensive e-commerce platform built with Next.js and Node.js. Features include user authentication, product management, shopping cart, secure payment processing with Stripe, order tracking, and admin dashboard. The platform supports multiple payment methods and includes real-time inventory management.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Stripe",
        "Tailwind",
      ],
      category: "ecommerce",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      year: 2024,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management with real-time updates and team features.",
      fullDescription:
        "A real-time task management application built with React and Socket.io. Features include drag-and-drop functionality, team collaboration, file attachments, progress tracking, and notifications. The app supports multiple workspaces and includes advanced filtering and search capabilities.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React",
        "Socket.io",
        "PostgreSQL",
        "Express",
        "Material-UI",
      ],
      category: "web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      year: 2024,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Beautiful weather dashboard with interactive maps and analytics.",
      fullDescription:
        "An interactive weather dashboard that provides real-time weather data, forecasts, and historical analytics. Features include interactive maps, weather alerts, customizable dashboards, and location-based services. The app integrates with multiple weather APIs and includes data visualization charts.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "D3.js", "Chart.js", "Weather API", "Leaflet"],
      category: "web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      year: 2023,
    },
    {
      id: 4,
      title: "Fitness Mobile App",
      description:
        "Cross-platform fitness tracking app with workout plans and progress analytics.",
      fullDescription:
        "A comprehensive fitness application built with React Native. Features include workout planning, progress tracking, social features, nutrition tracking, and integration with wearable devices. The app includes video demonstrations, custom workout creation, and achievement systems.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React Native",
        "Firebase",
        "Redux",
        "Chart.js",
        "Node.js",
      ],
      category: "mobile",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      year: 2023,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Modern portfolio website with animations and CMS integration.",
      fullDescription:
        "A responsive portfolio website built with Next.js and Tailwind CSS. Features include smooth animations, dark mode, blog integration, contact forms, and CMS integration for easy content management. The website is optimized for performance and SEO.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Sanity CMS",
        "Vercel",
      ],
      category: "web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      year: 2023,
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management and insights.",
      fullDescription:
        "A comprehensive social media analytics dashboard that aggregates data from multiple platforms. Features include post scheduling, engagement analytics, audience insights, competitor analysis, and automated reporting. The dashboard includes real-time data updates and customizable widgets.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React",
        "Python",
        "Django",
        "PostgreSQL",
        "Redis",
        "Celery",
      ],
      category: "fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      year: 2023,
    },
    {
      id: 7,
      title: "UI Design System",
      description: "Complete design system with components and documentation.",
      fullDescription:
        "A comprehensive design system built with Storybook and React. Includes reusable components, design tokens, accessibility guidelines, and documentation. The system supports multiple themes and includes automated testing for component consistency.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React",
        "Storybook",
        "Styled Components",
        "Figma",
        "Jest",
      ],
      category: "design",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      year: 2023,
    },
    {
      id: 8,
      title: "Real Estate Platform",
      description:
        "Property listing platform with virtual tours and agent tools.",
      fullDescription:
        "A real estate platform that connects buyers with properties and agents. Features include property search with advanced filters, virtual tours, mortgage calculators, agent profiles, and lead management. The platform includes admin tools for property management and analytics.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Mapbox",
        "Stripe",
      ],
      category: "fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      year: 2024,
    },
  ];

  const filters = [
    { id: "all", name: "All Projects", count: projects.length },
    {
      id: "web",
      name: "Web Apps",
      count: projects.filter((p) => p.category === "web").length,
    },
    {
      id: "mobile",
      name: "Mobile Apps",
      count: projects.filter((p) => p.category === "mobile").length,
    },
    {
      id: "fullstack",
      name: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      count: projects.filter((p) => p.category === "ecommerce").length,
    },
    {
      id: "design",
      name: "UI/UX Design",
      count: projects.filter((p) => p.category === "design").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // const featuredProjects = projects.filter((project) => project.featured);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-slate-900 relative overflow-hidden w-full"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Completed{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Featured Projects */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <div className="h-64 bg-linear-to-br from-blue-500 to-purple-600 relative">
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">
                        {project.title}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.year}
                    </span>
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                          Live Demo
                        </button>
                      )}
                      {project.githubUrl && (
                        <button className="text-gray-600 hover:text-gray-700 font-medium text-sm">
                          GitHub
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Projects Filter and View Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0"
        >
          {/* Filter Buttons */}
          <div className="flex gap-2 justify-start w-[98%] items-center overflow-x-scroll md:overflow-auto">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as string)}
                className={`px-4 py-2 cursor-pointer rounded-full min-w-fit font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                }`}
              >
                {filter.name} ({filter.count})
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="hidden md:flex items-center space-x-2 bg-white dark:bg-slate-800 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-colors duration-300 ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("masonry")}
              className={`p-2 rounded-md transition-colors duration-300 ${
                viewMode === "masonry"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6h6m-6 4h6m-6 4h6M4 6h1m-1 4h1m-1 4h1"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={`${activeFilter}-${viewMode}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`grid gap-6 ${
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                className={`bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer ${
                  viewMode === "masonry" && "break-inside-avoid"
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <div className="h-48 bg-linear-to-br from-blue-400 to-purple-500 relative">
                    {/* Project Image Placeholder */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">
                        {project.title}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold">
                        View Project →
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        project.category === "web"
                          ? "bg-blue-100 text-blue-700"
                          : project.category === "mobile"
                          ? "bg-green-100 text-green-700"
                          : project.category === "fullstack"
                          ? "bg-purple-100 text-purple-700"
                          : project.category === "ecommerce"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-pink-100 text-pink-700"
                      }`}
                    >
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          Live
                        </button>
                      )}
                      {project.githubUrl && (
                        <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                          Code
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different filter to see more projects.
            </p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <div className="h-64 bg-linear-to-br from-blue-500 to-purple-600 relative">
                  {/* Project Image */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {selectedProject.title}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center space-x-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          selectedProject.category === "web"
                            ? "bg-blue-100 text-blue-700"
                            : selectedProject.category === "mobile"
                            ? "bg-green-100 text-green-700"
                            : selectedProject.category === "fullstack"
                            ? "bg-purple-100 text-purple-700"
                            : selectedProject.category === "ecommerce"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-pink-100 text-pink-700"
                        }`}
                      >
                        {selectedProject.category}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {selectedProject.year}
                      </span>
                      {selectedProject.featured && (
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-3 mt-4 lg:mt-0">
                    {selectedProject.liveUrl && (
                      <motion.a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        Live Demo
                      </motion.a>
                    )}
                    {selectedProject.githubUrl && (
                      <motion.a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300"
                      >
                        View Code
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Project Overview
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
