import React from 'react';
import { createRoot } from 'react-dom/client';
import theme from './app/styles/theme';
import GlobalStyles from './app/styles/global';
import { ThemeProvider } from 'styled-components';
import { Routes } from './app/app';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
