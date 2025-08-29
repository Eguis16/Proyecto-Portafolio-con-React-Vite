import React from "react";
import { motion } from "framer-motion"
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <motion.nav
      className={styles.navbar}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
    >
      <motion.div 
      className={styles['navbar-content']}
      initial = {{opacity: 0}}
      animate = {{ opacity: 1}}
      transition={{ duration: 0.5 }}
    >
      <h1> Mi Portafolio </h1>
      <motion.ul 
      className={styles['main-nav']}
      initial='hidden'
      animate='visible'
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        transition: {
          staggerChildren: 0.2,
        }
      }}
    >
      {["Sobre Mi", "Proyectos", "Contacto"].map((item, index) => (
        <motion.li key={index} variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        whileHover={{ scale: 1.1, color: "#A3D9C9" }}
        transition={{ type: "spring", stiffness: 300 }}
        >
          <a href={`#${item.toLowerCase().replace(" ", "-")}`}>{item}</a>
        </motion.li>
      ))}
    </motion.ul>
    </motion.div>
    </motion.nav>
  )
}

export default Navbar;