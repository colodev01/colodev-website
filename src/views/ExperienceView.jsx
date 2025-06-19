import React from "react";
import experiences from "../data/experience.json";
import "./styles/ExperienceView.css";

const ExperienceCard = ({ exp }) => (
  <div className="experience-card-modern">
    <div className="logo-wrapper">
      <img src={exp.logo} alt="logo" className="logo-img" />
    </div>
    <div className="experience-info">
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
    <section id="experience" className="experience-wrapper">
      <div className="experience-content">
        <h2 className="title animated-title">Experience</h2>
        <div className="divider animated-divider"></div>
        <div className="experience-cards-scroll">
          {experiences.map((exp, idx) => (
            <ExperienceCard exp={exp} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceView;
