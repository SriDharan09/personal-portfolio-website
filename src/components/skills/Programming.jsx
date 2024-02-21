import React, { useState } from "react";

const Programming = () => {
  const [isDropDownVisible, setDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setDropDownVisible(!isDropDownVisible);
  };
  return (
    <div className="skills__content">
      <h3
        className={`skills__title ${isDropDownVisible ? "active__title" : ""}`}
        onClick={toggleDropDown}
      >
        <i class="bx bxl-product-hunt"></i> Programming
        <div
          className={`dropdown ${
            isDropDownVisible ? "rotate-icon rotated" : "rotate-icon"
          }`}
        >
          <i class="bx bxs-chevrons-down"></i>
        </div>
      </h3>

      {isDropDownVisible && (
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <div>
                <h3 className="skills__name">C</h3>
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

            <div className="skills__data">
              <div>
                <h3 className="skills__name">C++</h3>
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

            <div className="skills__data">
              <div>
                <h3 className="skills__name">Python</h3>
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
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Programming;
