import React from "react";

import "./styles/Roadmap.css";

const Roadmap = ({ items }) => {
  return (
    <div className="roadmap">
        <ul className="roadmap-ul">
          {items.map((item, index) => (
            <li>
              <div className="roadmap-item" key={index}>
                <div className="description">{item.description}</div>
                <div className="sub-description">{item.subDescription}</div>
                <div className="year">{item.date}</div>
              </div>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Roadmap;
