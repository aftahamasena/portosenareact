import { useState, useEffect } from "react";

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarActive(window.scrollY > 100);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollWithOffset = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY;
      const offset = 80;
      window.scrollTo({
        top: y - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 flex justify-between items-center font-lora text-sm w-full h-[60px] min-h-[60px] px-4 sm:px-6 lg:px-36 transition-all duration-300 ${
          menuOpen
            ? "bg-transparent text-white"
            : navbarActive
            ? "bg-white text-black shadow-md"
            : "bg-white/60 text-black"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="assets/img/logo.png"
            alt="logo"
            className="rounded-full w-28 sm:w-36 md:w-40 max-w-[160px]"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
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

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-10">
          {[
            {
              label: "Profile",
              id: "profile.section",
              color: "blue-800",
              underline: "blue-600",
            },
            {
              label: "Skill",
              id: "skill.section",
              color: "green-600",
              underline: "green-600",
            },
            {
              label: "Project",
              id: "project.section",
              color: "purple-600",
              underline: "purple-600",
            },
            {
              label: "Certificate",
              id: "certi.section",
              color: "yellow-500",
              underline: "yellow-500",
            },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollWithOffset(item.id)}
              className={`group relative font-medium text-gray-800 hover:text-${item.color} transition-transform hover:-translate-y-1`}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-${item.underline} transition-all duration-300 group-hover:w-full`}
              ></span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md transition-all duration-500 p-6 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-3xl text-white bg-white/30 hover:bg-white/50 px-4 py-1 rounded-full"
          aria-label="Close menu"
        >
          ×
        </button>

        {[
          { label: "Profile", id: "profile.section", color: "blue-400" },
          { label: "Skill", id: "skill.section", color: "green-400" },
          { label: "Project", id: "project.section", color: "purple-400" },
          { label: "Certificate", id: "certi.section", color: "yellow-400" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => {
              scrollWithOffset(item.id);
              setMenuOpen(false);
            }}
            className={`text-white text-xl my-2 hover:text-${item.color} transition`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;
