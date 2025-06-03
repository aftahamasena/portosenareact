import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skills from "../../../data/skillData";

const getRandomRotate = () => Math.floor(Math.random() * 30) - 15;

const SkillCard = ({ src, name, style, cardSize, isMobile }) => {
  const [hover, setHover] = useState(false);

  const baseStyle = {
    width: isMobile ? "auto" : cardSize,
    height: isMobile ? "auto" : cardSize,
    transform: hover
      ? "rotate(0deg) scale(1.05)"
      : `rotate(${style.rotate}deg) scale(1)`,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    zIndex: hover ? 10 : 1,
    boxShadow: hover
      ? "0 15px 25px rgba(0,0,0,0.2), 0 10px 10px rgba(0,0,0,0.1)"
      : "0 6px 12px rgba(0,0,0,0.1)",
    borderRadius: "16px",
    border: "1px solid #eee",
    backgroundColor: "white",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px",
    margin: "auto",
    position: "relative",
  };

  return (
    <div
      style={baseStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={src}
        alt={`${name} Logo`}
        className="transition-transform"
        style={{
          width: isMobile ? "56px" : "80px",
          height: isMobile ? "56px" : "80px",
          objectFit: "contain",
          transform: hover ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.3s ease",
          userSelect: "none",
        }}
      />

      <AnimatePresence>
        {hover && !isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.85 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              bottom: "100%",
              marginBottom: "6px",
              backgroundColor: "rgba(0, 0, 0, 0.85)",
              color: "white",
              padding: "6px 10px",
              borderRadius: "8px",
              fontSize: "0.9rem",
              fontWeight: "600",
              whiteSpace: "nowrap",
              userSelect: "none",
              pointerEvents: "none",
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              zIndex: 20,
            }}
          >
            {name}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SkillsSection = () => {
  const containerRef = useRef(null);
  const [cardSize, setCardSize] = useState(120);
  const [isMobile, setIsMobile] = useState(false);
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      setIsMobile(width < 768);

      if (width >= 1536) setCardSize(110);
      else if (width >= 1280) setCardSize(100);
      else if (width >= 1024) setCardSize(90);
      else if (width >= 640) setCardSize(80);
      else setCardSize(70);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const newStyles = skills.map(() => ({ rotate: getRandomRotate() }));
    setStyles(newStyles);
  }, [cardSize, isMobile]);

  return (
    <div className="w-full flex flex-col items-center px-20 lg:pb-10" id="skill.section">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-red-700 font-gloock text-4xl sm:text-5xl md:text-6xl mb-3">
          My Skills
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto font-light">
          The tools and technologies I use to build and solve.
        </p>
      </motion.div>

      <div
        ref={containerRef}
        className="
        
          w-full max-w-[1200px]
          grid
          xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7
          gap-6
          sm:gap-7
          md:gap-8
          lg:gap-10
          justify-center
        "
      >
        {skills.map((skill, i) => (
          <SkillCard
            key={skill.name}
            src={skill.src}
            name={skill.name}
            cardSize={cardSize}
            isMobile={isMobile}
            style={styles[i] || { rotate: 0 }}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
