import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

const Info = () => {
  // State handler for counter
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  // Based on Scroll Position, toggle the counter
  useEffect(() => {
    const handleScroll = () => {
      const elementPosition = counterRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const activatedScrollPosition = windowHeight - 100;

      if (elementPosition < activatedScrollPosition && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  //

  return (
    <div className="about__info grid">
      {/*  */}

      {/* Years of coding #1*/}
      <div className="about__box">
        <span ref={counterRef} className="about__subtitle about__counter">
          {isVisible && (
            <CountUp end={2} duration={3} start={100} suffix=" + " />
          )}
        </span>
        <h3 className="about__title">Years of coding</h3>
      </div>

      {/* Completed projects #2 */}
      <div className="about__box">
        <span ref={counterRef} className="about__subtitle about__counter">
          {isVisible && (
            <CountUp end={6} duration={3} start={100} suffix=" + " />
          )}
        </span>

        <h3 className="about__title">Completed projects</h3>
      </div>

      {/* Certifications #3 */}
      <div className="about__box">
        <span ref={counterRef} className="about__subtitle about__counter">
          {isVisible && (
            <CountUp end={2} duration={3} start={100} suffix=" + " />
          )}
        </span>

        <h3 className="about__title">Certification & Courses</h3>
      </div>

      {/*  */}
    </div>
  );
};

export default Info;
