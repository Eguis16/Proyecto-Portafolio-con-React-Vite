import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WelcomeSection.module.css";

import img1 from "../../assets/img/dark-1.png";
import img2 from "../../assets/img/dark-3.png";
import img3 from "../../assets/img/dark-4.png";
import img4 from "../../assets/img/dark-5.png";

const imagenes = [img1, img2, img3, img4];

function gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.gallery}>
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={imagenes[index]}
          alt="Entrenamiento Darkside"
          className={styles.galleryimg}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
}

export default gallery;
