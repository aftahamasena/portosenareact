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
    setTimeout(() => setIsOpen(true), 10);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsAnimatingOut(false);
      setIsVisible(false);
    }, 400);
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
        className={`fixed right-0 top-1/2 transform -translate-y-1/2 bg-slate-700 rounded-l-full pr-1 pl-3 py-2 xl:pr-2 xl:pl-4 xl:py-4 text-white flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-full" : "translate-x-0"}
          px-2 py-2 sm:px-4 sm:py-4
          `}
        onClick={toggleContactDetails}
      >
        <FontAwesomeIcon icon={faEnvelope} className="text-md sm:text-2xl" />
      </div>

      {/* Contact Details */}
      {isVisible && (
        <div
          id="contact-details"
          className={`fixed text-lg rounded-md top-1/2 transform -translate-y-1/2 text-white flex flex-col space-y-3 sm:space-y-4 transition-all duration-400 ease-in-out z-40
    ${
      isOpen
        ? "opacity-100 pointer-events-auto translate-x-0"
        : "opacity-0 pointer-events-none translate-x-full"
    }
    right-2 sm:right-6
  `}
        >
          <a
            href="https://www.instagram.com/senafth_/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700 flex items-center justify-center hover:text-pink-500 transition-transform duration-400 ease-in-out rounded-md shadow-2xl hover:shadow-xl hover:-translate-y-1
              p-1.5 sm:p-2"
            aria-label="Instagram"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="h-5 w-5 sm:h-7 sm:w-7"
            />
          </a>
          <a
            href="mailto:muhammadaftah63@gmail.com"
            className="bg-slate-700 flex items-center justify-center hover:text-yellow-500 transition-transform duration-400 ease-in-out rounded-md shadow-lg hover:shadow-xl hover:-translate-y-1
              p-1.5 sm:p-2"
            aria-label="Email"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="h-5 w-5 sm:h-7 sm:w-7"
            />
          </a>
          <a
            href="https://github.com/aftahamasena"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700 flex items-center justify-center hover:text-gray-900 transition-transform duration-400 ease-in-out rounded-md shadow-lg hover:shadow-xl hover:-translate-y-1
              p-1.5 sm:p-2"
            aria-label="GitHub"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="h-5 w-5 sm:h-7 sm:w-7"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/amasena"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700 flex items-center justify-center hover:text-blue-400 transition-transform duration-400 ease-in-out rounded-md shadow-lg hover:shadow-xl hover:-translate-y-1
              p-1.5 sm:p-2"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-5 w-5 sm:h-7 sm:w-7"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Contact;
