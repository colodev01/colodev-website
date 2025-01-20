import React from 'react';
import { FaUser, FaBriefcase, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; // Ejemplo de íconos
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#about">
            <FaUser className="icon" />
            <span className="tooltip">About</span>
          </a>
        </li>
        <li>
          <a href="#experience">
            <FaBriefcase className="icon" />
            <span className="tooltip">Experience</span>
          </a>
        </li>
        <li>
          <a href="#projects">
            <FaProjectDiagram className="icon" />
            <span className="tooltip">Projects</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <FaEnvelope className="icon" />
            <span className="tooltip">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
