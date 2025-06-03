import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import certificates from "../../../data/certificateData";

const VISIBLE_CARDS = 5;

export default function UniqueCertificateCarousel() {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % certificates.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getIndex = (i) => (i + certificates.length) % certificates.length;

  // Ukuran dan spacing card berdasarkan lebar layar (responsive)
  const dynamicCardSize = (() => {
    if (windowWidth < 480) return { width: 160, height: 210, spacing: 120 };
    if (windowWidth < 768) return { width: 200, height: 270, spacing: 150 };
    if (windowWidth < 1024) return { width: 240, height: 320, spacing: 180 };
    return { width: 280, height: 360, spacing: 220 };
  })();

  const dynamicPositions = [
    {
      x: -2 * dynamicCardSize.spacing,
      rotate: -25,
      scale: 0.6,
      zIndex: 0,
      opacity: 0.3,
      filter: "brightness(0.5)",
    },
    {
      x: -dynamicCardSize.spacing,
      rotate: -10,
      scale: 0.8,
      zIndex: 1,
      opacity: 0.6,
      filter: "brightness(0.7)",
    },
    {
      x: 0,
      rotate: 0,
      scale: 1,
      zIndex: 3,
      opacity: 1,
      filter: "brightness(1)",
    },
    {
      x: dynamicCardSize.spacing,
      rotate: 10,
      scale: 0.8,
      zIndex: 1,
      opacity: 0.6,
      filter: "brightness(0.7)",
    },
    {
      x: 2 * dynamicCardSize.spacing,
      rotate: 25,
      scale: 0.6,
      zIndex: 0,
      opacity: 0.3,
      filter: "brightness(0.5)",
    },
  ];

  const handleClick = (posIndex, url) => {
    if (posIndex === 2) {
      window.open(url, "_blank");
    }
  };

  return (
    <section
      className="relative w-full py-8 px-5 sm:px-5 md:px-16 lg:px-24 xl:px-32 max-w-[calc(100%-40px)] mx-auto"
      id="certi.section"
      aria-label="Certificate Carousel Section"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Title */}
        <motion.div
          className="text-center mb-10 px-2 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sky-700 font-gloock text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 leading-tight">
            My Certificates
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            A curated showcase of the achievements and skills I've earned along
            the way.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative flex justify-center items-center overflow-visible"
          style={{ height: dynamicCardSize.height + 50 }} // Extra space for hover scaling
        >
          {Array(VISIBLE_CARDS)
            .fill(0)
            .map((_, i) => {
              const certIndex = getIndex(
                index + i - Math.floor(VISIBLE_CARDS / 2)
              );
              const cert = certificates[certIndex];
              const pos = dynamicPositions[i];

              return (
                <motion.div
                  key={cert.url}
                  onClick={() => handleClick(i, cert.url)}
                  className="absolute rounded-xl shadow-2xl border border-gray-200 bg-white overflow-hidden select-none"
                  style={{
                    zIndex: pos.zIndex,
                    width: dynamicCardSize.width,
                    height: dynamicCardSize.height,
                    cursor: i === 2 ? "pointer" : "default",
                    filter: pos.filter,
                    userSelect: "none",
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    x: pos.x,
                    rotate: pos.rotate,
                  }}
                  animate={{
                    x: pos.x,
                    rotate: pos.rotate,
                    scale: pos.scale,
                    opacity: pos.opacity,
                    transition: { duration: 0.4, ease: "easeInOut" },
                  }}
                  whileHover={
                    i === 2
                      ? {
                          scale: 1.1,
                          filter: "brightness(1.1)",
                          zIndex: 10,
                          rotate: 0,
                          transition: { duration: 0.2 },
                        }
                      : {}
                  }
                  aria-label={`Certificate: ${
                    cert.description.split(" : ")[0]
                  }`}
                  role="button"
                  tabIndex={i === 2 ? 0 : -1}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && i === 2) handleClick(i, cert.url);
                  }}
                >
                  <img
                    src={cert.img}
                    alt={cert.alt}
                    className="w-full object-cover rounded-t-xl"
                    style={{ height: dynamicCardSize.height * 0.65 }}
                    draggable={false}
                    loading="lazy"
                  />
                  <div className="p-3 sm:p-4 text-center flex flex-col justify-center h-[35%] font-merriweather">
                    <p className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">
                      {cert.description.split(" : ")[0]}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 mt-1 leading-snug">
                      {cert.description.split(" : ")[1]}
                    </p>
                  </div>
                </motion.div>
              );
            })}
        </div>

        {/* Pagination */}
        <nav
          className="flex justify-center mt-10 gap-2 flex-wrap"
          aria-label="Certificate pagination"
        >
          {certificates.map((_, i) => (
            <motion.button
              whileTap={{ scale: 1.2 }}
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                i === index ? "bg-sky-700 w-8" : "bg-gray-300 w-4"
              }`}
              tabIndex={0}
              type="button"
            />
          ))}
        </nav>
      </div>
    </section>
  );
}
