import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import { navItems } from "../ProjectList";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky z-30 flex justify-center items-center max-h-20 max-w-[1000px] mx-auto px-4 text-slate-500 py-[4rem]">
      <motion.div
        initial={{ y: -100, x: 0, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        className="fixed hidden md:flex lg:w-[50%] md:w-[80%] h-[3rem] text-transparent border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] rounded-full"
      ></motion.div>
      <ul className="fixed hidden md:flex items-center font-bold justify-center">
        {navItems.map((item, index) => {
          return (
            <li className="p-2 px-3 mx-2 max-h-10 transition-all duration-300 hover:bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 hover:text-white hover:rounded-xl hover:bg-right-bottom">
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
      </ul>
      <div onClick={handleNav} className="md:hidden">
        {!nav ? (
          <AiOutlineClose
            size={20}
            className="fixed ml-[10rem] sm:ml-[15rem]"
          />
        ) : (
          <AiOutlineMenu size={20} className="fixed ml-[10rem] sm:ml-[15rem]" />
        )}

        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r-[#00300] bg-slate-200 ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <ul className="uppercase p-4 from-indigo-100 from-20% via-sky-100 via-80% to-emerald-10 bg-gradient-to-r">
            {navItems.map((item, index) => {
              return (
                <li className="p-4 border-b border-gray-600">
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
