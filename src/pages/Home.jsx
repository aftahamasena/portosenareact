// import React from 'react';
import Contact from "../components/contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CertificateCarousel from "../components/section/Certificate";
import Profile from "../components/section/Profile";
import Projects from "../components/section/Project";
import SkillsSection from "../components/section/Skill";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="">
        <Contact />
        <Profile />
        <SkillsSection />
        <Projects />
        <CertificateCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
