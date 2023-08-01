import React from 'react';
import styled from 'styled-components';

import LinkButton from 'src/app/components/Link';
import { Header } from 'src/app/components/Header';

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

export function Utilities(): React.ReactElement {
  return (
    <Container>
      <Header />
      <LinkButton to="/tables">Tabuada</LinkButton>
    </Container>
  );
}
