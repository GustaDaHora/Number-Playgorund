import React from 'react';
import styled from 'styled-components';

// Styled components for the main page
export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;
`;

export function Header(): React.ReactElement {
  return <Container></Container>;
}
