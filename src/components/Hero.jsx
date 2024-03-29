import React from "react";
import myImg from "../assets/meh1.jpg";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { BrowserRouter, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Aananda Khadka", "Full-Stack Developer"],
    loop: {},
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.175 }}
      id="hero"
    >
      <div className="flex justify-center items-center text-center flex-col max-w-[1000px] mx-auto my-5 ">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.7 },
          }}
          src={myImg}
          alt="myPic"
          className="bg-transparent rounded-full h-[10rem] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1"
        />
        <div className="flex justify-center items-center font-bold">
          <motion.p className="md:text-4xl sm:text-3xl text-xl font-bold py-4 mt-5">
            Hi, I'm
          </motion.p>

          <span className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-5">
            {text}
          </span>
          <span className="md:text-4xl sm:text-3xl text-xl mt-5 font-bold text-pink-500">
            <Cursor cursorStyle=">" />
          </span>
        </div>
      </div>
      <div className="flex  items-center justify-evenly max-w-[300px] mx-auto my-10 pb-5">
        <BrowserRouter>
          <Link
            to="https://www.linkedin.com/in/aananda-khadka-364483152/"
            target="_blank"
          >
            <FaLinkedin
              size={30}
              className="text-[#0072b1] hover:scale-125 duration-150"
            />
          </Link>
          <Link to="https://github.com/AanandaKhadka12" target="_blank">
            {" "}
            <FaGithub
              size={30}
              className="text-[#333] hover:scale-125 duration-150"
            />
          </Link>
          <Link to="https://www.instagram.com/_kaley_bhai_/" target="_blank">
            <FaInstagramSquare
              size={30}
              className="bg-gradient-to-r from-purple-600 to-pink-400 text-gray-200 hover:scale-125 duration-150"
            />
          </Link>
        </BrowserRouter>
      </div>
    </motion.div>
  );
};

export default Hero;
