import React, { useState, useEffect } from "react";
import "./styles/HomeView.css";

const HomeView = () => {
  return (
    <section id="home" className="home-wrapper">
      <div className="home-content">
        <div className="home-info">
          <div className="home-text">
            <div className="text-group">
              <h1 className="home-title">
                Hi! I'm <span className="highlight-name">Franco</span>
              </h1>
              <div className="subtitle-container">
                <span className="subtitle-text">
                  Information Systems Engineer
                </span>
              </div>
              <p className="description">
                I create software with precision, purpose, and imagination.
              </p>
            </div>
            <div className="home-buttons">
              <button className="download-cv-button">Download CV</button>
              <button className="contact-me-button">Contact Me</button>
            </div>
          </div>
        </div>

        <div className="home-image">
          <div className="image-wrapper">
            <img src="/images/franco-home.png" alt="Franco Picture" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeView;
