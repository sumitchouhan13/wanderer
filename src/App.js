import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import MainLandingPage from "./components/MainLandingPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function ThemeProvider({ children, theme }) {
  const dataTheme = theme === "light" ? "light" : "dark";
  return (
    <div className="theme-provider" data-theme={dataTheme}>
      {children}
    </div>
  );
}

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
      <Router>
        <ThemeProvider theme={theme}>
          {!showLandingScreen ? (
            <Navbar toggleTheme={toggleTheme} theme={theme} />
          ) : (
            ""
          )}
          <Routes>
            <Route
              exact
              path="/wanderer"
              element={
                showLandingScreen ? <LandingPage /> : <MainLandingPage />
              }
            ></Route>
            <Route path="/wanderer/home" element={<Home />}></Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
