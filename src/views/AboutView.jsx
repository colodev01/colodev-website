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
  FaJava,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const iconsSize = 50;

const cardsData = [
  {
    icon: <FaUser size={iconsSize}/>,
    title: "Who am I",
    description: "Engineer from Mendoza passionate about building smooth, user-first apps.",
  },
  {
    icon: <FaCode size={iconsSize}/>,
    title: "What I do",
    description: "Full-stack dev with React, Node.js & Python. I love clean code & creative UI.",
  },
  {
    icon: <FaRocket size={iconsSize}/>,
    title: "My Vision",
    description:
      "To build meaningful, scalable solutions and grow through collaboration.",
  },
  {
    icon: <FaGear size={iconsSize}/>,
    title: "How I Work",
    description: "Agile mindset, test-driven, team-focused. Always learning. Always shipping.",
  }
];

const AboutView = () => {
  return (
    <section id="about" className="about-view-wrapper">
      <div className="about-view-content">
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
    </section>
  );
};

export default AboutView;
