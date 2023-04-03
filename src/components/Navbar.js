import React from "react";
import { useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar(prop) {
  const [showDropdown, setShowDropdown] = useState(false);
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
        <div className="navbar-button-style">
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
          </li>
        </div>
        <div className="navbar-button-style">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About
            </Link>
          </li>
        </div>
        <div className="navbar-button-style">
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
