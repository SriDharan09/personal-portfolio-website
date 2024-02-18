import React from "react";
import "./skills.css";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Programming from "./Programming";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical skills level</span>

      <div className="skills__container contianer">
        <FrontEnd />
        <BackEnd />
        <Programming />
      </div>
    </section>
  );
};

export default Skills;
