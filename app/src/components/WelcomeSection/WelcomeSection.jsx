import { motion } from "framer-motion";
import styles from "./WelcomeSection.module.css";

function WelcomeSection() {
  return (
    <motion.section
      className={styles.welcomeSection}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0, y: 50 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Hola, soy Eguis Suárez
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Bienvenido a mi portafolio personal. Soy desarrollador con pasión por
        crear soluciones eficientes y elegantes usando tecnologías modernas como
        React, Flask y Python.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={styles.ctaButton}
      >
        Contáctame
      </motion.button>
    </motion.section>
  );
}

export default WelcomeSection;
