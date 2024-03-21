import React from "react";

function AnimatedText({ text, classname = "" }) {
  return (
    <div className="mx-auto w-full py-2 flex items-center justify-center text-center overflow-hidden">
      <h1
        className={`inline-block text-dark w-full font-bold capitalize text-2xl  ${classname}`}
      >
        {text}
      </h1>
    </div>
  );
}

export default AnimatedText;
