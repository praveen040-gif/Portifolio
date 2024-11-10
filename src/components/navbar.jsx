import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav className="navbar">
      <div className="logo">
       <a href='#home' class="nav-logo" ><h1>Praveen</h1></a>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about"onClick={closeMenu}>About</a></li>
        <li><a href="#skills"onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects"onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact"onClick={closeMenu}>Contact Us</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
      {isOpen ? '✖' : '☰'}
      </div>
    </nav>
  );
};

// const toggleMenu = () => {
//   const navLinks = document.querySelector('.nav-links');
//   navLinks.classList.toggle('active1');
// };

export default Navbar;
