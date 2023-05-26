import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";
// import Contact from "../Contact";
// import { Button } from "./Button";

const LINKS = [
  { to: "experience", label: "Experience" },
  { to: "education", label: "Education" },
  { to: "skills", label: "Skills" },
];

function Navbar() {
  // const [modalOpen, setModalOpen] = useState(false);

  // const close = () => setModalOpen(false);

  // const open = () => setModalOpen(true);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/">JC</Link>
        </div>
        <motion.ul
          className="navbar-list"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {LINKS.map((item) => (
            <NavLink
              to={item.to}
              label={item.label}
              key={item.to}
              variants={links}
            />
          ))}
        </motion.ul>
      </nav>
    </>
  );
}

export default Navbar;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const links = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const NavLink = ({ to, label, variants, i }) => {
  return (
    <motion.li variants={variants}>
      <Link to={`/${to}`}>{label}</Link>
    </motion.li>
  );
};
