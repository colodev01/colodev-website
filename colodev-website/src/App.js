import logo from "./logo.svg";
import "./App.css";
import { About, Contact, Header, Home, Portfolio } from "./components";
import { useState } from "react";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // Definir totalSlides aquí

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

  const slideWidth = 100 / totalSlides; // Calcular el ancho de cada diapositiva

  return (
    <div className="App">
      <Header showSlide={setCurrentSlide} />
      <div className="slider-container">
        <div className="slides">
          {/* Renderizar diapositiva actual */}
          {currentSlide === 0 && <Home />}
          {currentSlide === 1 && <About />}
          {currentSlide === 2 && <Portfolio />}
          {currentSlide === 3 && <Contact />}
        </div>
      </div>
      {/* Botones de navegación */}
      <button type="button" className="prev-btn" onClick={prevSlide}>
        ❮
      </button>
      <button type="button" className="next-btn" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}

export default App;
