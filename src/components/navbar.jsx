import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const links = ["About", "Resume", "Projects", "Blog", "Contact"];
  const location = useLocation();

  return (
    <nav className="fixed w-full z-30 bg-[#1B1B1B] backdrop-blur-md  shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center">
        <ul className="flex gap-2 sm:gap-4 md:gap-8">
          {links.map((link) => {
            const path = `/${link.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <li key={link} className="relative group">
                <Link
                  to={path}
                  className={`px-4 py-2 transition-colors font-semibold tracking-wide ${
                    isActive
                      ? "text-white hover:text-white"
                      : "text-white hover:text-white"
                  }`}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

