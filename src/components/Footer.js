// frontend/src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/Mdkaifee" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/md-kaifee-94a10b1a3/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> 
        </a>
      </div>
      <p>&copy; 2025 md kaifee. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
