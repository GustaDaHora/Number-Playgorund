import React from 'react';
import styled from 'styled-components';

import LinkButton from 'src/app/components/Link';
import { Header } from 'src/app/components/Header';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  justify-content: space-between;
  background: radial-gradient(
    circle at top right,
    ${({ theme }) => theme.COLORS.BACKGROUND_700} 0%,
    ${({ theme }) => theme.COLORS.BACKGROUND_900} 70%
  );

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

const Utilities: React.FC = () => {
  return (
    <Container>
      <Header children={undefined} />
      <div>
        {' '}
        <LinkButton to="/tables">Tabuada</LinkButton>
        <LinkButton to="/check">Analisador</LinkButton>
      </div>
    </Container>
  );
};

export default Utilities;
