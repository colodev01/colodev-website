import React from "react";
import "./styles/ProjectCard.css";

const ProjectCard = ({ image, projectName, language, color, description, repoUrl }) => {
  return (
    <div className="project-card">
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="project-language" style={{ backgroundColor: color }}>
          <p>{language}</p>
        </div>
        <div className="project-name">
          <p>{projectName}</p>
        </div>
        <div className="project-description">
          <p>{description}</p>
          {repoUrl ? (
            <a href={repoUrl}>Go to repository ➤</a>
          ) : (
            <p>Private repo 🔒</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
