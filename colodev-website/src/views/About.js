import React from "react";
import { skills, jobs } from "../data/data";
import Roadmap from "../components/Roadmap";
import SkillList from "../components/SkillList";

import "./styles/About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-item">
        <h3>Experience</h3>
        <Roadmap items={jobs} />
      </div>
      <div className="about-item">
        <div className="about-item__skill-item__hard">
          <div>
            <h3>Hard Skills</h3>
            <SkillList skills={skills} />
          </div>
        </div>
        <div className="about-item__skill-item__soft">
          <h3>Soft Skills</h3>
          <div className="soft-skills">
            <div className="soft-skills__item" data-tooltip="Friendly">
              <img src="/images/laugh_icon.png" alt="cooperative_icon.png" />
            </div>
            <div className="soft-skills__item" data-tooltip="Communicative">
              <img
                src="/images/communicative_icon.png"
                alt="cooperative_icon.png"
              />
            </div>
            <div className="soft-skills__item" data-tooltip="Cooperative">
              <img src="/images/helpful_icon.png" alt="cooperative_icon.png" />
            </div>
            <div className="soft-skills__item" data-tooltip="Problem Solving">
              <img
                src="/images/problem_solving_icon.png"
                alt="problem_solving_icon.png"
              />
            </div>
            <div className="soft-skills__item" data-tooltip="Creative">
              <img src="/images/creative_icon.png" alt="creative_icon.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
