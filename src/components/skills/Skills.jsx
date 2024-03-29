// import { ReactLenis } from "@studio-freight/react-lenis";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

import "./skills.css";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Programming from "./Programming";

// gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
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

  return (
    // <ReactLenis root>
    <section
      // ref={triggerRef}
      data-aos="zoom-in-right"
      data-aos-offset="150"
      data-aos-delay="50"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      // data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="skills section"
      id="skills"
    >
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical skills level</span>

      <div className="skills__container contianer">
        <FrontEnd />
        <BackEnd />
        <Programming />
      </div>
    </section>
    // </ReactLenis>
  );
};

export default Skills;
