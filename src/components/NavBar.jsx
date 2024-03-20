import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}{" "}
      <span className="h-[2px] inline-block w-0 bg-dark absolute left-0 -bottom-[2px] group-hover:w-full transition-[width] ease duration-500  ">
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

      <nav>
        <Link href="#" target="_blank">
          Linkden
        </Link>
        <Link href="#" target="_blank">
          Linkden
        </Link>
        <Link href="#" target="_blank">
          Linkden
        </Link>
        <Link href="#" target="_blank">
          Linkden
        </Link>
        <Link href="#" target="_blank">
          Linkden
        </Link>
        <Link href="#" target="_blank">
          Linkden
        </Link>
      </nav>
      <div className="absolute top-3 left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
