import { useState } from "react";
import "./styles/Header.css";

const Header = ({ showSlide }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleButtonClick = (index) => {
    showSlide(index);
    setMenu(false); // Close the menu after clicking on a button
  };

  return (
    <section id="header-section">
      <header className="header-wrapper">
        <button
          onClick={toggleMenu}
          className={`header-button ${setMenu ? "open" : ""}`} // Aplica la clase 'open' cuando el menú está abierto
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
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
        <nav className={`header-nav${menu ? "isActive" : ""}`}>
          <ul className="header-ul">
            <li className="header-li">
              <a
                href="#"
                className="header-a"
                onClick={() => handleButtonClick(0)}
              >
                Home
              </a>
            </li>
            <li className="header-li">
              <a
                href="#"
                className="header-a"
                onClick={() => handleButtonClick(1)}
              >
                About
              </a>
            </li>
            <li className="header-li">
              <a
                href="#"
                className="header-a"
                onClick={() => handleButtonClick(2)}
              >
                Portfolio
              </a>
            </li>
            <li className="header-li">
              <a
                href="#"
                className="header-a"
                onClick={() => handleButtonClick(3)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Header;
