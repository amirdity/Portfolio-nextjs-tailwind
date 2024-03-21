import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import portfolio from "../../public/images/profile/portfolio.png";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <>
      <main className="flex items-center text-dark w-full font-sans">
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image src={portfolio} alt="portfolio" className="" />
            </div>
            <div className="flex flex-col items-center self-center w-1/2">
              <AnimatedText text={"I conquer the projects like mountains"} />
              <AnimatedText
                text={"as a front-end developer i climb the projects "}
                classname="text-sm "
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
