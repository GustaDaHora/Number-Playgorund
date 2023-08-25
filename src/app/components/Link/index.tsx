import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkButton = styled(Link)`
  border: 3px solid ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 1rem;
  font-size: 2rem;
  transition: 1s;
  text-align: center;

  &:hover {
    color: red;
    padding: 1.5rem;
    transition: 1s;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;

    padding: 0.8rem;

    &:hover {
      padding: 1rem;
    }
  }
`;

export default LinkButton;
