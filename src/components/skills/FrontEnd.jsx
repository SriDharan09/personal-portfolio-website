import React, { useState } from "react";

const FrontEnd = () => {
  // Dropdown state handler
  const [isDropDownVisible, setDropDownVisible] = useState(false);

  // Toggle dropdown fn
  const toggleDropDown = () => {
    setDropDownVisible(!isDropDownVisible);
  };

  return (
    <div className="skills__content ">
      {/* Frontend Title and Dropdown */}
      <h3
        onClick={toggleDropDown}
        className={`skills__title ${isDropDownVisible ? "active__title" : ""}`}
      >
        <i class="bx bx-code-block"></i> Frontend
        <div
          className={`dropdown ${
            isDropDownVisible ? "rotate-icon rotated" : "rotate-icon"
          }`}
        >
          <i class="bx bxs-chevrons-down"></i>
        </div>
      </h3>

      {/* Frontend Dropdown */}

      {isDropDownVisible && (
        <div
          className={`skills__box ${isDropDownVisible ? "expand" : "collapse"}`}
        >
          <div className="skills__group">
            {/* HTML */}
            <div className="skills__data">
              <div>
                <h3 className="skills__name">
                  HTML <i class="bx bxl-html5 skill__logo"></i>
                </h3>
                <div className="progress">
                  <div
                    className="progressBar"
                    role="progressbar"
                    style={{ width: "90%" }} // Adjust width according to skill level
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-percent">90%</span>
                </div>
              </div>
            </div>

            {/* CSS */}
            <div className="skills__data">
              <div>
                <h3 className="skills__name">
                  CSS <i class="bx bxl-css3 skill__logo"></i>
                </h3>
                <div className="progress">
                  <div
                    className="progressBar"
                    role="progressbar"
                    style={{ width: "80%" }} // Adjust width according to skill level
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-percent">80%</span>
                </div>
              </div>
            </div>

            {/* JS */}
            <div className="skills__data">
              <div>
                <h3 className="skills__name">
                  JS <i class="bx bxl-javascript skill__logo"></i>
                </h3>
                <div className="progress">
                  <div
                    className="progressBar"
                    role="progressbar"
                    style={{ width: "90%" }} // Adjust width according to skill level
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-percent">85%</span>
                </div>
              </div>
            </div>

            {/* React */}
            <div className="skills__data">
              <div>
                <h3 className="skills__name">
                  React.js <i class="bx bxl-react skill__logo"></i>
                </h3>
                <div className="progress">
                  <div
                    className="progressBar"
                    role="progressbar"
                    style={{ width: "70%" }} // Adjust width according to skill level
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-percent">70%</span>
                </div>
              </div>
            </div>

            {/* Bootstrap */}
            <div className="skills__data">
              <div>
                <h3 className="skills__name">
                  Bootstarp <i class="bx bxl-bootstrap skill__logo"></i>
                </h3>
                <div className="progress">
                  <div
                    className="progressBar"
                    role="progressbar"
                    style={{ width: "75%" }} // Adjust width according to skill level
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-percent">75%</span>
                </div>
              </div>
            </div>

            {/* jQuery */}
            <div className="skills__data">
              <div>
                <h3 className="skills__name">
                  jQuery <i class="bx bxl-jquery skill__logo"></i>
                </h3>
                <div className="progress">
                  <div
                    className="progressBar"
                    role="progressbar"
                    style={{ width: "80%" }} // Adjust width according to skill level
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-percent">80%</span>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrontEnd;
