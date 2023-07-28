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

  @media (max-width: 768px) {
    /* Styles for smaller screen sizes (e.g., smartphones) */
    flex-direction: column;
    > div {
      flex-direction: column;
      gap: 0.5rem;
    }
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

  @media (max-width: 768px) {
    /* Adjust the font size for smaller screens */
    font-size: 1.5rem;

    /* Adjust the padding for smaller screens */
    padding: 0.8rem;

    /* Adjust the hover padding for smaller screens */
    &:hover {
      padding: 1rem;
    }
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
