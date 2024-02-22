import React, { useState } from "react";

const Programming = () => {
  // Dropdown state handler
  const [isDropDownVisible, setDropDownVisible] = useState(false);

  // Toggle dropdown fn
  const toggleDropDown = () => {
    setDropDownVisible(!isDropDownVisible);
  };
  return (
    <div className="skills__content">
      {/* Programming Title and Dropdown */}
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

      {/* Programming Dropdown */}
      {isDropDownVisible && (
        <div
          className={`skills__box ${isDropDownVisible ? "expand" : "collapse"}`}
        >
          <div className="skills__group">
            {/* C */}
            <div className="skills__data">
              <div>
                <h3 className="skills__name">
                  C <i class="bx bxs-copyright skill__logo"></i>
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

            {/* C++ */}
            <div className="skills__data">
              <div>
                <h3 className="skills__name">
                  C++ <i class="bx bxl-c-plus-plus skill__logo"></i>
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

            {/* Python */}
            <div className="skills__data">
              <div>
                <h3 className="skills__name">
                  Python <i class="bx bxl-python skill__logo"></i>
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

export default Programming;
