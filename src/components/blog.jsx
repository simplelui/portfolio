/* eslint-disable no-unused-vars */
// src/components/blog.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import b5 from "../images/profile.png";

// --- Skeleton Loader Component ---
function BlogSkeleton() {
  return (
    <div className="bg-[#232324] rounded-xl shadow overflow-hidden flex flex-col h-full animate-pulse">
      <div className="w-full h-40 sm:h-48 bg-gray-700" />
      <div className="p-6 flex flex-col flex-1">
        <div className="h-3 w-24 bg-gray-600 mb-3 rounded"></div>
        <div className="h-5 w-2/3 bg-gray-500 mb-3 rounded"></div>
        <div className="flex-1 space-y-2">
          <div className="h-3 w-full bg-gray-600 rounded"></div>
          <div className="h-3 w-5/6 bg-gray-600 rounded"></div>
          <div className="h-3 w-3/4 bg-gray-600 rounded"></div>
        </div>
        <div className="h-8 w-24 bg-gray-700 mt-4 rounded-lg"></div>
      </div>
    </div>
  );
}

export default function Blog() {
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const posts = [
    {
      title: "RTU",
      date: "Feb 23, 2022",
      category: "Random",
      desc: "Currently pursuing a BSIT, applying expertise in modern web development to build a specialization in Cloud and Cyber Security principles.",
      img: b5,
    },
  ];

  const filters = ["All", "Food", "Game", "Movie", "Random"];
  const filteredPosts =
    filter === "All" ? posts : posts.filter((p) => p.category === filter);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      id="blog"
      className="mt-24 md:mt-0 pt-4 pb-6 px-4 max-w-6xl mx-auto md:ml-[20rem]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-[#1B1B1B] rounded-2xl shadow-xl border border-[#2A2A2A] p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
          Blog
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

        {/* Posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 3 }).map((_, idx) => <BlogSkeleton key={idx} />)
            : filteredPosts.map((post, idx) => (
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
                    src={post.img}
                    alt={post.title}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-gray-400 text-xs mb-2">
                      {post.category} • {post.date}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base mt-2 flex-1">
                      {post.desc}
                    </p>
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
