import { motion } from "framer-motion";
// Make this component more reusable
export const AccordianHeader = ({ position, setExpanded, isOpen, i }) => {
  return (
    <motion.header
      className="acc-header"
      initial={false}
      animate={{
        backgroundColor: isOpen ? "#e8e8e8" : "#ffffff",
        height: isOpen ? 75 : 60,
      }}
      onClick={() => setExpanded(isOpen ? false : i)}
    >
      <div className="acc-item-header">
        <span className="acc-position">{position.position}</span>
        <span className="acc-company">{position.company}</span>
        {isOpen && (
          // animate here
          <motion.div>
            <i className="fa-solid fa-location-dot location-icon" />
            <span className="acc-location">{position.location}</span>
          </motion.div>
        )}

        <span className="acc-date">{position.date}</span>
        <motion.i
          className={`fa-solid ${isOpen ? "fa-x" : "fa-plus"} close`}
          initial={false}
          animate={{ scale: isOpen ? 0.8 : 0.9 }}
        />
      </div>
    </motion.header>
  );
};
