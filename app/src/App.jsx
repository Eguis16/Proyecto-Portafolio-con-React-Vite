import { useState } from "react";
import {
  Navbar,
  WelcomeSection,
  Projects,
  Contact,
  CoverParticles,
} from "./components";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative">
      {/* Fondo animado */}
      <CoverParticles />

      {/* Navbar siempre visible */}
      <Navbar />

      {/* Rutas de contenido */}
      <Routes>
        <Route path="/sobre mi" element={<WelcomeSection />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
