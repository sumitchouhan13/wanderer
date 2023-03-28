import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

function Navbar(prop) {
  const [activeButton, setActiveButton] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const handleChange = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: prop.theme === "light" ? "#ffffff" : "#1f1f1f",
      }}
    >
      <div className="navbar-heading">Wanderer</div>
      <div className="icon-container">
        <div style={{ margin: "10px" }}>
          <div
            className={prop.theme === "light" ? "light" : "dark"}
            onClick={prop.toggleTheme}
          >
            {prop.theme === "light" ? (
              <FaMoon className="icon-size" />
            ) : (
              <FaSun className="icon-size" />
            )}
          </div>
        </div>
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
          onClick={() => handleChange("home")}
        >
          <li>
            <Link to="/wanderer/home">Home</Link>
          </li>
        </div>
        <div
          className={`navbar-button-style ${
            activeButton === "about" ? "navbar-button-active" : ""
          }`}
          onClick={() => handleChange("about")}
        >
          <li>
            <Link to="/wanderer/home">About</Link>
          </li>
        </div>
        <div
          className={`navbar-button-style ${
            activeButton === "contact" ? "navbar-button-active" : ""
          }`}
          onClick={() => handleChange("contact")}
        >
          <li>
            <Link to="/wanderer/home">Contact</Link>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
