import React, { useEffect, useState } from "react";
import "./styles/Navbar.css";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
    document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
  }, []);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar_left-side">
          <a href="#home" className="logo">
            C<span className="highlight">dev</span>.
          </a>

          {/* Botón de cambio de tema */}
          <button onClick={toggleTheme} className="theme-button">
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        </div>

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
