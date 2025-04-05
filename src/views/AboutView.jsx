import React, { useEffect, useState } from "react";
import "./styles/AboutView.css";
import {
  FaUser,
  FaCode,
  FaRocket,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJava
} from "react-icons/fa";

const cardsData = [
  {
    icon: <FaUser />,
    title: "About Me",
    description: "Information Systems Engineer from Mendoza, Argentina.",
  },
  {
    icon: <FaCode />,
    title: "My Hobbies",
    description: "Drawing, calisthenics and playing video games.",
  },
  {
    icon: <FaRocket />,
    title: "My Goals",
    description:
      "Building innovative and scalable applications. Create solutions.",
  },
];

const AboutView = () => {
  return (
    <div className="about-view-wrapper">
      <h1 className="about-view-title">About Me</h1>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div key={index} className="card visible">
            <div className="card-icon">{card.icon}</div>
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
            <div className="shine"></div>
          </div>
        ))}
      </div>

      {/* Íconos en fila con animación de crecimiento */}
      <div className="tech-icons-container">
        <div className="tech-icons-title">
          <p>Techonologies I use:</p>
        </div>
        <div className="tech-icons-content">
          <FaPython className="tech-icon" size="50px" />
          <FaReact className="tech-icon" size="50px" />
          <FaNodeJs className="tech-icon" size="50px" />
          <FaGitAlt className="tech-icon" size="50px" />
          <FaJava className="tech-icon" size="50px" />
        </div>
      </div>
    </div>
  );
};

export default AboutView;
