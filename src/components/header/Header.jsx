import React, { useState, useEffect } from "react";
import "./header.css";
import "./logo-animation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import cv from "../../local_assets/cv.pdf";

import { motion, useScroll } from "framer-motion";

const Header = ({ toggleDarkMode, darkMode }) => {
  // const spans = document.querySelectorAll(".word span");

  // onClick Animation for logo
  const animation = () => {
    const spans = document.querySelectorAll(".word span");

    spans.forEach((span, idx) => {
      span.addEventListener("click", (e) => {
        e.target.classList.add("active");
      });
      span.addEventListener("animationend", (e) => {
        e.target.classList.remove("active");
      });

      // Initial animation
      setTimeout(() => {
        span.classList.add("active");
      }, 750 * (idx + 1));
    });
  };

  // onMount Animation for Logo animation (only once)
  useEffect(() => {
    const spans = document.querySelectorAll(".word span");

    spans.forEach((span, idx) => {
      span.addEventListener("click", (e) => {
        e.target.classList.add("active");
      });
      span.addEventListener("animationend", (e) => {
        e.target.classList.remove("active");
      });

      // Initial animation
      setTimeout(() => {
        span.classList.add("active");
      }, 750 * (idx + 1));
    });

    return () => {
      spans.forEach((span) => {
        span.removeEventListener("click", () => {});
        span.removeEventListener("animationend", () => {});
      });
    };
  }, []);

  // Scroll position track
  const { scrollYProgress } = useScroll();

  // Header bottom shadow
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY >= 80) header.classList.add("show-header");
    else header.classList.remove("show-header");
  });

  //  Toggle Menu Function
  const [toggle, showMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  // auto active menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveNav(`#${section.id}`);
        }
      });
    };

    handleScroll(); // Initial call to set the initial active section
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mobile Menu
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
      {/* Progress bar In the top for large screens */}
      {!isMobile && (
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
      )}

      <div className="header">
        <nav
          className={`nav container ${isMobile && darkMode ? "dark-mode" : ""}`}
        >
          {/* Logo Span */}
          <div className="word nav__logoo">
            <span>S</span>
            <span>R</span>
            <span>I</span>
            <span>D</span>
            <span>H</span>
            <span>A</span>
            <span>R</span> &nbsp;
            <span className="dot" onClick={animation}>
              .
            </span>
          </div>

          {/* Nav Menu */}

          {/* Toggle btw upper and lower header */}
          <div className={`nav__menu ${toggle ? "show-menu" : ""}`}>
            <ul className="nav__list grid">
              {/* Home */}
              <li className="nav__item">
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={
                    activeNav === "#home"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-estate nav__icon active_link"></i>
                  Home
                </a>
              </li>

              {/* About */}
              <li className="nav__item">
                <a
                  onClick={() => setActiveNav("#about")}
                  href="#about"
                  className={
                    activeNav === "#about"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-user nav__icon"></i>
                  About
                </a>
              </li>

              {/* Skills */}
              <li className="nav__item">
                <a
                  href="#skills"
                  className={
                    activeNav === "#skills"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                  onClick={() => setActiveNav("#skills")}
                >
                  <i className="uil uil-file-alt nav__icon"></i>
                  Skills
                </a>
              </li>

              {/* Qualification */}
              <li className="nav__item">
                <a
                  href="#qualification"
                  className={
                    activeNav === "#qualification"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                  onClick={() => setActiveNav("#qualification")}
                >
                  <i className="uil uil-briefcase-alt nav__icon"></i>
                  Qualification
                </a>
              </li>

              {/* Projects */}
              <li className="nav__item">
                <a
                  href="#projects"
                  className={
                    activeNav === "#projects"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                  onClick={() => setActiveNav("#projects")}
                >
                  <i class="uil uil-microscope nav__icon"></i>
                  Projects
                </a>
              </li>

              {/* Certifications */}
              <li className="nav__item">
                <a
                  href="#certification"
                  className={
                    activeNav === "#certification"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                  onClick={() => setActiveNav("#certification")}
                >
                  <i className="uil uil-scenery nav__icon"></i>
                  Certifications
                </a>
              </li>

              {/* Contact */}
              <li className="nav__item">
                <a
                  href="#contact"
                  className={
                    activeNav === "#contact"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                  onClick={() => setActiveNav("#contact")}
                >
                  <i className="uil uil-message nav__icon"></i>
                  Contact
                </a>
              </li>

              {isMobile && (
                <li className="nav__item">
                  <a href={cv} download="" className="nav__link">
                    <i class="uil uil-file-download nav__icon"></i>
                    Download CV
                  </a>
                </li>
              )}
            </ul>

            {/* Close icon  */}
            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(!toggle)}
            ></i>

            {/*  Dark mode button */}
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
            {/* Icon for dark mode and light mode */}
            <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
            <span className="ball"></span>
          </label>

          {/* Mobile toggle */}
          <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
            <i class="uis uis-list-ui-alt"></i>
          </div>
        </nav>

        {/* Progress bar in the bottom for small Screen  */}
        {isMobile && (
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
        )}
      </div>
    </>
  );
};

export default Header;
