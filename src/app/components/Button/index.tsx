import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

const Container = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;

export function Button({
  title,
  loading = false,
  ...rest
}: ButtonProps): React.ReactElement {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? 'Carregando...' : title}
    </Container>
  );
}
