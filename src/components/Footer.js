// frontend/src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> {/* GitHub Icon */}
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
        </a>
      </div>
      <p>&copy; 2025 md kaifee. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
