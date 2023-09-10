import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

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
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    prisma.post
      .findMany({
        select: {
          id: true,
          title: true,
        },
      })
      .then((result) => setPosts(result))
      .catch((error) => console.error(error));
  }, []);

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
      {posts.map((post) => (
        <div key={post.id}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* <Button onClick={increaseFontSize}>+</Button>
            <Button onClick={decreaseFontSize}>-</Button> */}
            <h1>{post.title}</h1>
          </div>
          {/* <p style={{ fontSize: `${fontSize}px`, margin: '5px' }}>
            {item.content}
          </p> */}
        </div>
      ))}
    </Container>
  );
}

export default TextComponent;
