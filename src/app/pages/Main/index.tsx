import React from 'react';
import styled from 'styled-components';

import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

// Styled components for the main page
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > div {
    display: flex;
    width: 55%;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;
const LinkButton = styled(Link)`
  border: 3px solid ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 1rem;
  font-size: 2rem;

  &:hover {
    color: red;
  }
`;

export function Main(): React.ReactElement {
  return (
    <Container>
      <div>
        {' '}
        <LinkButton to="/utilities">Utilidades</LinkButton>
        <LinkButton to="">Crônicas</LinkButton>
        <LinkButton to="">Chat</LinkButton>
      </div>
    </Container>
  );
}
