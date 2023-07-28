import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  transition: 1s;

  &:hover {
    color: red;
    padding: 1.5rem;
    transition: 1s;
  }
`;

export function Utilities(): React.ReactElement {
  return (
    <Container>
      <LinkButton to="/tables">Tabuada</LinkButton>
    </Container>
  );
}
