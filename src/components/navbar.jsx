import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const links = ["About", "Resume", "Projects", "Blog", "Contact"];
  const location = useLocation();

  return (
    <nav>
      {/* Desktop navbar (top) */}
<<<<<<< HEAD
  <div className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 w-[40vw] max-w-6xl z-30 bg-[#1B1B1B]/10 border-b border-[#2A2A2A] backdrop-blur-md shadow-lg rounded-2xl">
=======
      <div className="hidden md:block fixed top-0 w-full z-30 bg-[#1B1B1B] border-b border-[#2A2A2A]">
>>>>>>> c8b104b2d0cbb399fa2a91b411ae39982394a949
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center">
          <ul className="flex gap-6">
            {links.map((link) => {
              const path = `/${link.toLowerCase()}`;
              const isActive = location.pathname === path;
              return (
                <li key={link}>
                  <Link
                    to={path}
                    className={`px-3 py-2 font-semibold transition-colors hover:text-white ${
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Mobile navbar (bottom) */}
<<<<<<< HEAD
      <div className="md:hidden fixed bottom-2 left-1/2 -translate-x-1/2 w-[95vw] max-w-2xl z-40 bg-[#1B1B1B]/10 border border-[#2A2A2A] backdrop-blur-xl shadow-2xl rounded-2xl ring-2 ring-white/10 hover:text-white transition-all duration-300">
        <div className="flex justify-around py-3 hover:text-white">
=======
      <div className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-[#1B1B1B] border-t border-[#2A2A2A] hover:text-white">
        <div className="flex justify-around py-2 hover:text-white">
>>>>>>> c8b104b2d0cbb399fa2a91b411ae39982394a949
          {links.map((link) => {
            const path = `/${link.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <Link
                key={link}
                to={path}
                className={`px-3 py-2 font-semibold transition-colors hover:text-white ${
                  isActive ? "text-white" : "text-gray-300"
                }`}
              >
                {link}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
