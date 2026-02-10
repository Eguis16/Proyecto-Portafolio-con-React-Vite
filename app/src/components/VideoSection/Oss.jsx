import React from "react";
import styles from "./Oss.module.css";
import { easeIn, motion } from "framer-motion";
import oss from "../../assets/video/dark-2.mp4";
import { tr } from "framer-motion/client";

const containerVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

function video() {
  return (
    <motion.section
      id="oss"
      className={styles.ossSection}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 className={styles.title} variants={cardVariants}>
        OSS
      </motion.h2>

      <motion.p className={styles.subtitle} variants={cardVariants}>
        Finalizaciones, Control. Violencia Tecnica.
      </motion.p>

      <div className={styles.grid}>
        <motion.div className={styles.card} variants={cardVariants}>
          <video src={oss} controls preload="metadata"></video>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default video;
