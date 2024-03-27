import React, { use, useState } from "react";
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
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-[2px] group-hover:w-full transition-[width] ease duration-500 dark:text-light dark:bg-light ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group`}
      onClick={handleClick}
    >
      {title}{" "}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-[2px] group-hover:w-full transition-[width] ease duration-500 dark:text-light dark:bg-light ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};
const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-32 py-7 font-medium flex items-center justify-between dark:text-light relative">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-500 ease-in  h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block  transition-all duration-500 ease-in h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block  transition-all duration-500 ease-in h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-center items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4 " />
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
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/*|||||||||||||||||||||||||||| this is mobile query ||||||||||||||||||||||||||||||||||*/}
      {isOpen ? (
        <div className="min-w-[70px] z-30 flex justify-center items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
          <nav className="flex justify-center items-center flex-col">
            <CustomMobileLink
              href="/"
              title="Home"
              className="mr-4 "
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/Skills"
              title="Skills"
              className="mr-4 "
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/Project Samples"
              title="Project Samples"
              className="mr-4 "
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/Job Experiences"
              title="Job Experiences"
              className="mr-4 "
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/Courses"
              title="Courses"
              className="mr-4 "
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/About Me"
              title="About Me"
              className="mr-5 "
              toggle={handleClick}
            />
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
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </div>
      ) : null}

      <div className="absolute top-3 left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
