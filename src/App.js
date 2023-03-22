import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import MainLandingPage from "./components/MainLandingPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [showLandingScreen, setShowLandingScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLandingScreen(false);
    }, 4000);
  }, []);
  return (
    <>
      <Router>
        {!showLandingScreen ? <Navbar /> : ""}
        <Routes>
          <Route
            exact
            path="/"
            element={showLandingScreen ? <LandingPage /> : <MainLandingPage />}
          ></Route>
          <Route exact path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
