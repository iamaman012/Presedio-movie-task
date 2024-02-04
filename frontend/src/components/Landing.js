import React from "react";
import Header from "./Header";
import Fotter from "./Fotter";
const Landing = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "79.5vh" }}>{children}</main>
      <Fotter />
    </div>
  );
};

export default Landing;
