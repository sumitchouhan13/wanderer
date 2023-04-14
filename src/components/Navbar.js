import React from "react";
import { useState, useEffect } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";
import Travel_Itinerary from "../images/travel-itinerary.png";
import { Link as RouterLink, useLocation } from "react-router-dom";

function Navbar(prop) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/itinerary") {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }, [pathname]);
  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: prop.theme === "light" ? "#ffffff" : "#1f1f1f",
      }}
    >
      <div className="navbar-heading">
        <RouterLink to="/">Wanderer</RouterLink>
      </div>
      <div className="icon-container">
        <div
          className={`${
            !showMenu
              ? "icon-container-inner-icon-no-show-div"
              : "icon-container-inner-icon-div"
          }`}
        >
          <div
            className={`${
              prop.theme === "light" ? "light" : "dark"
            } icon-container-inner`}
            onClick={prop.toggleTheme}
          >
            {prop.theme === "light" ? (
              <FaMoon className="icon-size" />
            ) : (
              <FaSun className="icon-size" />
            )}
          </div>
          <div>
            <RouterLink to="/itinerary">
              <img
                src={Travel_Itinerary}
                alt="travel_itinerary"
                className="travel_itinerary_icon"
              />
            </RouterLink>
          </div>
        </div>
        {showMenu && (
          <div
            className="hamburger-icon"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaBars />
          </div>
        )}
      </div>
      {showMenu && (
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
      )}
    </nav>
  );
}

export default Navbar;
