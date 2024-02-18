import React from "react";
import "./project.css";
import Carousel from "./Carousel";

const Project = () => {
 
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>
      <div className="project__container container">
        <Carousel />
        
      </div>
    </section>
  );
};

export default Project;
