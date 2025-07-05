import React, { useEffect, useState } from "react";
import "./styles/Navbar.css";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);
    document.documentElement.setAttribute(
      "data-theme",
      prefersDark ? "dark" : "light"
    );
  }, []);

  // Para cerrar el menú al hacer clic en un link
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar_left-side">
          <a href="#home" className="logo">
            <span className="logo-c">C</span>
            <span className="highlight">dev</span>
            <span className="logo-dot">.</span>
          </a>
        </div>

        {/* Centro: menú links */}
        <ul className={menuOpen ? "active" : ""}>
          {/* En móvil mostramos el logo dentro del menú */}
          <li className="menu-logo-mobile">
            <a href="#home" className="logo" onClick={closeMenu}>
              C<span className="highlight">dev</span>.
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>

          {/* En móvil botón modo dentro del menú */}
          <li className="theme-button-mobile">
            <button onClick={toggleTheme} className="theme-button">
              {isDarkMode ? "⏾" : "☼"}
            </button>
          </li>
        </ul>

        {/* Derecha: botón modo (oculto en móvil) */}
        <div className="navbar_right-side">
          <button onClick={toggleTheme} className="theme-button">
            {isDarkMode ? "⏾" : "☼"}
          </button>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
