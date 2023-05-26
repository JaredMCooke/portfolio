import { AnimatePresence, motion } from "framer-motion";

const icons = [
  "fa-solid fa-location-dot",
  "fa-solid fa-mobile-button",
  "fa-solid fa-envelope",
  "fa-brands fa-linkedin-in",
];

const labels = [
  "Costa Mesa, CA",
  "909.263.6515",
  "Jaredmatthewcooke@gmail.com",
  "linkedin.com/in/jared-cooke-b2544317b/",
];

const Item = ({ i, isOpen, animation }) => {
  return (
    <motion.li className="contact" key={i} whileHover={{ scale: 1.01, x: -3 }}>
      <i layout className={`${icons[i]}`} />
      {isOpen && (
        <motion.p
          key={`${i}-p`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          {labels[i]}
        </motion.p>
      )}
    </motion.li>
  );
};

export default Item;
