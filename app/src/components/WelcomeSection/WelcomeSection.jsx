import Gallery from "./Gallery.jsx";
import styles from "./WelcomeSection.module.css";
import ProgramCard from "./ProgramCard.jsx";
import img1 from "../../assets/img/bjj_1.jpg";
import img2 from "../../assets/img/bjj_4.jpg";
import img3 from "../../assets/img/bjj_3.jpg";

const programs = [
  {
    title: "Fundamentos",
    image: img1,
    alt: "Entrenamiento fundamentos BJJ",
    description:
      "Clase ideal para quienes comienzan o desean reforzar su base. Técnicas esenciales y principios de defensa.",
  },
  {
    title: "GI & No-Gi",
    image: img2,
    alt: "Entrenamientos BJJ con Gi y No Gi",
    description:
      "Entrenamientos tanto con kimono como sin kimono, donde principiantes, intermedios y avanzados entrenan juntos en un ambiente colaborativo.",
  },
  {
    title: "Kids y Juveniles",
    image: img3,
    alt: "Clases de jiu jitsu para niños y juveniles",
    description:
      "Clases enfocadas en desarrollar disciplina, coordinación y confianza, en un entorno seguro y controlado.",
  },
];

function WelcomeSection() {
  return (
    <section className={styles.section}>
      {/* HEADER */}

      <header className={styles.header}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>
            Academia <br /> Darkside BJJ
          </h2>

          <p className={styles.subtitle}>
            Nuestro sistema de entrenamiento combina acondicionamiento físico
            adaptado al alumno con una progresión técnica estructurada en
            niveles básico, intermedio y avanzado.
            <br />
            <br />
            A mediano plazo buscamos dominar el combate en el suelo, aplicar
            sumisiones con eficiencia y desarrollar un juego técnico sólido.
            <br />
            <br />A largo plazo formamos practicantes completos: avance de
            cinturones, experiencia competitiva, mentalidad fuerte y valores
            como disciplina, respeto y trabajo en equipo.
          </p>
        </div>

        <Gallery />
      </header>

      {/* CARDS */}
      <div className={styles.grid}>
        {programs.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
    </section>
  );
}

export default WelcomeSection;
