import React, { useEffect } from 'react';
import styled from 'styled-components';

import spaceBg from '../../../assets/space.jpg';

const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  text-align: center;
  z-index: 1;
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const SpaceContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  background: url(${spaceBg}) no-repeat center/cover;
  pointer-events: none;
  overflow: hidden;
  background-size: 100% auto;
`;

export const Home: React.FC = () => {
  useEffect(() => {
    const moveSpace = (event: MouseEvent) => {
      const space = document.getElementById('space') as HTMLDivElement;
      const x = event.clientX;
      const y = event.clientY;

      const newX = (window.innerWidth / 2 - x) * 0.1;
      const newY = (window.innerHeight / 2 - y) * 0.1;

      space.style.transform = `translate(${newX}px, ${newY}px)`;
    };

    document.addEventListener('mousemove', moveSpace);

    return () => {
      document.removeEventListener('mousemove', moveSpace);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AppWrapper>
      <Title>Welcome to the Space Page</Title>
      <SpaceContainer id="space" />
    </AppWrapper>
  );
};
