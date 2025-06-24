import React, { useState } from "react";
import "./styles/ExperienceCardBook.css";

const ExperienceCardBook = ({ exp }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`experience-card-modern ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setOpen(!open);
      }}
      aria-expanded={open}
      aria-label={`Detalles de la experiencia en ${exp.company}`}
    >
      <div className="logo-wrapper">
        <img src={exp.logo} alt={`${exp.company} logo`} className="logo-img" />
        <h3 className="experience-role">{exp.role}</h3>
      </div>
      <div className="experience-info">
        <p className="experience-company">{exp.company}</p>
        <p className="experience-time">⌛ {exp.time}</p>
        <p className="experience-desc">{exp.description}</p>
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
};

export default ExperienceCardBook;
