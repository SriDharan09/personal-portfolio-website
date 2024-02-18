import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import certificate1 from "../../local_assets/Udemy_Certificate.jpg";
import certificate2 from "../../local_assets/Python Certificate Udemy.jpg";

const Datas = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img
            src={certificate1}
            className="certificate__image"
            alt="Project 1"
          />
        </div>
        <div className="carousel-slide">
          <img
            src={certificate2}
            className="certificate__image"
            alt="Project 2"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Datas;
