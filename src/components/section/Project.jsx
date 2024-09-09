import "./Project.css";

// ProjectCard Component
const ProjectCard = ({ project }) => (
  <div className="relative group project-card border border-gray-200 rounded-lg shadow-lg bg-white">
    <div className="overflow-hidden rounded-t-lg">
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-64 object-cover"
      />
    </div>
    <div className="-mt-7 absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center p-6 text-white project-card-content rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">{project.title}</h2>
      {project.link && (
        <a
          href={project.link}
          className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 ease-in-out"
        >
          View on GitHub
        </a>
      )}
    </div>
    <div className="tech-icons flex justify-center space-x-4 bg-gray-100 p-4 rounded-b-lg">
      {project.tech.map((techSrc, idx) => (
        <img
          key={idx}
          src={techSrc}
          alt="Technology Logo"
          className="w-8 h-8"
        />
      ))}
    </div>
  </div>
);

// Projects Component
const Projects = () => {
  const projects = [
    {
      img: "assets/img/work11.png",
      title: "Portfolio Website",
      link: "https://github.com/aftahamasena/portosena.git",
      tech: [
        "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://avatars.githubusercontent.com/u/67109815?v=4&s=400",
      ],
    },
    {
      img: "assets/img/work7.png",
      title: "Full Stack Library Website",
      link: "https://github.com/aftahamasena/libraryweb_onprogress.git",
      tech: [
        "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        "https://avatars.githubusercontent.com/u/638632?s=200&v=4",
        "https://avatars.githubusercontent.com/u/67109815?v=4&s=400",
      ],
    },
    {
      img: "assets/img/work8.png",
      title: "Coffee Shop Front-end",
      link: "https://github.com/aftahamasena/libraryweb_onprogress.git",
      tech: [
        "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.icon-icons.com/icons2/2699/PNG/512/axios_logo_icon_168545.png",
        "https://avatars.githubusercontent.com/u/67109815?v=4&s=400",
      ],
    },
    {
      img: "assets/img/work5.png",
      title: "Bookstore Admin Mode",
      link: "https://github.com/aftahamasena/be_caffe.git",
      tech: [
        "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3030179.png?f=webp&w=256",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      ],
    },
    {
      img: "assets/img/work13.png",
      title: "Outfit Preview WordPress Elementor",
      tech: [
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png",
      ],
    },
    {
      img: "assets/img/work14.png",
      title: "Fashion Brand Mockup",
      tech: [
        "https://cdn.iconscout.com/icon/free/png-256/free-figma-logo-2856039-2376786.png",
      ],
    },
  ];

  return (
    <div
      className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-20 py-20"
      id="project.section"
    >
      <div className="pt-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-black mb-8 font-gloock">
          My Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
