import React from "react";
import mehhh from "../assets/meh2.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -50, translateY: -50 }}
      whileInView={{
        opacity: 1,
        translateX: 0,
        translateY: 0,
        transition: { duration: 0.3, delay: 0.1 },
      }}
      className="w-full py-10 text-slate-600 scroll-smooth mt-[5rem]"
      id="about"
    >
      <p className="flex justify-center mx-auto border-slate-500 border-b-2 w-[9rem] mb-10 font-pacifico font-extrabold md:text-3xl sm:text-2xl  text-2xl">
        About Me
      </p>
      <div className="max-w-[900px] grid md:grid-cols-2 mx-auto p-10">
        <img
          src={mehhh}
          alt="meeehhhhh"
          className="rounded-md md:h-[600px] sm:h-[full] flex mx-auto"
        />

        <p className="sm:py-10 sm:mx-5 md:py-0 py-5 md:text-lg sm:text-lg text-md text-justify">
          Full-Stack Developer passionate about creating scalable, user-focused web applications, with a solid background in computer science. My early passion for technology led to practical expertise in front-end and back-end development.

          I hold a postgraduate degree in computer software and database development in addition to a bachelor's degree in computer applications. I started out as a front-end developer, working with cross-functional teams to create high-performing, responsive interfaces. I eventually moved into full-stack development and developed my knowledge of database administration, APIs, and backend technologies.

          I’m a continuous learner who enjoys solving complex problems, improving system efficiency, and contributing to end-to-end solutions in agile environments. Open to opportunities that value clean code, innovation, and impactful development.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
