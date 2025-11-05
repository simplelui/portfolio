import { Link } from "react-router-dom";
import profileimg from "../images/profile.png";

export default function SidebarDesktop() {
  return (
    <aside
      className="hidden md:flex flex-col items-center bg-[#1B1B1B] rounded-2xl p-8 w-80 min-h-[70vh] border border-[#2A2A2A] shadow-lg mt-4 h-fit"
      style={{
        position: 'fixed',
        top: '7rem', // 32px from the top
        left: '50px', // increased gap from the left (56px)
        alignSelf: 'flex-start',
        height: 'auto',
        maxHeight: '90vh',
        overflowY: 'auto',
      }}
    >
      <img
        src={profileimg}
        alt="Profile"
        className="w-48 h-48 rounded-full mb-2"
      />
      <Link
        to="/"
        className="px-4 py-2 mb-1 rounded-lg transition-colors font-bold tracking-wide text-lg text-white hover:text-black"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        Luis De Taza
      </Link>
      <span className="inline-block bg-[#232324] text-white px-4 py-2 rounded-lg font-medium mb-2 w-fit mx-auto">
        Web Developer Student
      </span>

      <div className="w-full border-t border-gray-700 my-4"></div>

      {/* Contact Info */}
      <div className="flex flex-col gap-4 w-full text-left">
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
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-6">
        <a href="#" className="text-gray-400 hover:text-[#B22222]"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="text-gray-400 hover:text-[#B22222]"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-gray-400 hover:text-[#B22222]"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-gray-400 hover:text-[#B22222]"><i className="fab fa-linkedin-in"></i></a>
        <a href="#" className="text-gray-400 hover:text-[#B22222]"><i className="fab fa-github"></i></a>
      </div>
    </aside>
  );
}
