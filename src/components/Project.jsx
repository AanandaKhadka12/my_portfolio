import React from "react";
import { ProjectList } from "../ProjectList";
import { motion } from "framer-motion";

const Project = () => {
  // const { scrollYProgress } = useScroll({
  //   offset: ["0 1", "0.5 1"],
  // });
  return (
    <div className="w-full py-10 text-slate-600" id="project">
      <p className="flex justify-center mx-auto border-slate-500 border-b-2 w-[11rem] mb-10 font-pacifico font-extrabold md:text-3xl sm:text-2xl  text-2xl">
        My Projects
      </p>
      {ProjectList.map((pro, index) => {
        return (
          <div
            className="grid md:grid-cols-1 max-w-[750px] mx-auto p-5"
            key={index}
          >
            <motion.div
              // style={{
              //   scale: scrollYProgress,
              //   opacity: scrollYProgress,
              // }}
              initial={{ opacity: 0, translateX: -50, translateY: -50 }}
              whileInView={{
                opacity: 1,
                translateX: 0,
                translateY: 0,
                transition: { duration: 0.3, delay: index * 0.1 },
              }}
              className="flex md:flex-row sm:flex-row flex-col justify-center mx-auto shadow-xl rounded-lg p-3 hover:bg-white transition"
            >
              <img
                src={pro.imgsrc}
                alt="bikeProject"
                className="rounded md:w-[350px] md:h-[250px] flex mx-auto justify-center sm:w-[250px] w-[full] md:p-0 sm:p-0 p-2 
                transition  hover:translate-y-3 hover:rotate-2"
              />

              <p className="md:text-md sm:text-base md:mx-3 mx-2  text-justify">
                {pro.desc}
                <div className="my-3 md:my-5 flex flex-wrap justify-between">
                  {pro.languages.map((item, index) => (
                    <span
                      className="bg-slate-600 text-white rounded-xl p-1 px-2 my-3 text-sm"
                      key={index}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
