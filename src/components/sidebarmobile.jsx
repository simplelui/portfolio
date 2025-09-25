
import { useState } from "react";
import profileimg from "../images/profile.png";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function SidebarMobile() {
  const [showContact, setShowContact] = useState(false);
  return (
    <motion.div
  className="md:hidden fixed top-6 left-1/5 -translate-x-1/2 w-[92vw] max-w-2xl z-50 bg-[#1B1B1B]/50   border border-[#2A2A2A] backdrop-blur-xl shadow-2xl rounded-2xl ring-2 ring-white/10 px-6 py-4 flex flex-col items-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 12 }}
    >
      <img
        src={profileimg}
        alt="Profile"
        className="w-16 h-16 rounded-full mb-2 shadow"
      />
      <h2 className="text-lg font-bold tracking-wide">Luis De Taza</h2>
      <span className="text-xs text-gray-300 mb-2">Web Developer Student</span>

      <button
        onClick={() => setShowContact(!showContact)}
        className="mt-2 w-full bg-[#232324]/80 text-white py-2 rounded-lg flex justify-between items-center px-4 shadow hover:bg-[#232324]/90 transition-colors"
      >
        <span>Contact Info</span>
        <span className="text-lg">{showContact ? "▲" : "▼"}</span>
      </button>

      <AnimatePresence>
        {showContact && (
          <motion.div
            className="mt-4 flex flex-col gap-4 w-full text-left"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="bg-[#232324] p-2 rounded-lg">
                <svg width="20" height="20" fill="none" stroke="currentColor" className="text-white">
                  <rect x="2" y="5" width="16" height="10" rx="2" strokeWidth="1.5"/>
                  <path d="M2 5l8 7 8-7" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
              <div>
                <div className="text-xs text-gray-400">EMAIL</div>
                <div className="text-sm truncate">luisdetaza.dev@gmail.com</div>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-3">
              <span className="bg-[#232324] p-2 rounded-lg">
                <svg width="20" height="20" fill="none" stroke="currentColor" className="text-white">
                  <path d="M17 13.5V16a1 1 0 0 1-1 1c-7.18 0-13-5.82-13-13a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 0.77c0.22 1.02 0.56 2.01 1 2.94a1 1 0 0 1-0.23 1.09l-1.1 1.1a11.05 11.05 0 0 0 5.02 5.02l1.1-1.1a1 1 0 0 1 1.09-0.23c0.93 0.44 1.92 0.78 2.94 1a1 1 0 0 1 0.77 1z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <div className="text-xs text-gray-400">PHONE</div>
                <div className="text-sm">09264682796</div>
              </div>
            </div>
            {/* Birthday */}
            <div className="flex items-center gap-3">
              <span className="bg-[#232324] p-2 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" className="text-white">
                  <rect x="7" y="9" width="6" height="7" rx="2" strokeWidth="1.5"/>
                  <path d="M10 9V5.5" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M10 5.5c0-1 .5-1.5 1-2s-1-1-1 0c0 1-.5 1.5-1 2s1 1 1 0z" strokeWidth="1.5" strokeLinecap="round" fill="white"/>
                </svg>
              </span>
              <div>
                <div className="text-xs text-gray-400">BIRTHDAY</div>
                <div className="text-sm">October 10, 2004</div>
              </div>
            </div>
            {/* Location */}
            <div className="flex items-center gap-3">
              <span className="bg-[#232324] p-2 rounded-lg">
                <svg width="20" height="20" fill="none" stroke="currentColor" className="text-white">
                  <path d="M10 18c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8Z" strokeWidth="1.5"/>
                  <path d="M10 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v3.5" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
              <div>
                <div className="text-xs text-gray-400">LOCATION</div>
                <div className="text-sm">Mandaluyong City</div>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-[#B22222]"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-gray-400 hover:text-[#B22222]"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-[#B22222]"><i className="fab fa-github"></i></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
