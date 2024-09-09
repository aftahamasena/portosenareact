import { useState, useEffect } from "react";
import "./Navbar.css"; // Include your custom CSS for the navbar

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`z-50 flex justify-between items-center font-lora text-lg w-full px-4 sm:px-6 lg:px-36 ${
        navbarActive ? "scroll-bg bg-active text-black" : "scroll-bg"
      }`}
    >
      <div className="flex items-center space-x-2 sm:space-x-4">
        <img
          src="assets/img/profilesena.jpg"
          alt="Profile Photo"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs font-medium sm:text-sm md:text-base font-merriweather text-blue-500">
          Porto
          <span className=" text-blue-700 font-gloock text-xs sm:text-sm md:text-base">
            Sena
          </span>
        </p>
      </div>

      <div className="flex items-center lg:hidden">
        <button
          id="menuToggle"
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <div className="hidden lg:flex justify-between space-x-12">
        <a href="#profile.section" className="nav-link">
          Profile
        </a>
        <a href="#skill.section" className="nav-link">
          Skill
        </a>
        <a href="#project.section" className="nav-link">
          Project
        </a>
        <a href="#certi.section" className="nav-link">
          Certificate
        </a>
      </div>

      <div
        id="mobileMenu"
        className={`fixed inset-0 ${
          menuOpen ? "show" : "hidden"
        } backdrop-blur-lg bg-black bg-opacity-70 flex flex-col items-center justify-center transition-transform duration-500`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="close-menu px-3 py-1.5 rounded-full"
        >
          ×
        </button>
        <a
          href="#profile.section"
          className="menu-item nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Profile
        </a>
        <a
          href="#skill.section"
          className="menu-item nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Skill
        </a>
        <a
          href="#project.section"
          className="menu-item nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Project
        </a>
        <a
          href="#certi.section"
          className="menu-item nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Certificate
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
