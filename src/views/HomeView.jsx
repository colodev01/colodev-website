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
              I build fullstack software solutions and explore how to integrate
              Web3 into the digital future.
            </p>
            <div className="home-buttons">
              <button className="download-cv-button">Download CV</button>
              <button className="contact-me-button">Contact Me</button>
            </div>
          </div>
        </div>

        <div className="home-image">
          <img src="/images/profile-picture.jpg" alt="Franco Picture" />
        </div>
      </div>
    </section>
  );
};

export default HomeView;
