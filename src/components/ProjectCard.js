import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
 
  return (
    <div className="project-item">
      <img
        src={project.imgUrl}
        alt={project.title}
        onClick={toggleFullscreen}
        className={isFullscreen ? 'fullscreen' : ''}
      />
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-skills">
          {project.skills && project.skills.map((skill, index) => (
            <span key={index} className="badge badge-secondary">{skill}</span>
          ))}
        </div>
        <div className="project-buttons">
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-outline-dark">Repositorio</button>
          </a>
          <a href={project.appUrl} target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-outline-dark">Visualizar App</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;