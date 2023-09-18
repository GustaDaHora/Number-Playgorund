import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LinkButton from 'src/app/components/Link';

// Styled-components styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <LinkButton to="/signup">Sign Up</LinkButton>
      <LinkButton style={{ marginTop: '5px' }} to="/main">
        Main Page
      </LinkButton>
    </Container>
  );
};

export default Home;
