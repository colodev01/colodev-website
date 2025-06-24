import React from "react";
import experiences from "../data/experience.json";
import ExperienceCardBook from "../components/ExperienceCardBook";
import "./styles/ExperienceView.css";

const ExperienceView = () => {
  return (
    <section id="experience" className="experience-wrapper">
      <div className="experience-content">
        <h2 className="title animated-title">Experience</h2>
        <div className="divider animated-divider"></div>
        <p className="section-desc">Here's a collection of my archives that contain info about what I've done so far...</p>
        <p style={{color: "#877f7d"}} className="section-desc">(Click on the archives to open them)</p>
        <div className="experience-cards-scroll">
          {experiences.map((exp, idx) => (
            <ExperienceCardBook exp={exp} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceView;
