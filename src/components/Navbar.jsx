import React from 'react';
import './styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <a href="#home" className="logo">
          C<span className="highlight">dev</span>.
        </a>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
