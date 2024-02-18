import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sridhar</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#Qualification" className="footer__link">
              Qualification
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://github.com/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://dribbble.com/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bx bxl-dribbble"></i>
          </a>
          <a
            href="https://dribbble.com/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bx bxl-facebook"></i>
          </a>
        </div>
        <span className="footer__copy">
          {new Date().getFullYear()} &#169; Sridhar. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
