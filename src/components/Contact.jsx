import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest("#contact-component") &&
        !event.target.closest("#contact-details")
      ) {
        if (isOpen) {
          handleClose();
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const handleOpen = () => {
    setIsVisible(true);
    setTimeout(() => setIsOpen(true), 10); // delay sedikit supaya class animasi kebaca
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsAnimatingOut(false);
      setIsVisible(false);
    }, 400); // sesuaikan dengan durasi CSS
  };

  const toggleContactDetails = () => {
    if (isOpen) {
      handleClose();
    } else {
      handleOpen();
    }
  };

  return (
    <div>
      {/* Contact Button */}
      <div
        id="contact-component"
        className={` fixed right-0 top-1/2 transform -translate-y-1/2 bg-slate-700 rounded-l-full pr-2 pl-4 py-4 text-white flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-full" : "translate-x-0"
        }`}
        onClick={toggleContactDetails}
      >
        <FontAwesomeIcon
          icon={isOpen ? faEnvelope : faEnvelope}
          className="text-2xl"
        />
      </div>

      {/* Contact Details */}
      {isVisible && (
        <div
          id="contact-details"
          className={`fixed text-lg rounded-md right-6 top-1/2 transform -translate-y-1/2 text-white flex flex-col space-y-4 transition-all duration-400 ease-in-out z-40 ${
            isOpen
              ? "opacity-100 pointer-events-auto translate-x-0"
              : "opacity-0 pointer-events-none translate-x-full"
          }`}
        >
          <a
            href="https://www.instagram.com/senafth_/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700 flex items-center justify-center text-xl hover:text-pink-500 transition-transform duration-400 ease-in-out p-2 rounded-md shadow-2xl hover:shadow-xl hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-7 w-7" />
          </a>
          <a
            href="mailto:muhammadaftah63@gmail.com"
            className="bg-slate-700 flex items-center justify-center text-xl hover:text-yellow-500 transition-transform duration-400 ease-in-out p-2 rounded-md shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-7 w-7" />
          </a>
          <a
            href="https://github.com/aftahamasena"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700 flex items-center justify-center text-xl hover:text-gray-900 transition-transform duration-400 ease-in-out p-2 rounded-md shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faGithub} className="h-7 w-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/amasena"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700 flex items-center justify-center text-xl hover:text-blue-400 transition-transform duration-400 ease-in-out p-2 rounded-md shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-7 w-7" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Contact;
