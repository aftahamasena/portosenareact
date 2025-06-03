// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 font-merriweather px-4 sm:px-6 md:px-10 lg:px-16 py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Nama & Jabatan */}
        <p className="text-base sm:text-lg md:text-xl font-semibold">
          Muhammad Aftah Amasena | Frontend Developer & Project Administrator
        </p>

        {/* Deskripsi */}
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed px-2">
          Passionate about building intuitive, responsive interfaces and
          learning through real-world projects. Always exploring new
          technologies and striving to grow every day.
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 text-xl text-gray-600">
          <a
            href="https://github.com/aftahamasena"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-900 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/amasena/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-900 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:muhammadaftah63@gmail.com"
            aria-label="Email"
            className="hover:text-gray-900 transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/senafth_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-900 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-500 pt-4">
          &copy; {new Date().getFullYear()} SenaCode. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
