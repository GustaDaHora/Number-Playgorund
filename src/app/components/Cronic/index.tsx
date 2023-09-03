import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../Button';

const Container = styled.div`
  border: 3px solid ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.5rem;
  transition: 1s;
  text-align: center;
  padding: 1.36rem;

  &:hover {
    transition: 1s;
    padding: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 1rem;
    padding: 0.8rem;

    &:hover {
      padding: 1rem;
    }
  }
`;

function TextComponent() {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [fontSize, setFontSize] = useState(20);

  const handleMouseEnter = () => {
    setIsTextVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTextVisible(false);
  };

  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => Math.max(prevSize - 2, 10)); // Ensure font size doesn't go below 10
  };

  return (
    <Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        overflow: 'hidden',
        transition: 'max-height 3s ease-in-out',
        maxHeight: isTextVisible ? '100rem' : '6rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button onClick={increaseFontSize}>+</Button>
        <h1>Hover to Toggle Text</h1>
        <Button onClick={decreaseFontSize}>-</Button>
      </div>
      {isTextVisible && (
        <p style={{ fontSize: `${fontSize}px`, margin: '5px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quo
          deserunt magni quia molestias. Voluptatibus quia accusamus id
          inventore eaque labore possimus non tenetur a! Neque culpa maiores
          ipsa corrupti. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Perferendis repellat, in, nihil dolor commodi nam ipsum unde
          minima ipsa autem nulla aperiam dignissimos consequatur rem quam!
          Nihil dolor consequuntur provident! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quis consectetur fugiat recusandae quia
          id, porro dicta laborum culpa, vel necessitatibus sed optio hic,
          labore perspiciatis praesentium quae dolorem cumque ipsum! Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Ipsum voluptas
          repellendus ipsa perferendis maxime mollitia, esse quidem? Enim,
          doloribus. Neque nam possimus amet impedit architecto distinctio
          deleniti ea itaque temporibus. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Sapiente voluptatum nostrum, voluptatem dolorem
          alias a debitis aliquid dolorum, aut voluptates incidunt nisi
          doloremque culpa cupiditate dolores, quod perspiciatis perferendis
          facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
          vitae a velit commodi provident voluptatibus cupiditate doloremque
          error excepturi nulla ut voluptatum placeat, nostrum quas ea ullam
          accusantium maiores ab. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugit dolorum distinctio natus exercitationem sed
          numquam similique vel impedit repellat autem? Veritatis placeat vero
          earum deserunt quos autem quae quibusdam quia? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dicta quas mollitia tempore,
          possimus aperiam porro nostrum provident, explicabo laborum non, alias
          totam distinctio consequatur minima id itaque illum quae natus?
        </p>
      )}
    </Container>
  );
}

export default TextComponent;
