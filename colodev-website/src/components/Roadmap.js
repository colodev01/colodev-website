import React from "react";

import "./styles/Roadmap.css";
 
const Roadmap = ({ items }) => {
  return (
    <div className="roadmap">
      {items.map((item, index) => (
        <div className="roadmap-item" key={index}>
          <div className="description">{item.description}</div>
          <div className="sub-description">{item.subDescription}</div>
          <div className="year">{item.date}</div>
        </div>
      ))}
    </div>
  );
};

export default Roadmap;
