import React from "react";
import "./styles/AboutView.css";
import "../index.css";
import {
  FaSpider,
  FaPython,
  FaLaptop,
  FaDumbbell,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const hobbies = [
  { icon: <FaSpider />, color: "#FFB347" }, // naranja suave
  { icon: <FaPython />, color: "#B4A7D6" }, // lavanda
  { icon: <FaLaptop />, color: "#AED9E0" }, // celeste
  { icon: <FaDumbbell />, color: "#FFD3B6" }, // durazno
  { icon: <FaReact />, color: "#D3ECA7" }, // verde menta
  { icon: <FaNodeJs />, color: "#FFAAA5" }, // rosa suave
  { icon: <FaPencil />, color: "#C7CEEA" }, // lila pastel
];

const AboutView = () => {
  return (
    <section id="about" className="about-view-wrapper">
      <div className="about-view-content">
        <h1 className="title animated-title">About.</h1>

        <div className="about-columns">
          <div className="about-text">
            <p>
              I'm a full-stack developer 👨‍💻 from Mendoza, Argentina 📍 with a
              passion for tech, design, and building meaningful products. When
              I'm not coding, I love exploring hobbies that help me stay
              inspired and balanced, such as drawing and calisthenics. For last
              and not least, I'm a big Spider-Man fan 🕸️ .
            </p>
            <p>{""}</p>
            <p>
              My main focus is backend development with Python 🐍 and Django, but I
              also work as a full-stack developer using React ⚛︎ and Node.js.
              Additionally, I have experience in data engineering 📊, particularly
              in ETL processes with Python and SQL on Azure Databricks.
            </p>
          </div>

          <div className="hobbies-grid">
            <div className="hex-row center">
              {hobbies.slice(0, 2).map((h, i) => (
                <div
                  className="hex-icon"
                  key={i}
                  style={{ backgroundColor: h.color }}
                >
                  {h.icon}
                </div>
              ))}
            </div>
            <div className="hex-row">
              {hobbies.slice(2, 5).map((h, i) => (
                <div
                  className="hex-icon"
                  key={i + 2}
                  style={{ backgroundColor: h.color }}
                >
                  {h.icon}
                </div>
              ))}
            </div>
            <div className="hex-row center">
              {hobbies.slice(5, 7).map((h, i) => (
                <div
                  className="hex-icon"
                  key={i + 5}
                  style={{ backgroundColor: h.color }}
                >
                  {h.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutView;
