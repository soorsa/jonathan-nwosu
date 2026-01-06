"use client";

import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  SiAmazonwebservices,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { DiPhotoshop } from "react-icons/di";

interface Skill {
  name: string;
  level: number;
  icon: ReactNode;
  color: string;
  category: "frontend" | "backend" | "tools" | "design";
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  // const [activeCategory, setActiveCategory] = useState<
  //   "all" | "frontend" | "backend" | "tools" | "design"
  // >("all");

  const skills: Skill[] = [
    // Frontend Skills
    {
      name: "React",
      level: 95,
      icon: <SiReact />,
      color: "from-blue-500 to-cyan-500",
      category: "frontend",
    },
    {
      name: "TypeScript",
      level: 90,
      icon: <SiTypescript />,
      color: "from-blue-600 to-blue-800",
      category: "frontend",
    },
    {
      name: "Next.js",
      level: 92,
      icon: <SiNextdotjs />,
      color: "from-gray-700 to-gray-900",
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      level: 88,
      icon: <SiTailwindcss />,
      color: "from-teal-400 to-cyan-500",
      category: "frontend",
    },
    {
      name: "JavaScript",
      level: 94,
      icon: <SiJavascript />,
      color: "from-yellow-400 to-yellow-600",
      category: "frontend",
    },
    {
      name: "HTML/CSS",
      level: 96,
      icon: <SiHtml5 />,
      color: "from-orange-500 to-red-500",
      category: "frontend",
    },

    // Backend Skills
    {
      name: "Node.js",
      level: 88,
      icon: <SiNodedotjs />,
      color: "from-green-500 to-green-700",
      category: "backend",
    },
    {
      name: "Python",
      level: 85,
      icon: <SiPython />,
      color: "from-yellow-500 to-blue-500",
      category: "backend",
    },
    {
      name: "PostgreSQL",
      level: 82,
      icon: <SiPostgresql />,
      color: "from-blue-700 to-blue-900",
      category: "backend",
    },
    {
      name: "MongoDB",
      level: 80,
      icon: <SiMongodb />,
      color: "from-green-600 to-green-800",
      category: "backend",
    },
    {
      name: "Express.js",
      level: 86,
      icon: <SiExpress />,
      color: "from-orange-500 to-red-500",
      category: "backend",
    },
    {
      name: "GraphQL",
      level: 78,
      icon: <SiGraphql />,
      color: "from-pink-500 to-purple-500",
      category: "backend",
    },

    // Tools & Others
    {
      name: "Git",
      level: 92,
      icon: <SiGithub />,
      color: "from-gray-600 to-gray-800",
      category: "tools",
    },
    {
      name: "Docker",
      level: 75,
      icon: <SiDocker />,
      color: "from-blue-500 to-cyan-500",
      category: "tools",
    },
    {
      name: "AWS",
      level: 72,
      icon: <SiAmazonwebservices />,
      color: "from-orange-400 to-yellow-500",
      category: "tools",
    },
    {
      name: "Figma",
      level: 85,
      icon: <SiFigma />,
      color: "from-purple-500 to-pink-500",
      category: "design",
    },
    {
      name: "Photoshop",
      level: 78,
      icon: <DiPhotoshop />,
      color: "from-blue-600 to-purple-600",
      category: "design",
    },
    {
      name: "VS Code",
      level: 95,
      icon: <VscCode />,
      color: "from-blue-500 to-purple-500",
      category: "tools",
    },
  ];

  const categories = [
    { id: "all", name: "All Skills", count: skills.length },
    {
      id: "frontend",
      name: "Frontend",
      count: skills.filter((s) => s.category === "frontend").length,
    },
    {
      id: "backend",
      name: "Backend",
      count: skills.filter((s) => s.category === "backend").length,
    },
    {
      id: "tools",
      name: "Tools",
      count: skills.filter((s) => s.category === "tools").length,
    },
    {
      id: "design",
      name: "Design",
      count: skills.filter((s) => s.category === "design").length,
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const containerVariants = {
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

  const progressVariants: Variants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3,
      },
    }),
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-slate-900 relative w-full overflow-hidden"

      // className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden"
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
            My{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex md:justify-center gap-4 mb-12 overflow-x-scroll md:overflow-auto"
        >
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setActiveCategory(category.id as string)}
              className={`px-6 py-2 cursor-pointer rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
              }`}
            >
              <span className="line-clamp-1">{category.name}</span>
              <span
                className={`text-sm px-2 py-1 rounded-full ${
                  activeCategory === category.id
                    ? "bg-white/20 text-white"
                    : "bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-gray-400"
                }`}
              >
                {category.count}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 bg-linear-to-r ${skill.color} rounded-xl flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    custom={skill.level}
                    variants={progressVariants}
                    className={`h-full bg-linear-to-r ${skill.color} rounded-full relative`}
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </motion.div>
                </div>

                {/* Skill Level Label */}
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level < 70
                      ? "Intermediate"
                      : skill.level < 85
                      ? "Advanced"
                      : "Expert"}
                  </span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className={`w-2 h-2 rounded-full ${
                          star <= Math.ceil(skill.level / 20)
                            ? `bg-linear-to-r ${skill.color}`
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {/* Experience */}
          <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              5+
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              Years Experience
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Working with modern technologies
            </p>
          </div>

          {/* Projects */}
          <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              50+
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              Projects Completed
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Across various industries
            </p>
          </div>

          {/* Technologies */}
          <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              20+
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              Technologies
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Mastered and regularly used
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
