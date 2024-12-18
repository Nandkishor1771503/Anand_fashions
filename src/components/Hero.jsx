import React from "react";
import heroImg from "../images/heroImg.png";
import heroImg2 from "../images/heroImg2.png";
import heroImg3 from "../images/heroImg3.png";
import heroLg from "../images/heroLg.jpg";
import Navbar from "./Navbar";
import { motion } from "framer-motion";


const sentenceStagger = "Style is a way to say".split(" ");
const sentenceStaggerLg =
  "Style is a way to say who you are without having to speak".split(" ");

export  const parentVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, duration: 0.357 },
  },
};

export const childrenVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  transition: { delay: 0.5 },
};

function Hero() {
  return (
    <>
      <div className="bg-[#654025] h-screen hidden lg:block">
        <Navbar />

        <div className="flex justify-between m-7">
          {/*text-[#ceb18d]*/}
          <motion.div
            className="text-[#ceb18d] flex gap-5 p-8 flex-wrap text-8xl "
            variants={parentVariant}
            initial="hidden"
            animate="show"
          >
            {sentenceStaggerLg.map((main, index) => {
              return (
                <motion.h1 variants={childrenVariant} key={index}>
                  {main}
                </motion.h1>
              );
            })}
          </motion.div>

          <img
            src="https://i.pinimg.com/originals/dc/b7/26/dcb72660ba4af4b176420a912239f6c4.jpg"
            alt=""
            className="w-[33%] shadow-2xl rounded-3xl p-5 "
          />
        </div>
      </div>

      <div className="bg-[#654025] lg:hidden ">
        <h1 className="text-[#cbad89] text-4xl mb-4 ">Anand Fashions</h1>
        <div>
          <div className="flex items-center justify-center gap-5 m-5 mt-16 md:ml-0">
            <motion.img
              src={heroImg}
              alt=""
              className="rounded-3xl w-[50%] md:w-[35%]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
            <motion.div
              className="text-4xl md:text-5xl md:mx-6 text-[#e9d6c0] font-thin flex flex-wrap text-center gap-2 w-[50%] "
              variants={parentVariant}
              initial="hidden"
              animate="show"
            >
              {sentenceStagger.map((word, i) => {
                return (
                  <motion.h2 key={i} variants={childrenVariant}>
                    {word}
                  </motion.h2>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            className="flex items-center justify-center gap-5 m-5 mt-16"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl text-[#e9d6c0] font-thin">
              who you are without
            </h2>
            <img
              src={heroImg2}
              alt=""
              className="rounded-3xl w-[50%] md:w-[35%]"
            />
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-5 m-5 mb-0 pb-5 mt-16"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img src={heroImg3} alt="" className="rounded-3xl w-[50%]" />
            <h2 className="text-4xl md:text-5xl text-[#e9d6c0] font-thin">
              having to speak.
            </h2>
          </motion.div>
        </div>
      </div>
    </>
  );
}



export default Hero;
