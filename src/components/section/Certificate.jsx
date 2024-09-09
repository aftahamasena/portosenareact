import { useState, useEffect, useRef } from "react";
import "./Certificate.css"; // Pastikan Anda membuat file CSS ini

const certificates = [
  {
    img: "assets/img/certi1.1.jpg",
    alt: "Slide 1",
    description: "Certificate 1.1 : Javascript specialist - Certiport",
    url: "https://drive.google.com/file/d/1pI5Y-W21RHyOquFl3O6b38257MRpgEnZ/view?usp=drive_link",
  },
  {
    img: "assets/img/certi1.2.png",
    alt: "Slide 2",
    description: "Certificate 1.2 : Javascript specialist - Certiport",
    url: "https://drive.google.com/file/d/1em0NdFvOajbvLTqPPLgk6P5XswG_vxnm/view?usp=drive_link",
  },
  {
    img: "assets/img/certi2.1.png",
    alt: "Slide 3",
    description: "Certificate 2.1 : Wordpress developer - Jagoan Hosting",
    url: "https://drive.google.com/file/d/1NONSAoVgVbCzDvlZhh8kWIXa6iGumiRX/view?usp=drive_link",
  },
  {
    img: "assets/img/certi2.2.png",
    alt: "Slide 4",
    description: "Certificate 2.2 : Wordpress developer - Jagoan Hosting",
    url: "https://drive.google.com/file/d/1NONSAoVgVbCzDvlZhh8kWIXa6iGumiRX/view?usp=drive_link",
  },
  {
    img: "assets/img/certi3.png",
    alt: "Slide 5",
    description:
      "Certificate 3 : Cyber security awareness - Yayasan Pendidikan Telkom",
    url: "https://drive.google.com/file/d/1IGDcByemNZ3ftxQG-KgURNo-G2xWhPAf/view?usp=drive_link",
  },
  {
    img: "assets/img/certi4.png",
    alt: "Slide 6",
    description:
      "Certificate 4 : Gerakan nasional 1000 startup digital - Kominfo",
    url: "https://drive.google.com/file/d/1h9O5Ocqs_CBKfrD3azWXKC4nR1Y7_yKw/view?usp=drive_link",
  },
];

const CertificateCarousel = () => {
  const [index, setIndex] = useState(0);
  const carouselWrapper = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Set interval for auto-scroll
    intervalRef.current = setInterval(nextSlide, 2000);
    return () => clearInterval(intervalRef.current); // Clean up on unmount
  }, [index]);

  const showSlide = (i) => {
    if (i >= certificates.length) setIndex(0);
    else if (i < 0) setIndex(certificates.length - 1);
    else setIndex(i);
  };

  const nextSlide = () => {
    showSlide(index + 1);
  };

  const goToSlide = (i) => {
    setIndex(i);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 2000); // Restart auto-scroll
  };

  const updateBar = () => {
    const bars = document.querySelectorAll(".carousel-bar div");
    bars.forEach((bar, i) => {
      bar.classList.toggle("active", i === index);
    });
  };

  useEffect(() => {
    updateBar();
  }, [index]);

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="pt-20 pb-40" id="certi.section">
      <h1 className="font-gloock text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-5 md:mb-6 lg:mb-7 text-center">
        Certificate
      </h1>
      <div className="relative w-full xs:w-4/5 sm:w-4/5 md:w-4/5 lg:w-3/5 h-[150px] xs:h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden mx-auto rounded-lg carousel-container">
        <div
          className="flex w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
          ref={carouselWrapper}
        >
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="flex-none w-full h-full bg-black flex justify-center items-center carousel-item cursor-pointer"
              onClick={() => handleClick(cert.url)}
            >
              <img
                src={cert.img}
                alt={cert.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black/70 text-white p-2">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-center">
                  <span className="">
                    {cert.description.split(" : ")[0]} :{" "}
                  </span>
                  {cert.description.split(" : ")[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-2 carousel-bar">
        {certificates.map((_, i) => (
          <div
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 xs:h-3 sm:h-3 md:h-3 lg:h-3 w-2 xs:w-3 sm:w-3 md:w-3 lg:w-3 bg-gray-400 mx-1 rounded-full cursor-pointer ${
              index === i ? "bg-gray-600" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CertificateCarousel;
