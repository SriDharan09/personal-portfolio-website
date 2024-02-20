import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./skills.css";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Programming from "./Programming";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const skillsRef = useRef(null);

  useEffect(() => {
    const element = skillsRef.current;

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const elementPosition = element.offsetTop + element.offsetHeight;

      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    const animateSkills = async () => {
      await controls.start({ opacity: 1, y: 0 });
    };

    if (isVisible) {
      animateSkills();
      window.removeEventListener("scroll", handleScroll);
    } else {
      controls.start({ opacity: 0, y: 50 }); // Reset animation if scrolled out of view
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, controls]);

  return (
    <motion.div
      ref={skillsRef}
      className="skills section"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical skills level</span>

      <div className="skills__container container">
        <FrontEnd />
        <BackEnd />
        <Programming />
      </div>
    </motion.div>
  );
};

export default Skills;
