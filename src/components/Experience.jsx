import React from "react";
import { Expe } from "../ProjectList";
import { IoSchoolOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="w-full py-10 text-slate-600" id="experience">
      <p className="flex justify-center mx-auto border-slate-500 border-b-2 w-[14rem] mb-10 font-pacifico font-extrabold text-3xl">
        My Experience
      </p>
      <div className="grid grid-cols-1 max-w-[900px] mx-auto p-5">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden md:p-10 sm:p-10 h-full">
            <div
              className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
              style={{ left: "50%" }}
            ></div>

            {Expe.map((item, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                  whileInView={{
                    opacity: 1,
                    translateX: 0,
                    translateY: 0,
                    transition: { duration: 0.5, delay: index * 0.2 },
                  }}
                  className={`mb-8 flex ${item.flex} justify-between items-center w-full`}
                  key={index}
                >
                  <div className={`order-1 w-5/12 flex ${item.justify}`}>
                    {item.date}
                  </div>
                  <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">
                      <IoSchoolOutline />
                    </h1>
                  </div>
                  <div className="order-1 rounded-lg shadow-xl w-5/12 md:px-6 md:py-4 sm:px-6 sm:py-4 px-2 py-2">
                    <h3 className="mb-3 font-bold text-gray-800 md:text-xl sm:text-lg text-md">
                      {item.title}
                    </h3>
                    <h4 className="mb-2 font-bold text-gray-800">
                      {item.location}
                    </h4>
                    <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 text-justify">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
