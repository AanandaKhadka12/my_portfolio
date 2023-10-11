import React from "react";
import mehhh from "../assets/AanandaKhadka.jpeg";
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
      <p className="flex justify-center mx-auto border-slate-500 border-b-2 w-[9rem] mb-10 font-pacifico font-extrabold text-3xl">
        About Me
      </p>
      <div className="max-w-[900px] grid md:grid-cols-2 mx-auto p-10">
        <img
          src={mehhh}
          alt="meeehhhhh"
          className="rounded-md md:h-[500px] sm:h-[full] flex mx-auto"
        />

        <p className="sm:py-10 sm:mx-5 md:py-0 py-5 md:text-lg sm:text-lg text-md text-justify">
          A computer science enthusiast with 1+ years of experience designing
          websites for various business. My interest in computers peaked
          throughout my time in school. My interest in computer science led me
          to study sophisticated web development and fundamental programming. I
          pursued my interest by receiving a bachelor's degree in computer
          application. My strong foundation in computer programming and database
          development comes from the extensive curriculum of my Bachelor of
          Computer Application. After my bachelor's degree, I worked as a
          front-end developer in ABS SOFT, where I got a perfect platform to
          test my skillsets. While working there, I developed an interest in
          full-stack programming, and now I am attending Lambton College to
          study computer software and database development.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
