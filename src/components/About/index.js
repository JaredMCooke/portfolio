import { useState } from "react";
import "./About.css";
import { motion } from "framer-motion";
import image from "../../assets/images/linkedin.jpeg";
import { Summary } from "./Summary";

const About = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <motion.div className="about-grid">
      {/* <div className="about-header"> */}
      <div className="about-left-side">
        <motion.div
          className="box"
          onClick={() => setIsOpen(!isOpen)}
          initial={false}
          animate={{
            height: isOpen ? 420 : 75,
            justifyContent: isOpen ? "space-around" : "center",
          }}
        >
          <motion.h1
            className="name"
            initial={false}
            animate={{ fontSize: isOpen ? "3rem" : "1.5rem" }}
          >
            <span className="first">
              <span>J</span>
              <span>A</span>
              <span>R</span>
              <span>E</span>
              <span>D</span>
            </span>
            {isOpen && (
              <span className="last">
                <span>C</span>
                <span>O</span>
                <span>O</span>
                <span className="black-text">K</span>
                <span className="black-text">E</span>
              </span>
            )}
          </motion.h1>
          {isOpen && (
            <MotionText
              className="position-animated"
              line1={"FRONTEND DEVELOPER"}
            />
          )}
        </motion.div>
        {isOpen && (
          <motion.img
            className="profile-image"
            src={image}
            alt="profile"
            // initial={false}
            // animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
          />
        )}
      </div>
      {isOpen && (
        <>
          {/* <motion.img
            className="profile-image"
            src={image}
            alt="profile"
            // initial={false}
            // animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
          /> */}
          <div className="about-summary flex-row-col">
            <Summary isOpen={isOpen} />
            <button className="about-btn">Learn more</button>
          </div>
        </>
      )}
      {/* </div> */}
    </motion.div>
  );
};

export default About;

const line1 = "JARED COOKE";
const line2 = "FRONTEND DEVELOPER";

// doesnt animate, just staggers and delays
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.06,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const MotionText = ({ line1, className }) => {
  return (
    <>
      <motion.span
        className={className}
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {line1.split("").map((char, index) => {
          return (
            <motion.span
              className="position-char"
              key={char + "-" + index}
              variants={letter}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.span>
    </>
  );
};
