import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [activeButton, setActiveButton] = useState("home");
  return (
    <nav className="navbar">
      <div className="navbar-heading">Wanderer</div>
      <div className="navbar-buttons">
        <div
          className={`navbar-button-style ${
            activeButton === "home" ? "navbar-button-active" : ""
          }`}
          onClick={() => setActiveButton("home")}
        >
          <li>
            <Link to="/home">Home</Link>
          </li>
        </div>
        <div
          className={`navbar-button-style ${
            activeButton === "about" ? "navbar-button-active" : ""
          }`}
          onClick={() => setActiveButton("about")}
        >
          <li>
            <Link to="/home">About</Link>
          </li>
        </div>
        <div
          className={`navbar-button-style ${
            activeButton === "contact" ? "navbar-button-active" : ""
          }`}
          onClick={() => setActiveButton("contact")}
        >
          <li>
            <Link to="/home">Contact</Link>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
