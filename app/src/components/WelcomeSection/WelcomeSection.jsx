import { motion } from 'framer-motion';
import styles from './WelcomeSection.module.css'; // Usando módulos CSS correctamente

function WelcomeSection() {
    return (
        <motion.section
            className={styles.welcomeSection} // Usando clase desde el módulo CSS
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{ opacity: 0, y: 50 }}
        >
            <h1>¡Hola! Soy Eguis Suárez</h1>
<p>
    Bienvenido a mi portafolio personal. Soy desarrollador con pasión por crear soluciones eficientes y elegantes usando tecnologías modernas como React, Flask y Python. Aquí encontrarás una muestra de mis proyectos, habilidades y el enfoque que aplico en cada desafío. ¡Explora, conecta y descubre cómo puedo ayudarte a transformar ideas en realidad!
</p>
        </motion.section>
    );
}

export default WelcomeSection;