import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tag = ({ label }) => {
  return (
    <div className="tag-wrapper">
      <span>{label}</span>
    </div>
  );
};

const Header = ({ position, toggle, isOpen }) => {
  return (
    <div
      className="link grid-col-span-5"
      // to={`/experience/${position.link}`}
      onClick={() => toggle(position.link)}
    >
      <div className={`grid-row ${isOpen && "active"}`}>
        <p className="date">{position.date}</p>
        <p className="position">{position.position}</p>
        {isOpen && <p className="company">{position.company}</p>}
        {isOpen && <p className="location">{position.location}</p>}

        <i className={`fa-solid fa-${isOpen ? "minus" : "plus"}`} />
      </div>
    </div>
  );
};

const Content = ({ position }) => {
  return (
    <>
      <div className="content">
        <ul>
          {position.content &&
            position.content.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
        </ul>
      </div>
      {/* <div className="tag-container">
        {position.tags &&
          position.tags.map((tag, index) => {
            return <Tag label={tag} key={index} />;
          })}
      </div> */}
    </>
  );
};

function ExperienceDetail({ position, toggle, isOpen }) {
  console.log("position:", position);
  return (
    <div
      className={`accordian-grid-item ${isOpen && "active"}`}
      key={position.link}
    >
      <Header position={position} toggle={toggle} isOpen={isOpen} />
      {isOpen && <Content position={position} />}
      {isOpen && (
        <div className="tag-container">
          {position.tags &&
            position.tags.map((tag, index) => {
              return <Tag label={tag} key={index} />;
            })}
        </div>
      )}
    </div>
  );
}

export default ExperienceDetail;
