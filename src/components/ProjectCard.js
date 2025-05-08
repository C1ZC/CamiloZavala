import React, { useState } from 'react';
import '../assets/css/ProjectCard.css'; // Import your CSS file for styling

const ProjectCard = ({ project }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
 
  return (
    <div className="project-item">
      <div className={isFullscreen ? "fullscreen-overlay" : ""}>
        <img
          src={project.imgUrl}
          alt={project.title}
          onClick={toggleFullscreen}
          className={isFullscreen ? "fullscreen" : ""}
        />
        {isFullscreen && (
          <button
            className="close-fullscreen"
            onClick={toggleFullscreen}
            aria-label="Cerrar imagen">
            ×
          </button>
        )}
      </div>
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-skills">
          {project.skills &&
            project.skills.map((skill, index) => (
              <span key={index} className="badge badge-secondary">
                {skill}
              </span>
            ))}
        </div>
        <div className="project-buttons">
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-secondary">
              Repositorio
            </button>
          </a>
          <a href={project.appUrl} target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-info">
              Visualizar App
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;