import { useState, useEffect } from "react";

const menuItems = [
  {
    label: "Profile",
    id: "profile.section",
    color: "text-black",
    mobilecolor: "text-white",
    underline: "bg-blue-500",
    hover: "hover:text-blue-700",
  },
  {
    label: "Skill",
    id: "skill.section",
    color: "text-black",
    mobilecolor: "text-white",
    underline: "bg-green-500",
    hover: "hover:text-green-600",
  },
  {
    label: "Project",
    id: "project.section",
    color: "text-black",
    mobilecolor: "text-white",
    underline: "bg-purple-500",
    hover: "hover:text-purple-600",
  },
  {
    label: "Certificate",
    id: "certi.section",
    color: "text-black",
    mobilecolor: "text-white",
    underline: "bg-yellow-400",
    hover: "hover:text-yellow-600",
  },
];

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
        className={`fixed top-0 left-0 right-0 z-40 w-full h-[60px] px-4 sm:px-6 md:px-10 transition-all duration-300 overflow-hidden box-border
        flex justify-between items-center font-lora text-sm ${
          menuOpen
            ? "bg-transparent text-white"
            : navbarActive
            ? "bg-white text-black shadow-md"
            : "bg-white/60 text-black backdrop-blur-sm"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center w-[100px] sm:w-[140px] md:w-[180px] max-w-full">
          <img
            src="/assets/img/logo.png"
            alt="logo"
            className="w-full h-auto object-contain"
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
        <div className="hidden lg:flex space-x-10 ">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollWithOffset(item.id)}
              className={`group relative font-medium transition-transform duration-200 transform hover:-translate-y-1 ${item.color} ${item.hover}`}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 ${item.underline} transition-all duration-300 group-hover:w-full`}
              />
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 w-screen h-screen flex flex-col items-center justify-center bg-black/80 backdrop-blur-md transition-all duration-500 p-6 overflow-hidden ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-3xl text-white bg-white/30 hover:bg-white/50 px-4 py-2 rounded-full flex items-center justify-center"
          aria-label="Close menu"
        >
          <span className="font-semibold text-xl">X</span>
        </button>

        {/* Menu Items */}
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              scrollWithOffset(item.id);
              setMenuOpen(false);
            }}
            className={`text-lg my-1 font-gloock transition-all duration-200 ${item.mobilecolor} ${item.hover}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;
