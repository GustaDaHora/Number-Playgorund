import React from 'react';
import styled from 'styled-components';
import LinkButton from 'src/app/components/Link';

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
      <LinkButton style={{ marginTop: '5px' }} to="/utilities">
        Enter
      </LinkButton>
    </Container>
  );
};

export default Home;
