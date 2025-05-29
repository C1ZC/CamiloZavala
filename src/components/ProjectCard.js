import React from "react";
import "../assets/css/projectcard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-item">
      <img src={project.imgUrl} alt={project.title} className="project-img" />
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.skills && project.skills.length > 0 && (
          <div className="project-skills">
            {project.skills.map((skill, idx) => (
              <span key={idx} className="badge badge-secondary">
                {skill}
              </span>
            ))}
          </div>
        )}
        <div className="project-buttons">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-secondary">
                Repositorio
              </button>
            </a>
          )}
          {project.appUrl && (
            <a href={project.appUrl} target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-info">
                Visualizar App
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;