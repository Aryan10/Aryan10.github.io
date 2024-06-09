import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import projectList from './data/projects';

const Projects = () => {
  return (
    <div className="projects">
      <h2>My <span className='highlight'>Projects</span></h2>
      <div className="projects-list">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
