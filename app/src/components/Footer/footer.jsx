import React from "react";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0, y: 50 }}
    >
      <div className={styles.container}>
        <div className={styles.socials}>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Whatssap">
            <FaWhatsapp />
          </a>
        </div>
        {/* BOTTOM BAR */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} DARKSIDE BJJ. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
