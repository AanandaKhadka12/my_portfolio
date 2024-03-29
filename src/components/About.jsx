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
          className="rounded-md md:h-[500px] sm:h-[full] flex mx-auto"
        />

        <p className="sm:py-10 sm:mx-5 md:py-0 py-5 md:text-lg sm:text-lg text-md text-justify">
          Hello, I am a Full-Stack Developer . My passion for computers reached
          its zenith during my school years. This profound interest in computer
          science drove me to delve into advanced web development and the core
          principles of programming. To further nurture my enthusiasm, I pursued
          a bachelor's degree in computer application. The comprehensive
          curriculum of my Bachelor of Computer Application laid the strong
          foundation for my skills in computer programming and database
          development. Following the completion of my bachelor's degree, I
          discovered a new fascination in full-stack programming. Consequently,
          I enrolled in Lambton College to embark on a journey into computer
          software and database development.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
