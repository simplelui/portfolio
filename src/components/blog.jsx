// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

export default function Blog() {
  const [filter, setFilter] = useState("All");

  const posts = [
    {
      title: "Mandaluyong City: A Vibrant Urban Hub",
      date: "Feb 23, 2022",
      category: "Food",
      desc: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
      img: "./src/images/5.jpg"
    },
    {
      title: "Latest Game Release Review",
      date: "Mar 5, 2022",
      category: "Game",
      desc: "A deep dive into the mechanics and visuals of the newest hit game.",
      img: "./src/images/6.jpg"
    },
    {
      title: "Chainsaw Massacre Movie Review",
      date: "Apr 12, 2022",
      category: "Movie",
      desc: "Exploring the narrative depth and visuals of this award-winning movie.",
      img: "./src/images/7.jpg"
    },
    {
      title: "Random Thoughts: Late Night Musings",
      date: "May 1, 2022",
      category: "Random",
      desc: "A personal reflection on life, creativity, and inspiration.",
      img: "./src/images/8.jpg"
    }
  ];

  const filteredPosts = filter === "All" ? posts : posts.filter((post) => post.category === filter);

  return (
    <motion.section
      id="blog"
      className="py-4 px-4 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full bg-[#1B1B1B] rounded-2xl border border-[#2A2A2A] shadow-xl p-10">
        <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
          Blog
        </h2>
        <span className="block w-10 h-1 bg-white rounded ml-0"></span>
        <br />
        {/* Filter Buttons */}
        <div className="flex gap-6 mb-8">
          {["All", "Food", "Game", "Movie", "Random"].map((cat) => (
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
        {/* Posts */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <motion.div
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 20px rgba(255,255,255,0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              key={post.title}
              className="bg-[#232324] rounded-xl shadow p-4 flex flex-col"
            >
              <img src={post.img} alt={post.title} className="rounded-lg mb-4 object-cover h-40 w-full" />
              <div className="text-gray-400 text-xs mb-1">{post.category} • {post.date}</div>
              <div className="font-bold text-white text-lg mb-1">{post.title}</div>
              <div className="text-gray-400 text-sm">{post.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
