import React from "react";

import "./styles/SkillList.css";

const SkillList = ({ skills }) => {
  return (
    <div className="skills">
      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          <div className="skill-name">{skill.name}</div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${skill.level}%`,
                backgroundColor: skill.color,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
