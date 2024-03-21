import React from "react";
import { motion } from "framer-motion";
const anime = {
  initial: { opacity: 1 },
  animate: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.5 } },
};
const singleWord = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};
function AnimatedText({ text, classname = "" }) {
  return (
    <div className="mx-auto w-full py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        variants={anime}
        initial="initial"
        animate="animate"
        className={`inline-block text-dark w-full font-bold capitalize text-4xl text-left ${classname}`}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={singleWord}
            key={word + " " + index}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default AnimatedText;
