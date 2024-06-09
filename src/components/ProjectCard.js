import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  // console.log(project);
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <a href={project.repoURL} target="_blank" rel="noopener noreferrer" className="project-link">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-tech-stack">
        {project.techstack.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <p className="project-time">{project.timeperiod}</p>
    </div>
  );
};

export default ProjectCard;
