import React from 'react';
import styled from 'styled-components';

// Styled components for the main page
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #777;
`;

// Main page component
export function Main(): React.ReactElement {
  return (
    <Container>
      <Title>Welcome to My React App</Title>
      <Subtitle>This is the main page.</Subtitle>
    </Container>
  );
}
