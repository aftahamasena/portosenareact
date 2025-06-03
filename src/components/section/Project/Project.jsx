import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import projects from "../../../data/projectData";

export default function CreativeProjects() {
  const defaultVisible = 3;
  const [visibleCount, setVisibleCount] = useState(defaultVisible);

  const handleViewMore = () => setVisibleCount(projects.length);
  const handleViewLess = () => {
    setVisibleCount(defaultVisible);
    const section = document.getElementById("project.section");
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      className="mx-auto max-w-7xl w-full flex flex-col items-center px-4 sm:px-6 lg:px-8"
      id="project.section"
    >
      {/* Title */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-green-700 font-gloock text-4xl sm:text-5xl md:text-6xl mb-3">
          My Projects
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto font-light">
          What I've built through passion, learning, and curiosity
        </p>
      </motion.div>

      {/* Projects */}
      <div className="space-y-32 w-full">
        {projects.slice(0, visibleCount).map((project, i) => (
          <CreativeProjectItem
            key={project.title}
            project={project}
            reverse={i % 2 !== 0}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="w-full self-start mt-20 flex gap-4 px-4 sm:px-6 lg:px-10">
        {visibleCount < projects.length && (
          <ViewMoreButton onClick={handleViewMore} />
        )}
        {visibleCount > defaultVisible && (
          <ViewLessButton onClick={handleViewLess} />
        )}
      </div>
    </div>
  );
}

function ViewMoreButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="
        group
        font-merriweather
        bg-white
        border border-green-700 
        rounded-full
        px-5
        py-2.5
        text-sm sm:text-base
        text-green-700
        relative
        cursor-pointer
        hover:bg-green-700
        hover:text-white
        transition-all
        duration-300
        whitespace-nowrap
      "
    >
      View More Projects &gt;&gt;
    </button>
  );
}

function ViewLessButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="
        group
        font-merriweather
        bg-white
        border border-gray-500 
        rounded-full
        px-5
        py-2.5
        text-sm sm:text-base
        text-gray-800
        relative
        cursor-pointer
        hover:bg-gray-800
        hover:text-white
        transition-all
        duration-300
        whitespace-nowrap
      "
    >
      See Less Projects &lt;&lt;
    </button>
  );
}

function CreativeProjectItem({ project, reverse }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    if (inView) controls.start("visible");

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  function truncateText(text, maxWords = 200) {
    const words = text.split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ");
  }

  const isMobile = windowWidth < 768;
  const fullText = project.deskripsi;
  const truncatedText = truncateText(fullText, 200);
  const needsTruncate = fullText.split(" ").length > 200;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={`flex flex-col md:flex-row items-stretch md:items-stretch ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-8 md:gap-14`}
    >
      {/* Image */}
      <motion.div
        variants={imageVariants}
        className="relative w-full md:w-1/2 rounded-xl overflow-hidden cursor-default"
        style={{ aspectRatio: "16 / 9" }}
      >
        <img
          src={project.img}
          alt={project.title}
          className={`w-full h-full object-cover rounded-xl drop-shadow-sm ${
            isMobile ? "max-h-[180px]" : "max-h-[320px]"
          }`}
          draggable={false}
          loading="lazy"
        />
      </motion.div>

      {/* Content */}
      <div className="md:w-1/2 max-w-xl flex flex-col justify-between px-6 sm:px-8 md:px-0">
        <div
          className={`space-y-2 sm:space-y-3 ${
            isMobile ? "text-center" : "text-left"
          }`}
        >
          <h2
            className={`tracking-tight text-gray-900 select-text font-gloock leading-tight ${
              isMobile ? "text-2xl sm:text-3xl" : "text-5xl"
            }`}
          >
            {project.title}
          </h2>
          <p
            className={`font-medium tracking-wide font-merriweather ${
              isMobile ? "text-xs text-gray-700" : "text-base text-gray-800"
            }`}
          >
            <span className="font-normal">{project.role}</span>
          </p>
          <div
            className={`flex flex-wrap gap-2 justify-center md:justify-start ${
              isMobile ? "text-xs" : "text-sm"
            }`}
          >
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="bg-gray-200 font-merriweather text-gray-700 px-2 py-0.5 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Deskripsi dengan See More diakhir teks */}
          <p
            className={`mt-3 text-gray-700 leading-relaxed font-merriweather ${
              isMobile ? "text-sm" : "text-base"
            } text-justify`}
          >
            {isMobile && !isExpanded && needsTruncate ? (
              <>
                {truncatedText}
                <span
                  onClick={() => setIsExpanded(true)}
                  className="text-green-700 font-semibold underline cursor-pointer ml-1"
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") setIsExpanded(true);
                  }}
                >
                  ...See More
                </span>
              </>
            ) : (
              <>
                {fullText}
                {isMobile && needsTruncate && (
                  <span
                    onClick={() => setIsExpanded(false)}
                    className="text-green-700 font-semibold underline cursor-pointer ml-1"
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") setIsExpanded(false);
                    }}
                  >
                    See Less
                  </span>
                )}
              </>
            )}
          </p>
        </div>

        {/* Links */}
        <div
          className={`mt-6 flex gap-5 justify-center md:justify-start ${
            isMobile ? "text-xs" : "text-sm"
          }`}
        >
          {project.github && (
            <button
              onClick={() => window.open(project.github, "_blank")}
              className="group relative text-gray-900 font-semibold cursor-pointer select-none font-merriweather hover:-translate-y-1 duration-300"
              aria-label={`View ${project.title} code on GitHub`}
              type="button"
            >
              View Code on GitHub
              <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-gray-900 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          )}
          {project.doc && (
            <button
              onClick={() => window.open(project.doc, "_blank")}
              className="group relative text-gray-900 font-semibold cursor-pointer select-none font-merriweather hover:-translate-y-1 duration-300"
              aria-label={`View ${project.title} documentation`}
              type="button"
            >
              View Documentation
              <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-gray-900 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
