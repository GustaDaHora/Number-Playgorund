import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import SpaceBg from '../../../assets/space.jpg';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  perspective: 1000px;
`;

const Camera = styled.div<{
  mouseX: number;
  mouseY: number;
  zoom: number;
  rotationX: number;
  rotationY: number;
}>`
  width: 50px;
  height: 50px;
  background-color: red;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.2s ease-out;
  transform: translate(${({ mouseX }) => mouseX}px, ${({ mouseY }) => mouseY}px)
    rotateX(${({ rotationX }) => rotationX}deg)
    rotateY(${({ rotationY }) => rotationY}deg) scale(${({ zoom }) => zoom});
`;

export function Home(): JSX.Element {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const delta = event.deltaY;

      // Increase or decrease the zoom level based on wheel scroll
      if (delta < 0) {
        setZoom((prevZoom) => prevZoom + 0.1);
      } else {
        setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.1));
      }
    };

    document.addEventListener('wheel', handleWheel);

    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;

      // Adjust the rotation based on keyboard input
      if (key === 'ArrowUp') {
        setRotationX((prevRotationX) => prevRotationX - 5);
      } else if (key === 'ArrowDown') {
        setRotationX((prevRotationX) => prevRotationX + 5);
      } else if (key === 'ArrowLeft') {
        setRotationY((prevRotationY) => prevRotationY - 5);
      } else if (key === 'ArrowRight') {
        setRotationY((prevRotationY) => prevRotationY + 5);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Container>
      <Camera
        mouseX={mouseX - 25}
        mouseY={mouseY - 25}
        zoom={zoom}
        rotationX={rotationX}
        rotationY={rotationY}
      />
      <img
        src={SpaceBg}
        alt="Space Background"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Container>
  );
}
