import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for rotation animation
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Container for the Earth image
const EarthContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  margin: 50px auto;
  animation: ${rotateAnimation} 10s linear infinite;
`;

// Earth image
const EarthImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export function EarthAnimation(): JSX.Element {
  // State to toggle animation on/off
  const [isAnimating, setIsAnimating] = useState(true);

  // Function to pause/resume animation
  const toggleAnimation = () => {
    setIsAnimating((prevIsAnimating) => !prevIsAnimating);
  };

  // Pause/resume animation when isAnimating changes
  useEffect(() => {
    const earthContainer = document.getElementById("earth-container");
    if (earthContainer) {
      const animation = earthContainer.style.animation;
      if (isAnimating) {
        earthContainer.style.animation = animation.replace("paused", "running");
      } else {
        earthContainer.style.animation = animation.replace("running", "paused");
      }
    }
  }, [isAnimating]);

  return (
    <>
      <button onClick={toggleAnimation}>Toggle Animation</button>
      <EarthContainer id="earth-container">
        <EarthImage src="earth.png" alt="Earth" />
      </EarthContainer>
    </>
  );
}
