import React, { useState, useEffect } from "react";
import { Home, About, Portfolio, Contact } from "../views/index";

import "./styles/Slider.css";

const Slider = ({ sliderIndex }) => {
  const [currentSlide, setCurrentSlide] = useState(sliderIndex);
  const totalSlides = 4;

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    setCurrentSlide(sliderIndex);
  }, [sliderIndex]);

  return (
    <div className="container">
      <div className="slider-wrapper">
        <div className="prev-column">
          <button type="button" className="prev-btn" onClick={prevSlide}>
            ❮
          </button>
        </div>
        <div className="slider-content">
          <div className="slides">
            <div className="slide">
              {currentSlide === 0 && <Home />}
              {currentSlide === 1 && <About />}
              {currentSlide === 2 && <Portfolio />}
              {currentSlide === 3 && <Contact />}
            </div>
          </div>
        </div>
        <div className="next-column">
          <button type="button" className="next-btn" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
