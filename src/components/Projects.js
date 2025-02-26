// frontend/src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>Description of your project goes here.</p>
          <a href="https://github.com/your-project" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <p>Description of your second project.</p>
          <a href="https://github.com/your-project" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
