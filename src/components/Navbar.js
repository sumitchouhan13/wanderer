import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [activeButton, setActiveButton] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-heading">Wanderer</div>
      <div className="icon-container">
        <div
          className="hamburger-icon"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FaBars />
        </div>
      </div>
      <div
        className={`navbar-buttons ${
          showDropdown ? "navbar-buttons-show" : ""
        }`}
      >
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
