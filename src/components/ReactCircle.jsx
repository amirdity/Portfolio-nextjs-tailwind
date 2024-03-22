import React from "react";
import image from "../../public/images/svgs/react.svg";
import circle from "../../public/images/circl.png";
import Image from "next/image";
import { motion } from "framer-motion";
function ReactCircle() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 9, delay: 3, repeat: Infinity }}
      className=" absolute top-[170px]"
    >
      <Image src={image} className="w-[130px]" alt="react" />
      <motion.div className="absolute top-[-35px] w-[190px] left-[-25px]">
        <Image src={circle} alt="" className="w-[190px] " />
      </motion.div>
    </motion.div>
  );
}

export default ReactCircle;
