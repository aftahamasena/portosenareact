import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest("#contact-component") &&
        !event.target.closest("#contact-details")
      ) {
        if (isOpen) {
          toggleContactDetails();
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const toggleContactDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        id="contact-component"
        className={`fixed right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 rounded-l-full p-2 text-white flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-full" : "translate-x-0"
        }`}
        onClick={toggleContactDetails}
      >
        <FontAwesomeIcon
          icon={isOpen ? faChevronLeft : faChevronRight}
          className="text-2xl"
        />
      </div>

      <div
        id="contact-details"
        className={`fixed text-lg rounded-md right-6 top-1/2 transform -translate-y-1/2 text-white flex flex-col space-y-4 opacity-0 pointer-events-none transition-transform duration-400 ease-in-out z-40 ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none translate-x-full"
        }`}
      >
        <a
          href="https://www.instagram.com/senafth_/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 contact-item flex items-center justify-center text-xl hover:text-pink-500 transition-transform duration-400 ease-in-out p-2 rounded-md shadow-2xl hover:shadow-xl hover:-translate-y-1"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="mailto:muhammadaftah63@gmail.com"
          className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 contact-item flex items-center justify-center text-xl hover:text-yellow-500 transition-transform duration-400 ease-in-out p-2 rounded-md shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://github.com/aftahamasena"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 contact-item flex items-center justify-center text-xl hover:text-gray-900 transition-transform duration-400 ease-in-out p-2 rounded-md shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-aftah-amasena-138920280"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 contact-item flex items-center justify-center text-xl hover:text-blue-400 transition-transform duration-400 ease-in-out p-2 rounded-md shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
