import React from "react";
import "./styles/ProjectCard.css";

const ProjectCard = ({ image, projectName, language, color }) => {
  return (
    <div className="project-card">
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="project-language" style={{ backgroundColor: color }}>
          <p>{language}</p>
        </div>
        <div className="project-name">
          <p>{projectName}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
