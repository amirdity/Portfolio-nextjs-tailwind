import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-1 border-solid border-dark font-medium text-lg">
      <Layout classname="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} © All Rights Reserved.</span>
      </Layout>
    </footer>
  );
};

export default Footer;
