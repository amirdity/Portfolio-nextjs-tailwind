import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import logo from "../../public/images/svgs/logo-bug.svg";
import Image from "next/image";
const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="dark:border-light border-solid border-transparent border w-16 selection:h-16 p-3 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          scale: 1.4,
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        {" "}
        <Image className="w-20" src={logo} alt="Landscape picture" />
      </MotionLink>
    </div>
  );
};

export default Logo;
