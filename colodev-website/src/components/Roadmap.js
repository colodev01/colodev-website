import React, { useState } from "react";
import "./styles/Roadmap.css";

const Roadmap = ({ items }) => {
  const [accordionIndex, setAccordionIndex] = useState(null);

  const toggleAccordion = (index) => {
    setAccordionIndex(index === accordionIndex ? null : index);
  };

  return (
    <div className="roadmap">
      <ul className="roadmap-ul">
        {items.map((item, index) => (
          <li key={index}>
            <div className="roadmap-item">
              <div className="description">{item.description}</div>
              <div className="sub-description">{item.subDescription}</div>
              <div className="year">{item.date}</div>
              <button
                className="accordion-button"
                onClick={() => toggleAccordion(index)}
              >
                {accordionIndex === index ? "-" : "+"}
              </button>
            </div>
            {accordionIndex === index && (
              <div className="accordion-content">
                {/* Content for accordion */}
                This is the content for accordion {index + 1}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roadmap;
