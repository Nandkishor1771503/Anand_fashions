import React from "react";
import { motion } from "framer-motion";
import { childrenVariant, parentVariant } from "../components/Hero.jsx";
function Collection() {

  const cardsStyle ="flex flex-col w-[70%]  md:w-[85%]  lg:w-[95%] h-full items-center justify-center gap-4 bg-[#cbad89] shadow-2xl mx-auto p-5 rounded-2xl "

  return (
    <>
      <div className="bg-[#ceb18d] pt-6 md:pt-10 pb-[45%] md:pb-[15%] lg:pb-[5%]">
        <h1 className="text-4xl m-4 mt-0 mb-16 md:mb-8">Our Collections</h1>
        <motion.div
          className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[4%] md:gap-[8%] lg:gap-[2%] items-center justify-center mt-2"
          variants={parentVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* cards */}
          <motion.div
            className={cardsStyle}
            variants={childrenVariant}
          >
            <img
              src="https://i.pinimg.com/736x/a7/68/bd/a768bd1075ca51265203caeb14390947.jpg"
              alt=""
              className="w-[75%] md:w-[85%] rounded-lg"
            />
            <h2 className="text-3xl">Shirts</h2>
          </motion.div>

          <motion.div
            className={cardsStyle}
            variants={childrenVariant}
          >
            <img
              src="https://i.pinimg.com/736x/ca/ff/52/caff528f6f20cd86aad733a36b4afe4a.jpg"
              alt=""
              className="w-[75%] md:w-[85%] rounded-lg"
            />
            <h2 className="text-3xl">Pants</h2>
          </motion.div>

          <motion.div
            className={cardsStyle}
            variants={childrenVariant}
          >
            <img
              src="https://i.pinimg.com/736x/75/a1/f6/75a1f69766de30af75ce4b4e52dfc007.jpg"
              alt=""
              className="w-[75%] md:w-[85%] rounded-lg"
            />
            <h2 className="text-3xl">Hoddies</h2>
          </motion.div>

          <motion.div
            className={cardsStyle}
            variants={childrenVariant}
          >
            <img
              src="https://i.pinimg.com/736x/e7/64/9b/e7649b6a8c1fa3868ec4e787fe91935c.jpg"
              alt=""
              className="w-[75%] md:w-[85%] rounded-lg"
            />
            <h2 className="text-3xl">Jackets</h2>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
import { form } from "framer-motion/client";

export default Collection;
