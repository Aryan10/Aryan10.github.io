import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Project 1</h3>
          <p>Description of project 1.</p>
        </li>
        <li>
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </div>
  );
};

export default Projects;
