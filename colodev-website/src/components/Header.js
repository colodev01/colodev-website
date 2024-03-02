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
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <header className="header-wrapper">
      <button
        onClick={toggleMenu}
        className={`header-button ${menuOpen ? "open" : ""}`}
      >
        {menuOpen ? (
          // Render cancel button SVG
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
            fill="white"
          >
            <path d="M 10 10 L 40 40 M 40 10 L 10 40" strokeWidth="4" stroke="#fff" strokeLinecap="round" />
          </svg>
        ) : (
          // Render menu button SVG
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
            fill="white"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
          </svg>
        )}
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
              to="/blog"
              onClick={() => handleButtonClick(3)}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
