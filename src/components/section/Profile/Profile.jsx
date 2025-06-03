import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 70,
    },
  }),
};

const Profile = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center pt-10 sm:pt-14 md:pt-20 lg:pt-16 px-4 sm:px-6 md:px-10 overflow-hidden"
      id="profile.section"
    >
      <motion.div
        className="text-center w-full max-w-7xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Nama */}
        <motion.p
          className="relative z-10 pb-1 text-sm xs:text-base sm:text-lg md:text-xl lg:text-6xl font-gloock"
          custom={0}
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Muhammad Aftah Amasena
        </motion.p>

        {/* Title */}
        <motion.h1
          className="relative z-10 font-gloock text-base xs:text-lg sm:text-2xl md:text-4xl lg:text-6xl mb-4 md:mb-6 leading-snug md:leading-tight"
          custom={1}
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {isDesktop ? (
            <>
              <motion.span
                whileHover={{
                  scale: 1.15,
                  rotate: -3,
                  color: "#FACC15",
                  textShadow:
                    "0 0 10px #FACC15, 0 0 20px #FACC15, 0 0 30px #FACC15",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block text-yellow-400 cursor-default select-none"
              >
                Full-stack Website
              </motion.span>
              <br />
              <motion.span
                whileHover={{
                  scale: 1.15,
                  rotate: 3,
                  color: "#34D399",
                  textShadow:
                    "0 0 10px #34D399, 0 0 20px #34D399, 0 0 30px #34D399",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block text-green-400 cursor-default select-none"
              >
                Developer
              </motion.span>
            </>
          ) : (
            <>
              <span className="inline-block text-slate-800 cursor-default select-none">
                Full-stack Website
              </span>
              <br />
              <span className="inline-block text-slate-800 cursor-default select-none">
                Developer
              </span>
            </>
          )}
        </motion.h1>

        {/* Gambar Profil */}
        <motion.div
          className="relative z-0 -mt-10 sm:-mt-14 md:-mt-20 w-40 sm:w-52 md:w-64 lg:w-80 mx-auto h-auto"
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <img
            src="assets/img/profilesena.png"
            alt="Profile"
            className="w-full h-auto object-cover"
            draggable={false}
          />
        </motion.div>

        {/* Deskripsi */}
        <motion.p
          className="relative z-10 pt-3 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl max-w-[90%] sm:max-w-xl md:max-w-2xl mx-auto font-merriweather text-slate-700 text-center"
          custom={2}
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          ˗ˏˋ With experience in developing both frontend and backend, I am
          capable of building websites that are not only visually appealing but
          also functionally robust ´ˎ˗
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Profile;
