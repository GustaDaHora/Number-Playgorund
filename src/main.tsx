import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './app/styles/theme';
import GlobalStyles from './app/styles/global';
import { ThemeProvider } from 'styled-components';
import { Routes } from './app/app';

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
