import React from "react";
import experiences from "../data/experience.json";
import "./styles/ExperienceView.css";

const ExperienceView = () => {
  return (
    <section id="experience" className="experience-wrapper">
      <div className="experience-content">
        <h2 className="title animated-title">Experience.</h2>
        <div className="divider animated-divider"></div>
        <p className="experience-description">
          Here's a collection of my archives that contain info about what I've done so far...
        </p>
        <p style={{ color: "#877f7d" }} className="experience-description">
        </p>
        <div className="experience-cards-grid">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card">
              <h3 className="experience-role">{exp.role}</h3>
              <h4 className="experience-company">{exp.company}</h4>
              <p className="experience-date">{exp.date}</p>
              <p className="experience-description">{exp.description}</p>
              {exp.technologies.map((tech, idx) => (
                <p className="tech-tag">{tech}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceView;
