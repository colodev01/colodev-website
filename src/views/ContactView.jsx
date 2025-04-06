import React from "react";
import "./styles/ContactView.css";
import { FaLinkedin, FaInstagram, FaGithub, FaPhone } from "react-icons/fa";
import { MdMail, MdPhoneAndroid } from "react-icons/md";

const ContactView = () => {
  return (
    <section id="contact" className="contact-view-wrapper">
      <div className="contact-card">
        {/* Left: Form */}
        <div className="contact-form">
          <h2>Contact Me!</h2>
          <form>
            <div className="form-group">
              <label>Your full name</label>
              <input type="text" placeholder="Peter Parker" />
            </div>
            <div className="form-group">
              <label>Correo electrónico</label>
              <input type="email" placeholder="peterparker@example.com" />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea rows="4" placeholder="With great power..." />
            </div>
            <button type="submit">Enviar mensaje</button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="contact-info">
          <h2>My Info</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/franco-muzzin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /><span>/franco-muzzin</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /><span>@francomuzzin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /><span>/colodev01</span>
              </a>
            </li>
            <li>
              {" "}
              <MdPhoneAndroid /><span>+54 9 261 215-8075</span>
            </li>
            <li>
              {" "}
              <MdMail /><span>francomuzzin01@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactView;
