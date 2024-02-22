// import { ReactLenis } from "@studio-freight/react-lenis";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useState } from "react";
import "./qualification.css";

// gsap.registerPlugin(ScrollTrigger);

const Qualification = ({ darkMode }) => {
  // // Scroll to reveal Animation
  // const triggerRef = useRef(null);
  // useEffect(() => {
  //   const tl = gsap.fromTo(
  //     triggerRef.current,
  //     { opacity: 0, y: 50 },
  //     {
  //       duration: 1,
  //       opacity: 1,
  //       y: 0,
  //       scrollTrigger: {
  //         trigger: triggerRef.current,
  //         start: "top center",
  //         end: "65% 80%",
  //         scrub: true,
  //         // snap: 1 / 6,
  //         // markers: true,
  //       },
  //     }
  //   );
  //   return () => {
  //     tl.kill();
  //   };
  // }, []);
  // // Scroll animation end

  // Toggle btw education and experience
  const [toggleState, setToggleState] = useState(1);

  // for pulsing effect to capture the state
  const [pulseTab, setPulseTab] = useState(2);

  // Based on index, toggle the tab
  const toggleTab = (index) => {
    if (index !== toggleState) {
      setToggleState(index);
      setPulseTab(index === 1 ? 2 : 1); // Update pulseTab based on toggled index
    }
  };

  //  on load set the default tab as toggle 2 (experience)
  useEffect(() => {
    // Set pulseTab to the default tab (Experience) when the component mounts
    console.log("Setting pulseTab to 2");
    setPulseTab(2);
  }, []);

  return (
    // <ReactLenis root>
    <section
      // ref={triggerRef}
      data-aos="zoom-in-up"
      data-aos-offset="150"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      // data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="qualification section"
      id="qualification"
    >
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        {/* Education and Experience title [toggle and pulse animation] */}
        <div className="qualification__tabs">
          {/* Education */}
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

          {/* Experience */}
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

        {/* Education section  */}
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* clg */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Electronics Engineer</h3>
                <span className="qualification__subtitle">
                  <a href="https://maps.app.goo.gl/sd51HL4C871LAC6R9">
                    Sastra Deemed to be University
                  </a>
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

              {/* HSC */}
              <div>
                <h3 className="qualification__title">HSC</h3>
                <span className="qualification__subtitle">
                  <a href="https://maps.app.goo.gl/GgTxZheTxLDxaUdQ7">
                    Town Higer Secondary school
                  </a>
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2019
                </div>
              </div>
            </div>

            {/* SSLC */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSLC</h3>
                <span className="qualification__subtitle">
                  <a href="https://maps.app.goo.gl/rwhdQAw9PGh9CTyN6">
                    Vallalar Higher Secondary School
                  </a>
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
            {/* Software Engineer */}
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

            {/* in-case of adding new experience */}
            {/* <div className="qualification__data">
                <div>
                  <span className="qualification__title"></span>
                  <span className="qualification__subtitle"></span>
                </div>

                <div>
                  <span className="qualification__rounder">
                    <span className="qualification__line"></span>
                  </span>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </section>
    // </ReactLenis>
  );
};

export default Qualification;
