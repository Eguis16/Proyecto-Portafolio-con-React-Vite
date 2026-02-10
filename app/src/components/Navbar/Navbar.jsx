import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import { FaWhatsapp } from "react-icons/fa";

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
        <motion.div
          className={styles.logo}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* CTA */}
          <motion.a
            href="https://wa.me/56995841577?text=Hola!%20Quiero%20agendar%20una%20clase%20de%20prueba%20en%20Darkside%20BJJ"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp />
            Agenda tu clase de prueba
          </motion.a>
        </motion.div>

        {/* DESKTOP LINKS */}
        <motion.div className={styles.links}>
          <motion.a
            className={styles.link}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("horarios")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Horarios
          </motion.a>

          <motion.a
            className={styles.link}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("instructores")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Instructores
          </motion.a>

          <motion.a
            className={styles.darkLink}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("oss")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            OSS
          </motion.a>
        </motion.div>

        {/* HAMBURGER */}
        <button
          className={styles.menuButton}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
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
