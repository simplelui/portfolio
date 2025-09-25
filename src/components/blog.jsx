// src/components/blog.jsx
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// import images from src/images (adjust filenames if yours differ)
import b5 from "../images/5.jpg";
import b6 from "../images/6.jpg";
import b7 from "../images/7.jpg";
import b8 from "../images/8.jpg";

export default function Blog() {
  const [filter, setFilter] = useState("All");

  const posts = [
    {
      title: "Mandaluyong City: A Vibrant Urban Hub",
      date: "Feb 23, 2022",
      category: "Food",
      desc: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
      img: b5,
    },
    {
      title: "Latest Game Release Review",
      date: "Mar 5, 2022",
      category: "Game",
      desc: "A deep dive into the mechanics and visuals of the newest hit game.",
      img: b6,
    },
    {
      title: "Chainsaw Massacre Movie Review",
      date: "Apr 12, 2022",
      category: "Movie",
      desc: "Exploring the narrative depth and visuals of this award-winning movie.",
      img: b7,
    },
    {
      title: "Random Thoughts: Late Night Musings",
      date: "May 1, 2022",
      category: "Random",
      desc: "A personal reflection on life, creativity, and inspiration.",
      img: b8,
    },
  ];

  const filters = ["All", "Food", "Game", "Movie", "Random"];
  const filteredPosts = filter === "All" ? posts : posts.filter((p) => p.category === filter);

  return (
    <motion.section
      id="blog"
<<<<<<< HEAD
  className="pt-4 pb-6 px-4 max-w-6xl mx-auto md:ml-[20rem]"
=======
      className="py-6 px-4 max-w-6xl mx-auto"
>>>>>>> c8b104b2d0cbb399fa2a91b411ae39982394a949
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-[#1B1B1B] rounded-2xl shadow-xl border border-[#2A2A2A] p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Blog</h2>
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

        {/* Posts grid with equal-height cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(255,255,255,0.04)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#232324] rounded-xl shadow overflow-hidden flex flex-col h-full"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <div className="text-gray-400 text-xs mb-2">
                  {post.category} • {post.date}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{post.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mt-2 flex-1">{post.desc}</p>
                <button className="mt-4 self-start text-sm text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
