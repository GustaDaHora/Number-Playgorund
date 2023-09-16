import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled-components styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Link to="/main">
        <Button>Main Page</Button>
      </Link>
      <Link to="/signup">
        <Button>Sign Up</Button>
      </Link>
    </Container>
  );
};

export default Home;
