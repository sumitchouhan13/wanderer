import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MainLandingPage from "./components/MainLandingPage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Itinerary from "./components/Itinerary";

function App() {
  const [showLandingScreen, setShowLandingScreen] = useState(
    sessionStorage.getItem("visited") === null
  );
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === null
      ? "light"
      : localStorage.getItem("theme")
  );
  useEffect(() => {
    setTimeout(() => {
      setShowLandingScreen(false);
      sessionStorage.setItem("visited", true);
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
      <>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              showLandingScreen ? (
                <LandingPage />
              ) : (
                <>
                  <MainLandingPage />
                  <About />
                  <Contact />
                </>
              )
            }
          />
          <Route path="/itinerary" element={<Itinerary />} />
        </Routes>
        <Footer />
      </>
    </>
  );
}

export default App;
