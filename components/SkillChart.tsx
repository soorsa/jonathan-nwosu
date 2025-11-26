"use client";

import React from "react";
import { motion } from "framer-motion";

const SkillsChart: React.FC = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind", "JavaScript"],
      level: 90,
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express"],
      level: 85,
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "AWS", "VS Code", "Figma"],
      level: 80,
    },
    {
      category: "Soft Skills",
      skills: [
        "Communication",
        "Problem Solving",
        "Team Work",
        "Leadership",
        "Agile",
      ],
      level: 88,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 mt-12 w-full p-20">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {category.category}
            </h3>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {category.level}%
            </span>
          </div>

          {/* Radial Progress */}
          <div className="relative w-32 h-32 mx-auto mb-4">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Background Circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
                className="dark:stroke-slate-600"
              />
              {/* Progress Circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: category.level / 100 }}
                transition={{ duration: 2, ease: "easeOut" }}
                transform="rotate(-90 50 50)"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {category.level}%
              </span>
            </div>
          </div>

          {/* Skills List */}
          <div className="flex flex-wrap gap-2 justify-center">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsChart;
