import { motion } from "framer-motion";
import styles from "./ProgramCard.module.css";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function ProgramCard({ title, image, alt, description }) {
  return (
    <motion.article
      className={styles.card}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -10 }}
    >
      <div className={styles.imageWrapper}>
        <img src={image} alt={alt} />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </motion.article>
  );
}

export default ProgramCard;
