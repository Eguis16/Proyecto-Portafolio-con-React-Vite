import { useState, useEffect } from "react";
import React, { use } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection.jsx";
import ScheduleSection from "./components/ScheduleSection/schedulesection.jsx";
import Oss from "./components/VideoSection/oss.jsx";
import Footer from "./components/Footer/footer.jsx";
import "./styles/App.css";

function App() {
  const [showSchedule, setShowSchedule] = React.useState(false);
  useEffect(() => {
    if (showSchedule) {
      setTimeout(() => {
        const scheduleSection = document.getElementById("horarios");
        scheduleSection?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [showSchedule]);

  return (
    <div className="app">
      <Navbar setShowSchedule={setShowSchedule} showSchedule={showSchedule} />
      <main className="content">
        <WelcomeSection />
        <ScheduleSection />
        <Oss />
      </main>

      <Footer />
    </div>
  );
}

export default App;
