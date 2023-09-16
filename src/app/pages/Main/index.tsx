import React from 'react';
import styled from 'styled-components';

import LinkButton from 'src/app/components/Link';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    circle at top right,
    ${({ theme }) => theme.COLORS.BACKGROUND_700} 0%,
    ${({ theme }) => theme.COLORS.BACKGROUND_900} 70%
  );

  > div {
    display: flex;
    width: 55%;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    > div {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

const Main: React.FC = () => {
  return (
    <Container>
      <div>
        {' '}
        <LinkButton to="/utilities">Utilidades</LinkButton>
        <LinkButton to="/cronics">Crônicas</LinkButton>
        <LinkButton to="">Chat</LinkButton>
      </div>
    </Container>
  );
};

export default Main;
