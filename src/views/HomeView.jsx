import React, { useState, useEffect } from "react";
import "./styles/HomeView.css";

const HomeView = () => {
  return (
    <section id="home" className="home-wrapper">
      <div className="home-content">
        <div className="home-info">
          <div className="home-text">
            <h1 className="title">
              Hi! I'm <span className="highlight-name">Franco</span>
            </h1>
            <h2>
              <span className="sub-title">Information Systems Engineer</span>
            </h2>
            <p className="description">
              I create software with precision, purpose, and imagination.
            </p>
            <div className="home-buttons">
              <button className="download-cv-button">Download CV</button>
              <button className="contact-me-button">Contact Me</button>
            </div>
          </div>
        </div>

        <div className="home-image">
          <img src="/images/colo-dummy.png" alt="Franco Picture" />
        </div>
      </div>
    </section>
  );
};

export default HomeView;
