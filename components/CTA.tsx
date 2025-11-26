"use client";

import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="w-full pb-20">
      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to start your project?
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let{"'"}s work together to bring your ideas to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-all duration-300"
            >
              View My Portfolio
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
