import React, { useState, useEffect } from "react";
import { Home, About, Portfolio, Contact } from "../views/index";
import { Container, Col, Row } from "react-bootstrap";

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
    <Container className="container" fluid>
      <div className="slider-wrapper">
        <Col xs={true}>
          <div>
            <button type="button" className="prev-btn" onClick={prevSlide}>
              ❮
            </button>
          </div>
        </Col>
        <Col lg={true} className="fixed-width-column">
          <div className="slider-content">
            <div className="slides">
              {/* Renderizar diapositiva actual */}
              {currentSlide === 0 && <Home />}
              {currentSlide === 1 && <About />}
              {currentSlide === 2 && <Portfolio />}
              {currentSlide === 3 && <Contact />}
            </div>
          </div>
        </Col>
        <Col xs={true}>
          <div>
            <button type="button" className="next-btn" onClick={nextSlide}>
              ❯
            </button>
          </div>
        </Col>
      </div>
    </Container>
  );
};

export default Slider;
