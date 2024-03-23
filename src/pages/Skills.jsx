import Layout from "@/components/Layout";
import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full bg-dark text-light py-3 px-6 shadow-black cursor-pointer absolute "
      whileHover={{ scale: 1.2 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 4 }}
    >
      {name}{" "}
    </motion.div>
  );
};

function Skills() {
  return (
    <Layout>
      <AnimatedText text={"Skills"} classname="text-center" />
      <h1 className="font-bold text-4xl mt-5 text-center w-full"> </h1>{" "}
      <div className="relativew-full h-screen flex items-center justify-center rounded-full bg-circularLight">
        <Skill name={"WEB"} x={""} y={""} />
        <Skill name={"CSS"} x={"-6VW"} y={"-11VW"} />
        <Skill name={"HTML"} x={"-21VW"} y={"-2VW"} />
        <Skill name={"JavaScript"} x={"-21VW"} y={"-11VW"} />
        <Skill name={"React"} x={"-21VW"} y={"10VW"} />
        <Skill name={" github"} x={"15VW"} y={"8VW"} />
        <Skill name={"git"} x={"1VW"} y={"11VW"} />
        <Skill name={"Tailwind"} x={"15VW"} y={"-8VW"} />
        <Skill name={"Bootstrap"} x={"3VW"} y={"-15VW"} />
        <Skill name={"WordPress"} x={"-17VW"} y={"-20VW"} />
        <Skill name={"Solidity"} x={"-35VW"} y={"0"} />
        <Skill name={"jQuery"} x={"28VW"} y={"3VW"} />
        <Skill name={"framer-motion"} x={"28VW"} y={"-16vw"} />
        <Skill name={"next.js"} x={"-32VW"} y={"-9vw"} />
      </div>
    </Layout>
  );
}

export default Skills;
