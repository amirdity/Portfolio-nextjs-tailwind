import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import telegram from "../../public/images/svgs/telegram.png";
import linkdein from "../../public/images/svgs/linkedin.svg";
import gmail from "../../public/images/svgs/gmail.png";
import instagram from "../../public/images/svgs/instagram.png";
import github from "../../public/images/svgs/github.png";

import { frame } from "framer-motion";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}{" "}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-[2px] group-hover:w-full transition-[width] ease duration-500 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/Home" title="Home" className="mr-4 " />
        <CustomLink href="/Skills" title="Skills" className="mr-4 " />
        <CustomLink
          href="/Project Samples"
          title="Project Samples"
          className="mr-4 "
        />
        <CustomLink
          href="/Job Experiences"
          title="Job Experiences"
          className="mr-4 "
        />
        <CustomLink href="/Courses" title="Courses" className="mr-4 " />
        <CustomLink href="/About Me" title="About Me" className="mr-4 " />
      </nav>

      <nav className="flex  items-center justify-between flex-wrap">
        <motion.a
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        />
        <motion.a href="#" target="_blank">
          <Image src={linkdein} alt="telegram" className="h-10 w-10" />
        </motion.a>
        <motion.a href="#" target="_blank">
          <Image src={telegram} alt="telegram" className="h-10 w-10" />
        </motion.a>
        <motion.a href="#" target="_blank">
          <Image src={gmail} alt="telegram" className="h-10 w-10" />
        </motion.a>
        <motion.a href="#" target="_blank">
          <Image src={instagram} alt="telegram" className="h-10 w-10" />
        </motion.a>
        <motion.a href="#" target="_blank">
          <Image src={github} alt="telegram" className="h-10 w-10" />
        </motion.a>
      </nav>
      <div className="absolute top-3 left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
