import React, { useState } from "react";
import "./Experience.css";
import { POSITIONS } from "../data/data";
import { Accordian } from "./Accordian/index";

function Experience() {
  const [expanded, setExpanded] = useState();

  console.log(POSITIONS);

  return (
    <div className="experience-container">
      <div className="experience-header">
        <h2>Experience</h2>
      </div>
      {POSITIONS.map((position, index) => {
        return (
          <Accordian
            key={index}
            i={index}
            expanded={expanded}
            setExpanded={setExpanded}
            position={position}
          />
        );
      })}
    </div>
  );
}

export default Experience;
