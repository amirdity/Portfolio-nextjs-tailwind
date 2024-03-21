import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import portfolio from "../../public/images/profile/portfolio.png";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="flex items-center text-dark w-full ">
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div>
              <Image src={portfolio} alt="portfolio" className="w-1/2" />
            </div>
            <div>
              <h1>I conquer the projects like mountains</h1>
              <p>as a front-end developer i climb the projects</p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
