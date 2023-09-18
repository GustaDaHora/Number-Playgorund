import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';

import LinkButton from '../Link';

export const Container = styled.header`
  grid-area: header;

  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vh;
  padding: 20px 0;
`;
interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps): React.ReactElement {
  return (
    <Container>
      {' '}
      <LinkButton to="/main">
        <BiArrowBack />
      </LinkButton>
      {children}
    </Container>
  );
}
