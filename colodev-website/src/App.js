import { React, useState, useEffect } from "react";
import { Slider, Header } from "./components";
import { BrowserRouter } from "react-router-dom";
import { About, Blog, Home, Portfolio } from "./views";

import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`App ${isMobile ? "mobile" : ""}`}>
      <BrowserRouter>
        <Header />
        <main className={`main-wrapper ${isMobile ? "mobile" : ""}`}>
          {isMobile ? (
            <>
              <Home />
              <About />
              <Portfolio />
              <Blog />
            </>
          ) : (
            <Slider sliderIndex={0}/>
          )}
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
