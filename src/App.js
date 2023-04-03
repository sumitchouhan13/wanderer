import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import MainLandingPage from "./components/MainLandingPage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [showLandingScreen, setShowLandingScreen] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === null
      ? "light"
      : localStorage.getItem("theme")
  );
  useEffect(() => {
    setTimeout(() => {
      setShowLandingScreen(false);
    }, 4000);
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {showLandingScreen ? (
        <LandingPage />
      ) : (
        <>
          <Navbar toggleTheme={toggleTheme} theme={theme} />
          <MainLandingPage />
          <About />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
