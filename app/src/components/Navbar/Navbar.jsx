import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./Navbar.module.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        className={styles.navbar}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* LOGO */}
        <motion.div className={styles.logo}>
          <motion.span
            className={styles.logoText}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Darkside-bjj
          </motion.span>
        </motion.div>

        {/* DESKTOP LINKS */}
        <motion.div className={styles.links}>
          <motion.a
            href="#horarios"
            className={styles.link}
            initial={{ opacity: 0, y: -20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            onClick={() => {
              document
                .getElementById("horarios")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Horarios
          </motion.a>

          <motion.a
            href="#instructores"
            className={styles.link}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Instructores
          </motion.a>
          <motion.button
            className={styles.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            ÚNETE
          </motion.button>
        </motion.div>

        {/* HAMBURGER */}
        <motion.button
          className={styles.menuButton}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </motion.button>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <a onClick={() => setOpen(false)} href="#horarios">
              Horarios
            </a>
            <a onClick={() => setOpen(false)} href="#instructores">
              Instructores
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
