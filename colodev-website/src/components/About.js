import React from "react";
import "./styles/About.css"; // Importa el archivo CSS para estilos personalizados

const About = () => {
  const skills = [
    { name: "Java (Spring)", level: 90, color: "#66b447" },
    { name: "HTML/CSS", level: 85, color: "#ff5800" },
    { name: "Python (Flask & FastAPI)", level: 75, color: "#3776ab" },
    { name: "JavaScript (React & Next.js)", level: 70, color: "#f0db4f" },
    { name: "Git", level: 100, color: "#bd2c00" },
    { name: "SCRUM and Agile Methodology", level: 100, color: "#6cc644" },
  ];
  const courses = [
    {
      title:
        "Universidad de Programación - Python, Java y JavaScript en Udemy.",
      status: "finished",
      image: "https://img-c.udemycdn.com/course/240x135/4180612_5b9a_4.jpg",
    },
    {
      title: "The Complete ReactJs Course - Basics to Advanced [2024].",
      status: "finished",
      image: "https://img-c.udemycdn.com/course/240x135/3033196_e7f4_3.jpg",
    },
    {
      title: "Flutter - Móvil: De cero a experto.",
      status: "in progress",
      image: "https://img-c.udemycdn.com/course/240x135/5132066_04b4_3.jpg",
    },
  ];

  return (
    <section className="about-container">
      <div className="about-item">
        Academic Background
        <div className="roadmap">
          <div className="roadmap-item">
            <div className="description">
              Information Systems Engineer - UTN FRM
            </div>
            <div className="sub-description">
              Specialization in Software Development
            </div>
            <div className="year">Oct 2023 - Now</div>
          </div>
          <div className="roadmap-item">
            <div className="description">
              Bachelor of Humanities - Corazón de María School
            </div>
            <div className="sub-description">
              Specialization in Software Development
            </div>
            <div className="year">2018</div>
          </div>
        </div>
      </div>
      <div className="about-item">
        Skills
        <div className="skills">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-name">{skill.name}</div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="about-item">
        Experience
        <div className="roadmap">
          <div className="roadmap-item">
            <div className="description">Fullstack Developer</div>
            <div className="sub-description">Midas Consultores S.A.</div>
            <div className="year">Oct 2023 - Now</div>
          </div>
          <div className="roadmap-item">
            <div className="description">Python Backend Developer</div>
            <div className="sub-description">ADEN Business School</div>
            <div className="year">Jul 2022 - Dec 2022</div>
          </div>
          <div className="roadmap-item">
            <div className="description">Technical Assistant</div>
            <div className="sub-description">ITC S.A.</div>
            <div className="year">Nov 2018 - Dec 2018</div>
          </div>
        </div>
      </div>
      <div className="about-item">
        Courses
        <div className="courses">
          {courses.map((course, index) => (
            <div className="course-item" key={index}>
              <img src={course.image} alt="Curso" className="course-image" />
              <div className="course-details">
                <div className="course-title">{course.title}</div>
                <div className="course-status">Status: {course.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
