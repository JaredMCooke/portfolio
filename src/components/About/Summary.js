import { motion } from "framer-motion";

const ease = [0.43, 0.13, 0.23, 0.96];

const DEFAULT =
  "As a driven and creative frontend developer, I excel in developing visually stunning and user-friendly solutions to enhance user experience. Leveraging my passion for design, I possess excellent creative thinking skills and a proven track record of delivering frontend development projects that consistently exceed deliverable targets. Adaptable to any situation, I am always eager to embrace new challenges and opportunities.";

export const Summary = ({ text = DEFAULT, isOpen }) => {
  return (
    <motion.div
      className="about-content"
      // initial={false}
      // animate={{ background: isOpen ? LINEAR_GRADIENT : "transparent" }}
      // transition={{ ease: ease, duration: 0.4, delay: 1.2 }}
    >
      <motion.span
        className="vertical-line"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ ease: ease, duration: 0.4, delay: 1.2 }}
      ></motion.span>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: ease, duration: 0.3, delay: 1 }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
};
