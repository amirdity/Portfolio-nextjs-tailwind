import React, { use } from "react";
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
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { MoonIcon, SunIcon } from "./Icons";
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
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className="w-full px-32 py-7 font-medium flex items-center justify-between ">
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
        <CustomLink href="/About Me" title="About Me" className="mr-5 " />
      </nav>

      <nav className="flex  items-center justify-between flex-wrap">
        <motion.a
          href="https://www.linkedin.com/in/amir-fattahi77/"
          target="_blank"
          whileHover={{ y: -5, scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="mx-3"
        >
          <Image
            src={linkdein}
            alt="linkdein"
            className="h-10 w-10 rounded-lg"
          />
        </motion.a>
        <motion.a
          href="https://t.me/Amirfattahi77"
          target="_blank"
          whileHover={{ y: -5, scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="mx-3"
        >
          <Image src={telegram} alt="telegram" className="h-10 w-10" />
        </motion.a>
        <motion.a
          href="mailto:amirfattahi22@gmail.com?subject=Your%20Subject&body=Your%20Message"
          target="_blank"
          whileHover={{ y: -5, scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="mx-3"
        >
          <Image src={gmail} alt="gmail" className="h-10 w-10" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/amirfattahi77?igsh=MzNlNGNkZWQ4Mg=="
          target="_blank"
          whileHover={{ y: -5, scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="mx-3"
        >
          <Image src={instagram} alt="instagram" className="h-10 w-10" />
        </motion.a>
        <motion.a
          href="https://github.com/amirdity"
          target="_blank"
          whileHover={{ y: -5, scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="mx-3"
        >
          <Image src={github} alt="github" className="h-10 w-10" />
        </motion.a>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className="absolute top-3 left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
