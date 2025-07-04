import React, { useState } from "react";
import projects from "../data/projects.json";
import "./styles/ProjectsView.css";

const ProjectsView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const nextProject = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  return (
    <section id="projects">
      <div className="projects-wrapper">
        <div className="projects-content">
          <h2 className="title animated-title">Projects</h2>
          <div className="divider animated-divider"></div>

          <div className="project-slider">
            <div className="project-preview">
              <div className="preview-container">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="preview-image"
                />
              </div>
            </div>

            <div className="project-details">
              <div>
                <h3>{currentProject.title}</h3>
                <p>{currentProject.description}</p>
                <div className="project-meta">
                  <p className="project-info__tag">
                    Client: {currentProject.client}
                  </p>
                  <div className="info-divider"></div>
                  <p className="project-info__tag">
                    Completion Time: {currentProject.completion}
                  </p>
                  <div className="info-divider"></div>
                  <p className="project-info__tag">
                    Technologies: {currentProject.tags.join(", ")}
                  </p>
                </div>
              </div>

              <div>
                <div className="project-links-inline">
                  {currentProject.demo ? (
                    <a
                      href={currentProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="btn disabled" title="Not available">
                      Live Demo
                    </span>
                  )}
                  <a
                    href={currentProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    View on GitHub
                  </a>
                </div>
                <div className="slider-controls">
                  <button onClick={prevProject}>⟵ Prev</button>
                  <button onClick={nextProject}>Next ⟶</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsView;
