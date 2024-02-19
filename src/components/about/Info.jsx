import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

const Info = () => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

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
      <div className="about__box">
        <span ref={counterRef} className="about__subtitle about__counter">
          {isVisible && <CountUp end={2} duration={3} />}
        </span>
        <h3 className="about__title">Years of coding</h3>
      </div>

      <div className="about__box">
        <span ref={counterRef} className="about__subtitle about__counter">
          {isVisible && <CountUp end={6} duration={3} />}
        </span>

        <h3 className="about__title">Completed projects</h3>
      </div>

      <div className="about__box">
        <span ref={counterRef} className="about__subtitle about__counter">
          {isVisible && <CountUp end={2} duration={3} />}
        </span>

        <h3 className="about__title">Certification & Courses</h3>
      </div>
    </div>
  );
};

export default Info;
