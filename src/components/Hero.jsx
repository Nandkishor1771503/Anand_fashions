import React from "react";
import heroImg from "../images/heroImg.png";
import heroImg2 from "../images/heroImg2.png";
import heroImg3 from "../images/heroImg3.png";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const sentenceStagger = "Style is a way to say".split(" ");

const parentVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.357 },
  },
};

const childrenVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <>
      <div className="bg-[#654025]">
        <h1 className="text-[#cbad89] text-5xl mb-4">Anand Fashions</h1>
        <div>
          <div className="flex items-center justify-center gap-5 m-5 mt-16">
            <img src={heroImg} alt="" className="rounded-3xl w-[50%] " />
            <motion.div
              className="text-4xl text-[#e9d6c0] font-thin flex flex-wrap text-center gap-2 w-[50%] "
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

          <div className="flex items-center justify-center gap-5 m-5 mt-16">
            <h2 className="text-4xl text-[#e9d6c0] font-thin">
              who you are without
            </h2>
            <img src={heroImg2} alt="" className="rounded-3xl w-[50%]" />
          </div>

          <div className="flex items-center justify-center gap-5 m-5 mt-16">
            <img src={heroImg3} alt="" className="rounded-3xl w-[50%]" />
            <h2 className="text-4xl text-[#e9d6c0] font-thin">
              having to speak.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
