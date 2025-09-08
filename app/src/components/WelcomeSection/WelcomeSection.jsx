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
        className={styles.heading}
      >
        Hola, soy Eguis Suárez
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className={styles.description}
      >
        Bienvenido a mi portafolio personal. Soy desarrollador con pasión por
        crear soluciones eficientes y elegantes usando tecnologías modernas como
        React, Flask y Python.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className={styles.skills}
      >
        <h2 className={styles.skillsTitle}>🛠️ Habilidades</h2>
        <ul className={styles.skillsList}>
          <li>
            🖥️ <strong>Desarrollo Web:</strong> React, Vite, Tailwind CSS, HTML,
            CSS, JavaScript
          </li>
          <li>
            ⚙️ <strong>Automatización y Scripting:</strong> PowerShell, Python
          </li>
          <li>
            🧠 <strong>Frameworks y Librerías:</strong> Flask, Framer Motion,
            React Router
          </li>
          <li>
            🛠️ <strong>Herramientas de despliegue:</strong> GitHub Pages,
            Netlify
          </li>
          <li>
            🧩 <strong>Gestión de configuración:</strong> Neovim (Lua, Packer),
            módulos personalizados
          </li>
          <li>
            🗂️ <strong>Administración de sistemas:</strong> MDT, ADK, WinPE,
            Sysinternals
          </li>
          <li>
            📈 <strong>Optimización de procesos:</strong> diseño de flujos de
            trabajo, documentación técnica
          </li>
          <li>
            📚 <strong>Aprendizaje autodidacta:</strong> mejora continua y
            dominio de nuevas tecnologías
          </li>
        </ul>
      </motion.div>

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
