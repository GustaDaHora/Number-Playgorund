import React from 'react';
import styled from 'styled-components';

import { Header } from 'src/app/components/Header';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export function Cronics(): React.ReactElement {
  return (
    <Container>
      <Header />
      Nada aqui
    </Container>
  );
}
