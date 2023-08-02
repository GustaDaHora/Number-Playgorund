import React from 'react';
import styled from 'styled-components';

import LinkButton from 'src/app/components/Link';
import { Header } from 'src/app/components/Header';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  justify-content: space-between;

  display: grid;
  place-items: center;
  grid-template-rows: 80px 128px auto 64px;
  grid-template-areas:
    'header header'
    'content content';

  > Header {
    grid-area: header;
  }

  > div {
    grid-area: content;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export function Cronics(): React.ReactElement {
  return (
    <Container>
      <Header />
      <div>
        {' '}
        <LinkButton to="/">Em Breve</LinkButton>
      </div>
    </Container>
  );
}
