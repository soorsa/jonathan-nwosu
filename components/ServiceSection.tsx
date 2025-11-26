"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
  popular?: boolean;
}

const ServiceSection: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies and best practices.",
      icon: "💻",
      features: [
        "Responsive Design",
        "React/Next.js Development",
        "API Integration",
        "Performance Optimization",
        "SEO Friendly",
        "Cross-browser Compatibility",
      ],
      price: "Starting at $2,500",
    },
    {
      id: 2,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      icon: "📱",
      features: [
        "React Native Development",
        "iOS & Android Apps",
        "App Store Deployment",
        "Push Notifications",
        "Offline Functionality",
        "UI/UX Design",
      ],
      price: "Starting at $3,500",
      popular: true,
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces that enhance user experience.",
      icon: "🎨",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Design Systems",
        "User Testing",
        "Interactive Prototypes",
      ],
      price: "Starting at $1,800",
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      description:
        "Complete online store development with secure payment integration.",
      icon: "🛒",
      features: [
        "Shopping Cart System",
        "Payment Gateway Integration",
        "Inventory Management",
        "Admin Dashboard",
        "Order Tracking",
        "Security & SSL",
      ],
      price: "Starting at $4,000",
    },
    {
      id: 5,
      title: "API Development",
      description: "Robust and scalable backend APIs for your applications.",
      icon: "🔗",
      features: [
        "RESTful API Design",
        "GraphQL Implementation",
        "Database Design",
        "Authentication & Authorization",
        "API Documentation",
        "Cloud Deployment",
      ],
      price: "Starting at $2,000",
    },
    {
      id: 6,
      title: "Consulting & Maintenance",
      description:
        "Ongoing support and consulting to keep your projects running smoothly.",
      icon: "🔧",
      features: [
        "Code Reviews",
        "Performance Audits",
        "Technical Consulting",
        "Regular Updates",
        "Bug Fixing",
        "Security Patches",
      ],
      price: "Starting at $75/hour",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const detailVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      className="py-20 bg-gray-50 dark:bg-slate-900 relative w-full overflow-hidden"
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
              Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I offer a comprehensive range of web development services to bring
            your ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                activeService === service.id ? "ring-2 ring-blue-500" : ""
              }`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-linear-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Popular
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{service.icon}</span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Price */}
                {service.price && (
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {service.price}
                    </span>
                  </div>
                )}

                {/* Features List */}
                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.ul
                      variants={detailVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="space-y-2 mb-6"
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                        >
                          <svg
                            className="w-4 h-4 text-green-500 mr-3 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-2xl"
                >
                  Get Started
                  <svg
                    className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300"
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
                </motion.button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
