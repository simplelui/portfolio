
import { useState } from "react";
import profileimg from "../images/profile.png";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";


export default function SidebarMobile() {
  const [showContact, setShowContact] = useState(false);
  return (
    <motion.div
      className="md:hidden fixed top-3 left-1/5 -translate-x-1/2 w-[92vw] max-w-xl z-30 bg-gradient-to-br from-[#232324]/80 via-[#1B1B1B]/70 to-[#232324]/80 border border-[#232324] backdrop-blur-2xl shadow-2xl rounded-2xl px-5 py-4 flex flex-col items-center"
      style={{ marginBottom: "env(safe-area-inset-bottom, 0)" }}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
    >
      <img
        src={profileimg}
        alt="Profile"
        className="w-14 h-14 rounded-full mb-1 shadow-lg border-2 border-[#232324]"
        style={{ objectFit: 'cover' }}
      />
      <h2 className="text-base font-semibold tracking-wide mt-1">Luis De Taza</h2>
      <span className="text-xs text-gray-400 mb-1">Web Developer Student</span>

      <button
        onClick={() => setShowContact(!showContact)}
        className="mt-2 w-10 h-10 flex items-center justify-center rounded-full border border-white bg-[#232324]/80 text-white shadow hover:bg-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Show contact info"
      >
        <svg width="22" height="22" fill="none" stroke="currentColor" className={`transition-transform ${showContact ? 'rotate-180' : ''}`}> 
          <path d="M6 9l5 5 5-5" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <AnimatePresence>
        {showContact && (
          <motion.div
            className="mt-3 flex flex-col gap-2 w-full text-left items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
          >
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs mx-auto">
              {/* Email */}
              <a href="mailto:luisdetaza.dev@gmail.com" className="group flex flex-col items-center text-gray-400 hover:text-[#B22222] text-xs">
                <span className="bg-[#232324] p-2 rounded-full mb-1">
                  <svg width="18" height="18" fill="none" stroke="currentColor" className="text-white">
                    <rect x="2" y="5" width="14" height="8" rx="2" strokeWidth="1.3"/>
                    <path d="M2 5l7 6 7-6" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </span>
                luisdetaza.dev@gmail.com
              </a>
              {/* Phone */}
              <a href="tel:09264682796" className="group flex flex-col items-center text-gray-400 hover:text-[#B22222] text-xs">
                <span className="bg-[#232324] p-2 rounded-full mb-1">
                  <svg width="18" height="18" fill="none" stroke="currentColor" className="text-white">
                    <path d="M15 12.5V15a1 1 0 0 1-1 1c-5.5 0-10-4.5-10-10a1 1 0 0 1 1-1h2a1 1 0 0 1 1 .7c.18.8.46 1.6.8 2.3a1 1 0 0 1-.18 1.1l-.9.9a8.5 8.5 0 0 0 4.1 4.1l.9-.9a1 1 0 0 1 1.1-.18c.7.34 1.5.62 2.3.8a1 1 0 0 1 .7 1z" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                09264682796
              </a>
              {/* Birthday */}
              <span className="group flex flex-col items-center text-gray-400 text-xs cursor-default">
                <span className="bg-[#232324] p-2 rounded-full mb-1">
                  <svg width="18" height="18" fill="none" stroke="currentColor" className="text-white">
                    <path d="M4 10v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4" strokeWidth="1.3"/>
                    <rect x="3" y="6" width="12" height="4" rx="2" strokeWidth="1.3"/>
                    <circle cx="9" cy="9" r="1" fill="currentColor"/>
                  </svg>
                </span>
                10/10/2004
              </span>
              {/* Location */}
              <span className="group flex flex-col items-center text-gray-400 text-xs cursor-default">
                <span className="bg-[#232324] p-2 rounded-full mb-1">
                  <svg width="18" height="18" fill="none" stroke="currentColor" className="text-white">
                    <path d="M9 16c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6Z" strokeWidth="1.3"/>
                    <circle cx="9" cy="10" r="2" strokeWidth="1.3"/>
                  </svg>
                </span>
                Mandaluyong City
              </span>
            </div>
            <div className="flex gap-4 mt-2 justify-center">
              <a href="#" className="text-gray-400 hover:text-[#B22222] text-lg" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-[#B22222] text-lg" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-[#B22222] text-lg" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-[#B22222] text-lg" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-gray-400 hover:text-[#B22222] text-lg" aria-label="GitHub"><i className="fab fa-github"></i></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
