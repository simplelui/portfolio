import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const links = ["About", "Resume", "Projects", "Blog", "Contact"];
  const location = useLocation();

  return (
    <nav>
      {/* Desktop navbar (top) */}
      <div className="hidden md:block fixed top-0 w-full z-30 bg-[#1B1B1B] border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center">
          <ul className="flex gap-6">
            {links.map((link) => {
              const path = `/${link.toLowerCase()}`;
              const isActive = location.pathname === path;
              return (
                <li key={link}>
                  <Link
                    to={path}
                    className={`px-3 py-2 font-semibold transition ${
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
      <div className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-[#1B1B1B] border-t border-[#2A2A2A]">
        <div className="flex justify-around py-2">
          {links.map((link) => {
            const path = `/${link.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <Link
                key={link}
                to={path}
                className={`text-sm font-medium ${
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
