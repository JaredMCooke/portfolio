import React from "react";
import About from "../About";
import { Work } from "../Work";

function Home() {
  return (
    <div className="home-container">
      {/* <div className="row"> */}
      <About />
      <Work />
      {/* <Contact /> */}
      {/* </div> */}
      <div className="row"></div>
    </div>
  );
}

export default Home;
