import React from 'react';
import styled from 'styled-components';

import LinkButton from 'src/app/components/Link';
import { Header } from 'src/app/components/Header';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 300px;
  grid-gap: 20px;
  height: 100vh;
  margin: 0;

  > Header {
    grid-row: 1;
    grid-column: 1 / span 2;
    padding: 20px;
  }
  > section {
    grid-row: 2;
    grid-column: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  > aside {
    grid-row: 2;
    grid-column: 2;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
`;

export function Cronics(): React.ReactElement {
  return (
    <Container>
      <Header />
      <section>
        <LinkButton to="/">Em Breve</LinkButton>
        <LinkButton to="/">Em Breve</LinkButton>
        <LinkButton to="/">Em Breve</LinkButton>
        <LinkButton to="/">Em Breve</LinkButton>
      </section>
      <aside>
        <LinkButton to="/">Em Breve</LinkButton>
      </aside>
    </Container>
  );
}
