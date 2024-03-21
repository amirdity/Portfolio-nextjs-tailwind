import "@/styles/globals.css";
import Head from "next/head";

import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Amir Fattahi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-bug.svg" />
      </Head>
      <main className={`  bg-light w-full min-h-screen font-akaya`}>
        {" "}
        <NavBar />
        <Component {...pageProps} />
      </main>
    </>
  );
}