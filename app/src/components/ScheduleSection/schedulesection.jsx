import { motion } from "framer-motion";
import styles from "./schedulesection.module.css";
import { FaWhatsapp } from "react-icons/fa";

function ScheduleSection() {
  return (
    <section className={styles.section} id="horarios">
      {/* HEADER */}
      <div className={styles.header}>
        <h2 className={styles.title}>Horarios de Entrenamiento</h2>
        <p className={styles.subtitle}>
          Clases estructuradas para todos los niveles. Entrena con o sin kimono
          en un ambiente serio y colaborativo.
        </p>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {/* FUNDAMENTOS */}
        <motion.div
          className={styles.card}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <h3>Fundamentos</h3>
          <ul>
            <li>Lunes a Viernes</li>
            <li>19:00 – 20:00</li>
            <li>GI / No-GI</li>
          </ul>
        </motion.div>

        {/* TODOS LOS NIVELES */}
        <motion.div
          className={styles.card}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <h3>GI & No-Gi</h3>
          <ul>
            <li>Lunes a Viernes</li>
            <li>20:00 – 21:30</li>
            <li>Todos los niveles</li>
          </ul>
        </motion.div>

        {/* KIDS */}
        <motion.div
          className={styles.card}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <h3>Kids & Juveniles</h3>
          <ul>
            <li>Lunes, Miércoles y Viernes</li>
            <li>18:00 – 19:00</li>
            <li>Desde 5 años</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default ScheduleSection;
