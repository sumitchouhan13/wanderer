import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import MainLandingPage from "./components/MainLandingPage";
import Navbar from "./components/Navbar";

function App() {
  const [showLandingScreen, setShowLandingScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLandingScreen(false);
    }, 4000);
  }, []);
  return (
    <>
      {showLandingScreen ? (
        <LandingPage />
      ) : (
        <>
          <Navbar />
          <MainLandingPage />
        </>
      )}
    </>
  );
}

export default App;
