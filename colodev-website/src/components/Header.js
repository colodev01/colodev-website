import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/Header.css";

const Header = ({ showSlide }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleButtonClick = (index) => {
    showSlide(index);
    setMenuOpen(false); // Close the menu after clicking on a button
  };

  return (
    <header className="header-wrapper">
      <button
        onClick={toggleMenu}
        className={`header-button ${menuOpen ? "open" : ""}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </button>
      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <ul className="nav-ul">
          <li className="nav-li">
            <Link
              className="nav-link"
              to="/home"
              onClick={() => handleButtonClick(0)}
            >
              Home
            </Link>
          </li>
          <li className="nav-li">
            <Link
              className="nav-link"
              to="/about"
              onClick={() => handleButtonClick(1)}
            >
              About
            </Link>
          </li>
          <li className="nav-li">
            <Link
              className="nav-link"
              to="/portfolio"
              onClick={() => handleButtonClick(2)}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-li">
            <Link
              className="nav-link"
              to="/contact"
              onClick={() => handleButtonClick(3)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
