import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import { path } from "framer-motion/client";

const navbarVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const navItems = [
  { name: "Sobre Mi", path: "/Sobre Mi" },
  { name: "Proyectos", path: "/proyectos" },
  { name: "Contacto", path: "/contacto" },
];

function Navbar() {
  return (
    <motion.nav
      className={styles.navbar}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div className={styles["navbar-content"]}>
        <motion.div variants={itemVariants}>
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={styles.btn}
            >
              Eguis Suarez
            </motion.button>
          </Link>
        </motion.div>

        <motion.ul className={styles["main-nav"]}>
          {navItems.map(({ name, path }, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to={path} className={styles.link}>
                {name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;
