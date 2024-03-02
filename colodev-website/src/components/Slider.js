import React, { useState, useEffect } from "react";
import { Home, About, Portfolio, Blog } from "../views/index";
import { Routes, Route, Navigate } from "react-router-dom";

import "./styles/Slider.css";

const Slider = ({ sliderIndex }) => {
  const [currentSlide, setCurrentSlide] = useState(sliderIndex);
  const totalSlides = 4;

  const goToSlide = (slideIndex) => {
    console.log("asdasd",slideIndex);
    if (slideIndex >= 0 && slideIndex < totalSlides) {
      console.log(slideIndex)
      setCurrentSlide(slideIndex);
    }
  };

  const prevSlide = () => {
    console.log("prev")
    goToSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    console.log("next")
    goToSlide(currentSlide + 1);
  };

  useEffect(() => {
    setCurrentSlide(sliderIndex);
  }, [sliderIndex]);

  return (
    <div className="container">
      <div className="slider-wrapper">
        <div className="prev-column">
          <button
            type="button"
            className="prev-btn"
            onClick={prevSlide}
            disabled={currentSlide === 0} // Disable button if on the first slide
          >
            ❮
          </button>
        </div>
        <div className="slider-content">
          <Routes>
            <Route id={0} path="/home" element={<Home />} />
            <Route id={1} path="/about" element={<About />} />
            <Route id={2} path="/portfolio" element={<Portfolio />} />
            <Route id={3} path="/blog" element={<Blog />} />
          </Routes>
          {/* Navigate to the corresponding route based on currentSlide */}
          {currentSlide === 0 && <Navigate to="/home" />}
          {currentSlide === 1 && <Navigate to="/about" />}
          {currentSlide === 2 && <Navigate to="/portfolio" />}
          {currentSlide === 3 && <Navigate to="/blog" />}
        </div>
        <div className="next-column">
          <button
            type="button"
            className="next-btn"
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1} // Disable button if on the last slide
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
