"use client";

import React from "react";
import { motion } from "framer-motion";

const ProjectStats: React.FC = () => {
  const stats = [
    {
      number: "50+",
      label: "Projects Completed",
      description: "Across various technologies and industries",
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      description: "Based on client feedback and reviews",
    },
    {
      number: "3M+",
      label: "Users Reached",
      description: "Total users across all projects",
    },
    {
      number: "2+",
      label: "Years Experience",
      description: "Building digital solutions",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Project Impact & Statistics
          </h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Delivering quality solutions that make a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-blue-100 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectStats;
