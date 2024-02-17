import { React, useState } from "react";
import { Slider, Header } from "./components";

import "./App.css";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="App">
      <Header showSlide={handleSlideChange} />
      <main className="main-wrapper">
        <Slider sliderIndex={currentSlide} />
      </main>
    </div>
  );
}

export default App;
