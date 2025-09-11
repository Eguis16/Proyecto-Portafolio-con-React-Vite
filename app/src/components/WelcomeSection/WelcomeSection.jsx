import { motion } from "framer-motion";
import styles from "./WelcomeSection.module.css";
import { FaReact, FaPython, FaTools } from "react-icons/fa";

function WelcomeSection() {
  const skills = [
    "🖥️ Desarrollo Web: React, Vite, Tailwind CSS, HTML, CSS, JavaScript",
    "⚙️ Automatización y Scripting: PowerShell, Python",
    "🧠 Frameworks y Librerías: Flask, Framer Motion, React Router",
    "🛠️ Herramientas de despliegue: GitHub Pages, Netlify",
    "🧩 Gestión de configuración: Neovim (Lua, Packer), módulos personalizados",
    "🗂️ Administración de sistemas: MDT, ADK, WinPE, Sysinternals",
    "📈 Optimización de procesos: diseño de flujos de trabajo, documentación técnica",
    "📚 Aprendizaje autodidacta: mejora continua y dominio de nuevas tecnologías",
  ];

  // Función para animar los elementos de la lista de habilidades
  const getSkillAnimation = (index) => ({
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { delay: 0.9 + index * 0.15, duration: 0.5 },
  });

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
        Hola, soy Eguis Suárez <FaReact /> <FaPython /> <FaTools />
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
          {skills.map((skill, index) => (
            <motion.li key={index} {...getSkillAnimation(index)}>
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={styles.ctaButton}
        onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Contáctame
      </motion.button>
    </motion.section>
  );
}

export default WelcomeSection;
