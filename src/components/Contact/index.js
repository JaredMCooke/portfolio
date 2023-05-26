import { motion } from "framer-motion";
import Item from "./Item";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="contact-container">
      <motion.ul
        className="contact-list"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        layout
        animate={{
          scale: 1,
          opacity: 1,
          width: isOpen ? 270 : 42,
          alignItems: isOpen ? "start" : "center",
        }}
        transition={{ duration: 0.3, when: "afterChildren" }}
      >
        {itemIDs.map((index) => (
          <Item key={index} i={index} isOpen={isOpen} />
        ))}
      </motion.ul>
    </div>
  );
};

export default Contact;

const itemIDs = [0, 1, 2, 3];
