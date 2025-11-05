/* eslint-disable no-unused-vars */
// src/components/projects.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import p1 from "../images/1.jpg";
import p2 from "../images/rjl.png";
import p3 from "../images/3.png";
import p5 from "../images/2.png";

// --- Skeleton Loader Component ---
function ProjectSkeleton() {
  return (
    <div className="bg-[#232324] rounded-xl shadow overflow-hidden flex flex-col h-full animate-pulse">
      <div className="w-full h-40 sm:h-48 bg-gray-700" />
      <div className="p-6 flex flex-col flex-1">
        <div className="h-3 w-16 bg-gray-600 mb-3 rounded"></div>
        <div className="h-5 w-2/3 bg-gray-500 mb-3 rounded"></div>
        <div className="flex-1 space-y-2">
          <div className="h-3 w-full bg-gray-600 rounded"></div>
          <div className="h-3 w-5/6 bg-gray-600 rounded"></div>
          <div className="h-3 w-3/4 bg-gray-600 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const projects = [
    {
      title: "Unilibrary",
      category: "Web",
      desc: "A high-performance library management system featuring custom role-based access control and a normalized MySQL schema, developed in 48 hours to secure 2nd place at the Caffeine Hackathon.",
      img: p1,
    },
    {
      title: "RhajLu",
      category: "Game",
      desc: "A proof-of-concept project using the Godot engine to explore advanced game state management, physics, and debugging principles in a non-web environment.",
      img: p2,
    },
    {
      title: "PALDOGS",
      category: "Web",
      desc: "A modern, responsive platform built with React and Tailwind CSS, demonstrating proficiency in leveraging the Supabase BaaS for secure authentication and real-time data persistence.",
      img: p3,
    },
    {
      title: "Wanderly",
      category: "Web",
      desc: "A complex application that highlights expertise in full-stack API integration and asynchronous data handling to create and manage detailed user trip itineraries.",
      img: p5,
    },
  ];

  const filters = ["All", "Web", "Game", "Design", "Video"];
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      id="projects"
      className="mt-24 md:mt-0 pt-4 pb-10 px-4 max-w-6xl mx-auto md:ml-[20rem]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-[#1B1B1B] rounded-2xl shadow-xl border border-[#2A2A2A] p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
          Projects
        </h2>
        <span className="block w-10 h-1 bg-white rounded mb-6"></span>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6 justify-center sm:justify-start">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-colors ${
                filter === f
                  ? "bg-white/90 text-black"
                  : "bg-[#232324] text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, idx) => <ProjectSkeleton key={idx} />)
            : filteredProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 30px rgba(255,255,255,0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-[#232324] rounded-xl shadow overflow-hidden flex flex-col h-full"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-gray-400 text-xs mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base mt-2 flex-1">
                      {project.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </motion.section>
  );
}
