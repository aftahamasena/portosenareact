// import React from "react";
// import "tailwindcss/tailwind.css"; // Pastikan Tailwind CSS sudah di-import di proyek Anda

const skills = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    name: "Java",
  },
  {
    src: "https://w7.pngwing.com/pngs/410/100/png-transparent-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-text-thumbnail.png",
    name: "HTML5",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    name: "CSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    name: "PHP",
  },
  {
    src: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3030179.png?f=webp&w=256",
    name: "Node.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React.js",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png",
    name: "Laravel",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    name: "MySQL",
  },
  {
    src: "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
    name: "Express.js",
  },
  {
    src: "https://avatars.githubusercontent.com/u/638632?s=200&v=4",
    name: "Guzzle",
  },
  {
    src: "https://cdn.icon-icons.com/icons2/2699/PNG/512/axios_logo_icon_168545.png",
    name: "Axios",
  },
  { src: "https://cdn.worldvectorlogo.com/logos/ajax-1.svg", name: "AJAX" },
  {
    src: "https://avatars.githubusercontent.com/u/67109815?v=4&s=400",
    name: "Tailwind CSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    name: "Bootstrap",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    name: "WordPress",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFT1MO4Ln0Ynz4VKkD2EDyylsYzoVg1d8FiQ&s",
    name: "Git",
  },
  {
    src: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png",
    name: "Figma",
  },
];

const SkillCard = ({ src, name }) => (
  <div className="relative group flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img
      src={src}
      alt={`${name} Logo`}
      className="w-16 h-16 transition-transform transform group-hover:scale-110"
    />
    <div className="absolute bottom-0 left-0 right-0 text-center bg-black bg-opacity-70 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-sm font-lora">{name}</span>
    </div>
  </div>
);

const SkillsSection = () => (
  <div className="py-20 xs:py-28 sm:py-32 md:py-36 lg:py-40" id="skill.section">
    <h1 className="font-gloock mb-5 text-center xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
      Skills
    </h1>
    <div className="flex flex-col items-center">
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} src={skill.src} name={skill.name} />
        ))}
      </div>
    </div>
  </div>
);

export default SkillsSection;
