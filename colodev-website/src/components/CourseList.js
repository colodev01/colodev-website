import React from "react";

import "./styles/CourseList.css";

const CourseList = ({ courses }) => {
  return (
    <div className="courses">
      <ul>
        {courses.map((course, index) => (
          <li>
            <div className="course-item" key={index}>
              <img src={course.image} alt="Course" className="course-image" />
              <div className="course-details">
                <div className="course-title">{course.title}</div>
                <div className="course-status">Status: {course.status}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
