import { ReactLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import "./certificate.css";
import Datas from "./Datas";

gsap.registerPlugin(ScrollTrigger);


const Certificate = () => {

  const triggerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.fromTo(
      triggerRef.current,
      { opacity: 0, y: 50 },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "65% 80%",
          scrub: true,
          // snap: 1 / 6,
          // markers: true,
        },
      }
    );
    return () => {
      tl.kill();
    };
  }, []);
  return (
    <ReactLenis root>
    <section ref={triggerRef} className="projects section" id="certification">
      <h2 className="section__title">Certificates</h2>
      <span className="section__subtitle"> Showcasing my certificates</span>
      <div className="project__container container">
        <Datas />
      </div>
    </section>
    </ReactLenis>
  );
};

export default Certificate;
