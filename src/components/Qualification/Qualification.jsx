import React, { useState, useEffect } from "react";
import "./qualification.css";

const Qualification = ({ darkMode }) => {
  const [toggleState, setToggleState] = useState(1);
  const [pulseTab, setPulseTab] = useState(2);

  const toggleTab = (index) => {
    if (index !== toggleState) {
      setToggleState(index);
      setPulseTab(index === 1 ? 2 : 1); // Update pulseTab based on toggled index
    }
  };

  useEffect(() => {
    // Set pulseTab to the default tab (Experience) when the component mounts
    console.log("Setting pulseTab to 2");
    setPulseTab(2);
  }, []);

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? `qualification__button qualification__active button--flex `
                : `qualification__button button--flex ${
                    pulseTab === 1 && darkMode ? "pulse-dark" : "pulse"
                  }`
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? `qualification__button qualification__active button--flex`
                : `qualification__button button--flex ${
                    pulseTab === 2 && darkMode ? "pulse-dark" : "pulse"
                  }`
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Electronics Engineer</h3>
                <span className="qualification__subtitle">
                  Sastra Deemed to be University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">HSC</h3>
                <span className="qualification__subtitle">
                  Town Higer Secondary school
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2019
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSLC</h3>
                <span className="qualification__subtitle">
                  Vallalar Higher Secondary School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2016 - 2017
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* Work experience */}

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">
                  i-exceed technologogy solutions
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2024 - present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <span className="qualification__title"></span>
                <span className="qualification__subtitle"></span>
              </div>

              <div>
                <span className="qualification__rounder">
                  <span className="qualification__line"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
