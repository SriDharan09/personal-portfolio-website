import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profileLight from "../../local_assets/profile-light.jpg";
import profileDark from "../../local_assets/profile-dark.jpg";

import webpage from "../../local_assets/webpage_enchantique.jpg";
import project1 from "../../local_assets/project1.png";
import project2 from "../../local_assets/project2.jpeg";

const Carousel = ({ toggleDarkMode, darkMode }) => {
  // Toggle btw light and dark mode images
  const image = darkMode ? profileLight : profileDark;

  // Settings for Auto Play Carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {/* Slide 1 E-commerce */}
        <div className="carousel-slide">
          <div className="project__container">
            <div className="carousel-content">
              <h3 className="project__title">E-commerce Frontend site</h3>
              <p className="section__subtitle">
                Developed a dynamic web application using React and Bootstrap to
                create a modern and responsive user interface.
              </p>

              <div className="buttons">
                <a href="https://github.com/SriDharan09/Front_End-Ecommerce_Site">
                  <button className="btn">
                    <i className="uil uil-github-alt"></i> &nbsp; Repo
                  </button>
                </a>

                <a href="https://enchantique-store.netlify.app/">
                  <button className="btn">
                    <i className="uil uil-link-alt"></i> &nbsp; Demo
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-image">
              <img src={webpage} className="project__image" alt="project 1" />
            </div>
          </div>
        </div>

        {/* Slide 2 Personal Portfolio */}
        <div className="carousel-slide">
          <div className="project__container">
            <div className="carousel-content">
              <h2 className="project__title">Personal Portfolio</h2>
              <p className="section__subtitle">
                A personal portfolio that I developed using React.
              </p>
              <div className="buttons">
                <a href="https://github.com/SriDharan09/personal-portfolio-website">
                  <button className="btn">
                    <i className="uil uil-github-alt"></i> &nbsp; Repo
                  </button>
                </a>

                <a href="https://sridhar-portfolio-site.netlify.app/">
                  <button className="btn">
                    <i className="uil uil-link-alt"></i> &nbsp; Demo
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-image">
              <img src={image} className="project__image" alt="project 2" />
            </div>
          </div>
        </div>

        {/* Slide 3 Speech emotion */}
        <div className="carousel-slide">
          <div className="project__container">
            <div className="carousel-content">
              <h2 className="project__title">
                Speech emotion recognition using AI
              </h2>
              <p className="section__subtitle">
                Speech emotion recognition is a machine learning technique that
                recognise the emotions in the voice.
              </p>
              <div className="buttons">
                <a href="https://github.com/SriDharan09/Speech-emotion-Recognition-Deep-learning">
                  <button className="btn">
                    <i className="uil uil-github-alt"></i> &nbsp; Repo
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-image">
              <img src={project1} className="project__image" alt="project 3" />
            </div>
          </div>
        </div>

        {/* Slide 4 Ensemble chronic disease */}
        <div className="carousel-slide">
          <div className="project__container">
            <div className="carousel-content">
              <h2 className="project__title">
                Ensemble chronic disease prediction
              </h2>
              <p className="section__subtitle">
                Chronic disease prediction using machine learning techniques and
                algorithms
              </p>
              <div className="buttons">
                <a href="https://github.com/SriDharan09/An-Ensemble-based-MLmodel-for-chronic-disease">
                  <button className="btn">
                    <i className="uil uil-github-alt"></i> &nbsp; Repo
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-image">
              <img src={project2} className="project__image" alt="project 4" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
