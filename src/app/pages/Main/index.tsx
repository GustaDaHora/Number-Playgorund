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
  }
`;
const LinkButton = styled(Link)`
  width: 100%;

  height: 56px;
  border: 3px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export function Main(): React.ReactElement {
  return (
    <Container>
      <div>
        {' '}
        <LinkButton to="/utilities">Utilidades</LinkButton>
        <LinkButton title="Em breve" to="" />
        <LinkButton title="Em breve" to="" />
      </div>
    </Container>
  );
}
