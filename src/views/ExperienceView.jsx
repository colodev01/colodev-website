import React from "react";
import experiences from "../data/experience.json";
import "./styles/ExperienceView.css";

const ExperienceCard = ({ exp }) => (
  <div className="experience-card-wrapper">
    <div className="timeline-line" />
    <div className="timeline-dot">
      <img src={exp.logo} alt="logo" />
    </div>
    <div className="experience-card">
      <h3 className="experience-role">{exp.role}</h3>
      <p className="experience-company">{exp.company}</p>
      <p className="experience-time">⌛ {exp.time}</p>
      <p className="experience-description">{exp.description}</p>
      <div className="experience-tags">
        {exp.technologies.map((tech, idx) => (
          <span key={idx} className="experience-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ExperienceView = () => {
  return (
    <div className="experience-container">
      <h2 className="experience-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <ExperienceCard exp={exp} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceView;
