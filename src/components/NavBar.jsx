import React from "react";
import Link from "next/link";
import Logo from "./Logo";
const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <Link href="/Home">Home</Link>
        <Link href="/Skills">Skills</Link>
        <Link href="/Project Samples">Project Samples</Link>
        <Link href="/Job Experiences">Job Experiences</Link>
        <Link href="/Courses">Courses</Link>
        <Link href="/About Me">About Me</Link>
      </nav>
      <Logo />
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
    </header>
  );
};

export default NavBar;
