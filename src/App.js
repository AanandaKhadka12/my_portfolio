import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="from-indigo-100 from-20% via-sky-100 via-80% to-emerald-10 bg-gradient-to-r w-full font-serif">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
