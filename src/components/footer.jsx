import React from 'react';
import { FaLinkedin, FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/praveengangisetty/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="https://github.com/praveen040-gif" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        {/* <a href="https://www.instagram.com/yourinstagram/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="footer-icon" />
        </a> */}
      </div>

      <p className="footer-text">
        All rights reserved by Gangisetty Durga Praveen 2024
      </p>
    </footer>
  );
};

export default Footer;
