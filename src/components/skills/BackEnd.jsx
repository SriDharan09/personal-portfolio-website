import React, { useState } from "react";

const BackEnd = () => {
  // Toggle dropdown fn
  const [isDropDownVisible, setDropDownVisible] = useState(false);

  // Dropdown state handler
  const toggleDropDown = () => {
    setDropDownVisible(!isDropDownVisible);
  };

  return (
    <div className="skills__content" onClick={toggleDropDown}>
      {/* Backend Title and Dropdown */}
      <h3
        className={`skills__title ${isDropDownVisible ? "active__title" : ""}`}
      >
        <i class="bx bx-server"></i>Backend
        <div
          className={`dropdown ${
            isDropDownVisible ? "rotate-icon rotated" : "rotate-icon"
          }`}
        >
          <i class="bx bxs-chevrons-down" onClick={toggleDropDown}></i>
        </div>
      </h3>

      {/* Backend Dropdown */}
      {isDropDownVisible && (
        <div
          className={`skills__box ${isDropDownVisible ? "expand" : "collapse"}`}
        >
          <div className="skills__group">
            {/* Node */}
            <div className="skills__data">
              <div>
                <h3 className="skills__name">Node.js</h3>
                <div className="progress">
                  <div
                    className="progressBar"
                    role="progressbar"
                    style={{ width: "70%" }} // Adjust width according to skill level
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-percent">70%</span>{" "}
                </div>
              </div>
            </div>

            {/* Express */}
            <div className="skills__data">
              <div>
                <h3 className="skills__name">Express.js</h3>
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

            {/* Java */}
            <div className="skills__data">
              <div>
                <h3 className="skills__name">Java</h3>
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

            {/* Postman */}
            <div className="skills__data">
              <div>
                <h3 className="skills__name">Postman</h3>
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

            {/* Spring */}
            <div className="skills__data">
              <div>
                <h3 className="skills__name">Spring</h3>
                <div className="progress">
                  <div
                    className="progressBar"
                    role="progressbar"
                    style={{ width: "60%" }} // Adjust width according to skill level
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-percent">60%</span>
                </div>{" "}
              </div>
            </div>

            {/* Git */}
            <div className="skills__data">
              <div>
                <h3 className="skills__name">Git</h3>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default BackEnd;
