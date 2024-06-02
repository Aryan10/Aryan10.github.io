import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './ProjectCard.css';

const ProjectCard = ({ title, repoURL, description }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <a href={repoURL} target="_blank" rel="noopener noreferrer" className="project-link">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <p className="project-description">{description}</p>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  repoURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;
