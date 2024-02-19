import React, { useState } from "react";

const FrontEnd = () => {
  const [isDropDownVisible, setDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setDropDownVisible(!isDropDownVisible);
  };
  return (
    <div className="skills__content " onClick={toggleDropDown}>
      <h3 className="skills__title" >
        <i class="bx bx-code-block"></i> Frontend
        <div className="dropdown">
          <i class="bx bxs-chevrons-down"></i>
        </div>
      </h3>

      {isDropDownVisible && (
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <div>
                <h3 className="skills__name">HTML</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "100%" }} // Adjust width according to skill level
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-percent">100%</span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div>
                <h3 className="skills__name">CSS</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
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

            <div className="skills__data">
              <div>
                <h3 className="skills__name">JS</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
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

            <div className="skills__data">
              <div>
                <h3 className="skills__name">React.js</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
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

            <div className="skills__data">
              <div>
                <h3 className="skills__name">Bootstarp</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
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

            <div className="skills__data">
              <div>
                <h3 className="skills__name">jQuery</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
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
