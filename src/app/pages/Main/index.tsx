import React from 'react';
import styled from 'styled-components';

import LinkButton from 'src/app/components/Link';

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

export function Main(): React.ReactElement {
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
}
