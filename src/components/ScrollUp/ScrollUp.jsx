import React, { useEffect } from "react";
import "./ScrollUp.css";

const ScrollUp = () => {

  // Scroll Up Button 
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const scrollup = document.querySelector(".scrollup");
        if (window.scrollY >= 560) scrollup.classList.add("show-scroll");
        else scrollup.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    typeof window !== "undefined" && (
      <a href="#home" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    )
  );
};

export default ScrollUp;
