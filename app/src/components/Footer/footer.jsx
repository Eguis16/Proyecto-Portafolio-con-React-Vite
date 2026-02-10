import React from "react";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import {
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={styles.container}>
        {/* SOCIALS */}
        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/darkside__bjj/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/tuacademia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>

        {/* LOCATION */}
        <div className={styles.location}>
          <FaMapMarkerAlt />
          <span>Av. Varas Mena 915, Santiago, Chile</span>
        </div>

        {/* MAP LINK */}
        <a
          href="https://maps.app.goo.gl/hc2i7K38GtSUGJuE9"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapLink}
        >
          Ver ubicación en Google Maps <FaExternalLinkAlt />
        </a>

        {/* COPYRIGHT */}
        <div className={styles.bottomBar}>
          <p>© {currentYear} Darkside BJJ. Todos los derechos reservados.</p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
