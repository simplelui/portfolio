import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Resume from "./components/resume";
import Projects from "./components/projects";
import Blog from "./components/blog";
import Contact from "./components/contact";
import SidebarDesktop from "./components/sidebar";
import SidebarMobile from "./components/sidebarmobile";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="bg-[#141414] text-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Layout: Sidebar + Main */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto pt-28 px-4 gap-8">
        {/* Mobile Sidebar should be on top in flex-col */}
        <SidebarMobile />

        {/* Desktop Sidebar */}
        <SidebarDesktop />

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
