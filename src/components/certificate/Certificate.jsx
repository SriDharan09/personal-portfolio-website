import React from "react";
import "./certificate.css";
import Datas from "./Datas";

const Certificate = () => {
  return (
    <section className="projects section" id="certification">
      <h2 className="section__title">Certificates</h2>
      <span className="section__subtitle"> Showcasing my certificates</span>
      <div className="project__container container">
        <Datas />
      </div>
    </section>
  );
};

export default Certificate;
