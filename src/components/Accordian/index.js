import { motion, AnimatePresence } from "framer-motion";
import "./Accordian.css";
import { Tag } from "../Tag";
import { AccordianHeader } from "./AccordianHeader";

const AccordianContent = ({ content, tags }) => {
  return (
    <motion.div
      className="accordian-item"
      variants={{
        collapsed: { scale: 0.8, opacity: 0 },
        open: { scale: 1, opacity: 1 },
      }}
      transition={{ duration: 0.3 }}
    >
      {content.map((item) => (
        <li className="bullet">{item}</li>
      ))}
      <div className="tag-container">
        {tags.map((tag, i) => (
          <Tag key={i} label={tag} />
        ))}
      </div>
    </motion.div>
  );
};

export const Accordian = ({ i, expanded, setExpanded, position }) => {
  const isOpen = i === expanded;
  return (
    <>
      <AccordianHeader
        position={position}
        setExpanded={setExpanded}
        isOpen={isOpen}
        i={i}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: {
                opacity: 0,
                height: 0,
              },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <AccordianContent content={position.content} tags={position.tags} />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
