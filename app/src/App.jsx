import { useState } from "react";
import { Navbar, WelcomeSection, Projects, Contact } from "./components";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Sobre Mi" element={<WelcomeSection />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
