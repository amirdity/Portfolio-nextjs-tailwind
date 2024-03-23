import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import portfolio from "../../public/images/profile/portfolio.png";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { LinkArrow } from "@/components/Icons";
import Link from "next/link";

import Particle from "@/components/Particle";
import ReactCircle from "@/components/ReactCircle";
export default function Home() {
  return (
    <>
      <main className="flex items-center text-dark w-full ">
        <Layout>
          <Particle />
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image src={portfolio} alt="portfolio" className="" />
            </div>
            <div className="flex flex-col items-center self-center w-1/2 ">
              <ReactCircle />
              <AnimatedText text={"I conquer the projects like mountains"} />
              <motion.h1
                animate={{ x: 0 }}
                initial={{ x: 1000 }}
                transition={{ delay: 3 }}
                className="text-lg inline-block text-dark w-full capitalize text-left"
              >
                as a front-end developer i climb the projects
              </motion.h1>
              <motion.div
                className="text-left flex items-center bg-dark text-light p-2 px-6 rounded-lg text-lg hover:bg-white hover:text-dark border-2 border-solid border-transparent hover:border-dark left-0 mt-3 h-10 w-[350px] "
                animate={{ x: -150, y: 0 }}
                initial={{ y: 500, x: -150 }}
                transition={{ delay: 3, duration: 2 }}
              >
                <Link
                  className=" "
                  href={"https://portfolio-nextjs-tailwind-gamma.vercel.app/"}
                >
                  <LinkArrow className={"inline-block w-5"} />{" "}
                  <p className="ml-3 inline-block">
                    {" "}
                    next.js version( Turn your VPN On )
                  </p>
                </Link>
              </motion.div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
