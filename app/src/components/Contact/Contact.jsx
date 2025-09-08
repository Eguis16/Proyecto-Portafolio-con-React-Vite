import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Aquí puedes integrar emailjs, API, etc.
  };

  return (
    <motion.section
      className={styles.contact}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Contáctame</h2>
      <motion.form
        onSubmit={handleSubmit}
        className={styles.form}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div className={styles.field} whileFocus={{ scale: 1.05 }}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div className={styles.field} whileFocus={{ scale: 1.05 }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div className={styles.field} whileFocus={{ scale: 1.05 }}>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={styles.submit}
        >
          Enviar
        </motion.button>
      </motion.form>
    </motion.section>
  );
}

export default Contact;
