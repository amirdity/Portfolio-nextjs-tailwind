import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";

function about() {
  return (
    <Layout>
      <AnimatedText text={"this page is about me"} classname="text-center" />
      <h1>
        In 2018, I attended the University of Tehran to pursue a Bachelor's
        degree. After a year, I made the decision to learn new skills and
        actively search for a job. I work in various positions and have learned
        many soft skills like team work, public relations, effective
        communication, negotiation and persuasion. After three years, I am
        filled with gratitude as I graduate from college. Now, I have made the
        decision to further my education by pursuing a master's degree.The top
        priority for me is to be part of a strong team that promotes effective
        cooperation and interaction for the progress of the group. Following
        that, I aim to gain experience and develop my individual skills. I have
        learned time management, work commitment, and teamwork interaction well.
        I am highly motivated to continue on this path, and I enjoy
        problem-solving and learning to work with new tools. Now I have enough
        time to become a full-time employed.
      </h1>
    </Layout>
  );
}

export default about;
