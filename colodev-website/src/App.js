import { React, useState } from "react";
import { Slider, Header } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header showSlide={handleSlideChange} />
        <Routes>
          <Route path="/" />
          <Route path="/about" />
          <Route path="/portfolio" />
          <Route path="/blog" />
        </Routes>
      </BrowserRouter>
      <main className="main-wrapper">
        <Slider sliderIndex={currentSlide} />
      </main>
    </div>
  );
}

export default App;
