import React, { useState } from "react";
import "./styles/Home.css";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [randomMessage, setRandomMessage] = useState("");

  const messages = [
    "Hi, you can call me Colo!",
    "Use the arrows to navigate!",
    "You know something? I'm a big Spider-Man fan myself.",
    "I'm 23 years old.",
    "My favorite programming language is Python <3",
    "Follow me on my social networks!",
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledMessages = shuffleArray(messages);

  const getRandomMessage = () => {
    return shuffledMessages[0];
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setRandomMessage(getRandomMessage());
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="home-wrapper">
      <div className="home-welcome">
        <div className="home-detail">
          <h1>Franco Muzzin</h1>
          <h2>Systems Engineer student</h2>
          <br />
          <h3
            style={{
              textAlign: "center",
              fontStyle: "italic",
              fontSize: "1.5em",
            }}
          >
            "Great things come from small packages"
          </h3>
        </div>
        <div
          className="home-image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={
              isHovered
                ? "/assets/dummy/colo-speaking.png"
                : "/assets/dummy/colo-saluting.png"
            }
            alt="Saludo"
          />
          {isHovered && (
            <div className="speech-bubble">
              <p>{randomMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
