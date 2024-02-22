import "./project.css";
import Carousel from "./Carousel";

// import { ReactLenis } from "@studio-freight/react-lenis";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

// gsap.registerPlugin(ScrollTrigger);

// props used for the carousel image to toggle btw dark and light mode
const Project = ({ toggleDarkMode, darkMode }) => {
  // // Scroll to reveal Animation
  // const triggerRef = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.fromTo(
  //     triggerRef.current,
  //     { opacity: 0, y: 50 },
  //     // {transform: 'translateY(15px)'},
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

  return (
    // <ReactLenis root>
    <section
      data-aos="zoom-in-right"
      data-aos-offset="150"
      data-aos-delay="25"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      // data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      //  ref={triggerRef}
      className="projects section"
      id="projects"
    >
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>
      <div className="project__container container">
        <Carousel toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
    </section>
    // </ReactLenis>
  );
};

export default Project;
