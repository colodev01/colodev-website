import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/data";

import './styles/Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-title">
        <h1>My projects</h1>
      </div>
      <div className="portfolio-content">
        {projects.map((project, index) => (
          <ProjectCard
            key={index} // Asegúrate de tener una clave única para cada componente
            image={project.image}
            projectName={project.name}
            color={project.color}
            language={project.language}
            description={project.description}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
