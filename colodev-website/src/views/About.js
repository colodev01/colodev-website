import React from "react";
import "./styles/About.css"; // Import the CSS file for custom styles
import { skills, courses, academics, jobs } from "../data/data";
import Roadmap from "../components/Roadmap";
import CourseList from "../components/CourseList";
import SkillList from "../components/SkillList";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-item">
        <h3>Academic Background</h3>
        <Roadmap items={academics} />
      </div>
      <div className="about-item">
        <h3>Skills</h3>
        <SkillList skills={skills} />
      </div>
      <div className="about-item">
        <h3>Experience</h3>
        <Roadmap items={jobs} />
      </div>
      <div className="about-item">
        <h3>Courses</h3>
        <CourseList courses={courses} />
      </div>
    </div>
  );
};

export default About;
