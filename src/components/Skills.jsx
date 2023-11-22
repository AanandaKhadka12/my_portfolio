import React from "react";
import { Skill } from "../ProjectList";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="w-full py-10 text-slate-600" id="skills">
      <p className="flex justify-center mx-auto border-slate-500 border-b-2 w-[9rem] mb-10 font-pacifico font-extrabold md:text-3xl sm:text-2xl  text-2xl">
        My Skills
      </p>
      <div className="grid md:grid-cols-1 max-w-[800px] mx-auto p-5">
        <div className="flex md:flex-row  flex-wrap mx-auto justify-center">
          {Skill.map((skill, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                whileInView={{
                  opacity: 1,
                  translateX: 0,
                  translateY: 0,
                  transition: { duration: 0.3, delay: index * 0.1 },
                }}
                // animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                // transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative mx-5"
                key={index}
              >
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-white bg-slate-500">
                      {skill.skill}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs mx-5  font-semibold inline-block text-slate-800">
                      {skill.pro}
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white">
                  <div
                    style={{ width: skill.pro }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-slate-500"
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
