import React, { useState, useEffect } from "react";
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const renderScrollToTopButton = () => {
    if (isMobile && window.scrollY > 100) {
      return (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          Scroll to Top
        </button>
      );
    }
    return null;
  };

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
            <Slider sliderIndex={0} />
          )}
          {renderScrollToTopButton()}
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
