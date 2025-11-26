"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const AnimatedHero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  const imageVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatVariants: Variants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.9, 0.7, 0.9],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.8, 0.7],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Available for new projects
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I`m{" "}
                <motion.span
                  className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Jonathan
                </motion.span>
              </h1>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
                Software Developer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
            >
              I create{" "}
              <span className="font-semibold text-yellow-600 dark:text-yellow-600">
                beautiful
              </span>
              ,{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                functional
              </span>
              ,{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                high performace
              </span>{" "}
              web and mobile applications with modern technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="group relative bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="group border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-all duration-300 block"
                >
                  <span className="flex items-center justify-center gap-2">
                    Contact Me
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div
              variants={imageVariants}
              className="relative mx-auto lg:mx-0 max-w-md"
            >
              {/* Background Shape */}
              <motion.div
                className="absolute -inset-4 bg-linear-to-r from-blue-200 to-purple-200 rounded-2xl transform rotate-6"
                animate={{ rotate: [6, 3, 6] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/globe.svg" // Replace with your image path
                  alt="John Doe - Full Stack Developer"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Overlay linear */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-slate-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      5+ Years
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Experience
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={floatVariants}
                animate="animate"
                transition={{ delay: 2 }}
                className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-slate-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      50+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Projects
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center cursor-pointer justify-center bg-linear-to-r from-black/50 to-black/20 p-5 rounded-full text-gray-600 dark:text-gray-100 hover:text-white dark:hover:text-white transition-colors duration-300"
            aria-label="Scroll to next section"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div
              className="w-6 h-10 border-2 border-gray-100 dark:border-gray-100 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-100 rounded-full mt-2"></div>
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHero;
