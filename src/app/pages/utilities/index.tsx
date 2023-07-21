import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for the main page
const Container = styled(Link)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export function Utilities(): React.ReactElement {
  return <Container title="Tabuada" to="/tables"></Container>;
}
