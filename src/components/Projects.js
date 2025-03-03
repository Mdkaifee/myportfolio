// frontend/src/components/Projects.js
import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>FriendSphere Chatting App</h3>
          <p>✅ Chat with your friends in real-time</p>
          <p>✅ See who's online</p>
          <p>✅ Instant messaging experience</p>
          <a
            href="https://github.com/Mdkaifee/FirstDjango"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="project-item">
          <h3>My Portfolio</h3>
          <p>✅ A personal showcase of my web development skills</p>
          <p>
            ✅ A place to highlight my projects, experience, and achievements
          </p>
          <p>
            ✅ Built with modern web technologies to demonstrate clean code and
            responsive design
          </p>
          <a
            href="https://github.com/Mdkaifee/myportfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="project-item">
          <h3>Backend of My Portfolio</h3>
          <p>✅ Built with Node.js to handle backend requests</p>
          <p>✅ Receives and processes user queries sent via email</p>
          <p>✅ Implements email sending functionality to handle contact form submissions</p>
          <a
            href="https://github.com/Mdkaifee/my_backend"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="project-item">
          <h3>RareImpacts - React Native App</h3>
          <p>✅ Discover information about rare diseases and conditions</p>
          <p>✅ Read about precautionary measures, cures, and symptoms</p>
          <p>✅ User-friendly app with search and categorization features</p>
          <a
            href="https://github.com/ApnitorDeveloper/Rare-Impacts-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="project-item">
          <h3>Shack App - React Native</h3>
          <p>✅ Helps golfers and caddies book a game for golf play</p>
          <p>✅ Find available tee times and connect with caddies</p>
          <p>✅ Streamlined booking process and user-friendly interface</p>
          <a
            href="https://github.com/YourUsername/Shack-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
