import React, { useState, useEffect } from "react";
import "./styles/HomeView.css";

const HomeView = () => {
  const roles = [
    "Informations Systems Engineer",
    "Data Analyst",
    "Full Stack Developer",
    "Spider-Man fan",
  ];

  const [currentRole, setCurrentRole] = useState("|");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false); // Nueva pausa

  useEffect(() => {
    const typingSpeed = deleting ? 50 : 100; // Velocidad de tipeo
    const pauseTime = 1500; // Pausa al final del texto
    const endPauseTime = 2000; // Pausa adicional cuando termina de escribir

    if (pause) {
      // Pausa al final antes de borrar
      const pauseTimeout = setTimeout(() => setPause(false), endPauseTime);
      return () => clearTimeout(pauseTimeout);
    }

    const timeout = setTimeout(() => {
      if (deleting) {
        // Borrando el texto
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
          setCurrentRole(roles[index].substring(0, charIndex - 1));
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length); // Avanzar al siguiente rol
        }
      } else {
        // Escribiendo el texto
        if (charIndex < roles[index].length) {
          setCharIndex((prev) => prev + 1);
          setCurrentRole(roles[index].substring(0, charIndex + 1));
        } else {
          setPause(true); // Activar pausa al final
          setDeleting(true); // Cambiar a modo "borrar" después de la pausa
        }
      }
    }, pause ? endPauseTime : deleting && charIndex === 0 ? pauseTime : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roles, index, pause]);

  return (
    <div className="home-wrapper">
      <h1 className="title">Hi, I'm Franco</h1>
      <h3 className="typing-animation">{currentRole}</h3>
    </div>
  );
};

export default HomeView;
