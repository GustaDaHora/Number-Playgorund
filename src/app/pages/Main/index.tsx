import React from 'react';
import styled from 'styled-components';

import { Button } from '../../components/Button';

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

export function Main(): React.ReactElement {
  return (
    <Container>
      <div>
        {' '}
        <Button title="Click Me" />
        <Button title="Click Me" />
        <Button title="Click Me" />
      </div>
    </Container>
  );
}
