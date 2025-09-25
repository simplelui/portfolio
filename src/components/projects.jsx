// src/components/projects.jsx
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import p1 from "../images/1.jpg";
import p2 from "../images/2.jpg";
import p3 from "../images/3.jpg";
import p4 from "../images/4.jpg";
import p5 from "../images/rjl.png";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Portfolio Website",
      category: "Web",
      desc: "A modern responsive portfolio website built with React and Tailwind.",
      img: p1,
    },
    {
      title: "Pixel Adventure Game",
      category: "Game",
      desc: "A 2D adventure game created using Unity with pixel art assets.",
      img: p2,
    },
    {
      title: "UI/UX Design Dashboard",
      category: "Design",
      desc: "A clean and user-friendly dashboard concept made in Figma.",
      img: p3,
    },
    {
      title: "Video Editing Project",
      category: "Video",
      desc: "A cinematic short film edited with Adobe Premiere Pro and After Effects.",
      img: p4,
    },
    // merged in from remote
    {
      title: "Wanderly",
      category: "Web",
      desc: "Web Development",
      img: p4,
    },
    {
      title: "Orizon",
      category: "Web",
      desc: "Web Development",
      img: p1,
    },
    {
      title: "Fundo",
      category: "Design",
      desc: "UI/UX Design",
      img: p2,
    },
    {
      title: "Rhajlu Adventure",
      category: "Game",
      desc: "Game Development",
      img: p5,
    },
    {
      title: "DSM.",
      category: "Design",
      desc: "UI/UX Design",
      img: p2,
    },
    {
      title: "MetaSpark",
      category: "Design",
      desc: "UI/UX Design",
      img: p1,
    },
  ];

  const filters = ["All", "Web", "Game", "Design", "Video"];
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

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
          {filteredProjects.map((project, idx) => (
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
                <button className="mt-4 self-start text-sm text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
