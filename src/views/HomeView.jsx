import React, { useState, useEffect } from "react";
import "./styles/HomeView.css";

const HomeView = () => {
  const roles = [
    "Informations Systems Engineer",
    "Data Engineer",
    "Full Stack Developer",
    "Spider-Man fan <3",
  ];

  const [currentRole, setCurrentRole] = useState("|");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const typingSpeed = deleting ? 50 : 100;
    const pauseTime = 1500;
    const endPauseTime = 2000;

    if (pause) {
      const pauseTimeout = setTimeout(() => setPause(false), endPauseTime);
      return () => clearTimeout(pauseTimeout);
    }

    const timeout = setTimeout(() => {
      if (deleting) {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
          setCurrentRole(roles[index].substring(0, charIndex - 1));
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        if (charIndex < roles[index].length) {
          setCharIndex((prev) => prev + 1);
          setCurrentRole(roles[index].substring(0, charIndex + 1));
        } else {
          setPause(true);
          setDeleting(true);
        }
      }
    }, pause ? endPauseTime : deleting && charIndex === 0 ? pauseTime : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roles, index, pause]);

  return (
    <section id="home" className="home-wrapper">
      <div className="home-content">
        <div className="home-text">
          <h1 className="title">
            Hi! I'm <span className="highlight-name">Franco</span>
          </h1>
          <h3 className="typing-animation">{currentRole}</h3>
        </div>
        <div className="home-image">
          <img src="/images/colo-saluting.png" alt="Franco Saluting" />
        </div>
      </div>
    </section>
  );
};

export default HomeView;
