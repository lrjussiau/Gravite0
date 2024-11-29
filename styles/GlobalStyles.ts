import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colors.background};
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.5;
  }

  a {
    font-family: 'Inter', sans-serif;
    text-decoration: none;
  }
`;