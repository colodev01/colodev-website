import React from "react";
import "./styles/ProjectsView.css";

const projects = [
  {
    id: 1,
    title: "Quick S.O.S (Mobile)",
    image: "/images/projects/project-quicksos.jpeg",
    description: "An emergency service app for people with disabilities.",
    repo: "https://github.com/usuario/proyecto1",
    demo: "https://proyecto1.com",
    tags: ["Flutter", "Dart"],
  },
  {
    id: 2,
    title: "Proyecto 2",
    image: "/images/proyecto2.jpg",
    description: "Otro proyecto cool para mostrar.",
    repo: "https://github.com/usuario/proyecto2",
    demo: null,
    tags: ["React", "Node.js", "MongoDB"],
  },
];

const ProjectsView = () => {
  return (
    <section id="projects">
      <div className="projects-wrapper">
        <div className="projects-content">
          <h2 className="projects-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="project-overlay">
                  <h3 className="project-overlay__title">{project.title}</h3>
                  <div className="project-tags">
                    {project.tags &&
                      project.tags.map((tag, index) => (
                        <span key={index} className="project-tag">
                          {tag}
                        </span>
                      ))}
                  </div>
                  <p className="project-overlay__description">
                    {project.description}
                  </p>
                  <div className="project-links">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ➤ Go to Repo
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ➤ Go to App
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsView;
