import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --BACKGROUND_900: #232129;
    --BACKGROUND_800: #312E38;
    --BACKGROUND_700: #3E3B47;
    --WHITE: #F4EDE8;
    --ORANGE: #FF9000;
    --GRAY_100: #999591;
    --GRAY_300: #666360;
    --RED: #FF002E;
  }

  body {
    background-color: var(--BACKGROUND_900);
    color: var(--WHITE);
    font-family: Arial, sans-serif;
  }

  /* Add more global styles here as needed */

  /* Example: Create a class-based global style */
  .button {
    background-color: var(--ORANGE);
    color: var(--WHITE);
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
