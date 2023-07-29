import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Create a styled component for the LinkButton
const LinkButton = styled(Link)`
  border: 3px solid ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 1rem;
  font-size: 2rem;
  transition: 1s;

  /* Styles for hover effect */
  &:hover {
    color: red;
    padding: 1.5rem;
    transition: 1s;
  }

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    /* Adjust the font size for smaller screens */
    font-size: 1.5rem;

    /* Adjust the padding for smaller screens */
    padding: 0.8rem;

    /* Adjust the hover padding for smaller screens */
    &:hover {
      padding: 1rem;
    }
  }
`;

export default LinkButton;
