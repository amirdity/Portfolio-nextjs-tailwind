import React from "react";

function Layout({ children, classname = "" }) {
  return (
    <div
      className={`w-full  inline-block z-0 bg-light px-10 pt-0 dark:bg-dark ${classname}`}
    >
      {children}
    </div>
  );
}

export default Layout;
