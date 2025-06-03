// import React from 'react';
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Certificate from "../components/section/Certificate/Certificate";
import Profile from "../components/section/Profile/Profile";
import Projects from "../components/section/Project/Project";
import Skill from "../components/section/Skill/Skill";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Contact />
      <main>
        <section className="mb-20 border-b border-gray-300 pb-20">
          <Profile />
        </section>

        <section className="mb-20 border-b border-gray-300 pb-20">
          <Skill />
        </section>

        <section className="mb-20 border-b border-gray-300 pb-20">
          <Projects />
        </section>

        <section className="mb-20">
          <Certificate />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
