import React, { useState } from "react";

const BackEnd = () => {
  const [isDropDownVisible, setDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setDropDownVisible(!isDropDownVisible);
  };
  return (
    <div className="skills__content">
      <h3 className="skills__title" onClick={toggleDropDown}>
        <i class="bx bx-server"></i>Backend
        <div className="dropdown">
          <i class="bx bxs-chevrons-down"></i>
        </div>
      </h3>

      {isDropDownVisible && (
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <div>
                <h3 className="skills__name">Node.js</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }} // Adjust width according to skill level
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-percent">50%</span>{" "}
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div>
                <h3 className="skills__name">Express.js</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }} // Adjust width according to skill level
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-percent">50%</span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div>
                <h3 className="skills__name">Java</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }} // Adjust width according to skill level
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-percent">50%</span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div>
                <h3 className="skills__name">Postman</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }} // Adjust width according to skill level
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-percent">50%</span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div>
                <h3 className="skills__name">Spring</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }} // Adjust width according to skill level
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-percent">50%</span>
                </div>{" "}
              </div>
            </div>

            <div className="skills__data">
              <div>
                <h3 className="skills__name">Git</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }} // Adjust width according to skill level
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-percent">50%</span>
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