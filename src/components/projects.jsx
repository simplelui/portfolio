// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projectList = [
  { name: "Wanderly", desc: "Web Development", category: "Web Development", img: "./src/images/wanderly.jpg" },
  { name: "Orizon", desc: "Web Development", category: "Web Development", img: "./src/images/1.jpg" },
  { name: "Fundo", desc: "UI/UX Design", category: "UI/UX Design", img: "./src/images/2.jpg" },
  { name: "Rhajlu Adventure", desc: "Game Development", category: "Game Development", img: "./src/images/RJL.png" },
  { name: "DSM.", desc: "UI/UX Design", category: "UI/UX Design", img: "./src/images/3.jpg" },
  { name: "MetaSpark", desc: "UI/UX Design", category: "UI/UX Design", img: "./src/images/4.jpg" },
];

  const filteredProjects = filter === "All" ? projectList : projectList.filter((project) => project.category === filter);

  return (
    <motion.section
      id="projects"
      className="py-4 px-4 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full bg-[#1B1B1B] rounded-2xl border border-[#2A2A2A] shadow-xl p-10">
        <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
          Projects
        </h2>
        <span className="block w-10 h-1 bg-white rounded ml-0"></span>
        <br />
        {/* Filter Buttons */}
        <div className="flex gap-6 mb-8">
          {["All", "UI/UX Design", "Game Development", "Web Development"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-2xl border px-3 py-1 font-semibold transition-colors ${
                filter === cat
                  ? "bg-white text-black border-white"
                  : "bg-[#1B1B1B] border-[#2A2A2A] text-white hover:bg-[#2A2A2A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Projects */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              whileHover={{ 
                scale: 1.03,               // slight zoom-in
                boxShadow: "0 0 20px rgba(255,255,255,0.15)" // soft white glow
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              key={project.name} // or post.title in Blog.jsx
              className="bg-[#232324] rounded-xl shadow p-4 flex flex-col"
            >
              <img src={project.img} alt={project.name} className="rounded-lg mb-4 object-cover h-40 w-full" />
              <div className="font-bold text-white">{project.name}</div>
              <div className="text-gray-400 text-sm">{project.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
