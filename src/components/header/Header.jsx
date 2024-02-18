import React, { useState, useEffect } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = ({ toggleDarkMode, darkMode }) => {
  //  Toggle Menu Function
  const [toggle, showMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the screen size threshold as needed
    };

    handleResize(); // Initial call to set the initial state
    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup the event listener
    };
  }, []);

  return (
    <>
      <div className="header">
        <nav
          className={`nav container ${isMobile && darkMode ? "dark-mode" : ""}`}
        >
          <a href="index.html" className="nav__logo">
            Sridhar
          </a>
          <div className={`nav__menu ${toggle ? "show-menu" : ""}`}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="uil uil-estate nav__icon active_link"></i>
                  Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-user nav__icon"></i>
                  About
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon"></i>
                  Skills
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="uil uil-briefcase-alt nav__icon"></i>
                  Service
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="uil uil-scenery nav__icon"></i>
                  Portfolio
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-message nav__icon"></i>
                  Contact
                </a>
              </li>
            </ul>

            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(!toggle)}
            ></i>
          </div>
          <input
            type="checkbox"
            className="dark-mode-toggle checkbox"
            id="dark-mode-toggle checkbox"
            onChange={toggleDarkMode}
            checked={darkMode}
          />
          <label
            htmlFor="dark-mode-toggle checkbox"
            className="dark-mode-label checkbox-label"
          >
            <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
            <span className="ball"></span>
          </label>

          <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
            <i class="uis uis-list-ui-alt"></i>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
