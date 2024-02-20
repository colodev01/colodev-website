import React from "react";

import "./styles/CourseList.css";

const CourseList = ({ courses }) => {
  return (
    <div className="courses">
      {courses.map((course, index) => (
        <div className="course-item" key={index}>
          <img src={course.image} alt="Course" className="course-image" />
          <div className="course-details">
            <div className="course-title">{course.title}</div>
            <div className="course-status">Status: {course.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
