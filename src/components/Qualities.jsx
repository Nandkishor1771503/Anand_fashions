import React from "react";
import { motion } from "framer-motion";

function Qualities() {
  const qStyles ="text-2xl md:text-2xl "
  const styles =
    "flex  gap-2 items-center justify-center  rounded-xl lg:rounded-2xl shadow-lg z-30 h-14 md:h-16 lg:h-20";
  const parentVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3, duration: 2 } },
  };
  const chikdVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <div className="bg-[#ceb18d] pb-10">
        <h1 className="mb-6 p-6 text-4xl">Qualities</h1>
        <motion.div
          className="grid grid-cols-1 h-64  md:grid-cols-2 gap-4 w-full px-4  m-auto  "
          variants={parentVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className={`${styles} bg-[#cc9965] `}
            variants={chikdVariant}
          >
            <span className={qStyles}>1.</span>
            <h3 className={qStyles}>best cloth and style</h3>
          </motion.div>
          <motion.div
            className={`${styles} bg-[#e3b174]`}
            variants={chikdVariant}
          >
            <span className={qStyles}>2.</span>
            <h3 className={qStyles}>best cloth and style</h3>
          </motion.div>
          <motion.div
            className={`${styles} bg-[#f5c283]`}
            variants={chikdVariant}
          >
            <span className={qStyles}>3.</span>
            <h3 className={qStyles}>best cloth and style</h3>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Qualities;
