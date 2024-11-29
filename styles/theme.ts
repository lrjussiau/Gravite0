export const theme = {
    colors: {
      background: '#F5F5F5',
      primary: '#56A9FF',    // Your blue color
      secondary: '#5856D6',
      text: {
        primary: '#000000',
        secondary: '#666666',
        dark: '#333333',
      }
    },
    spacing: {
      xs: '0.5rem',    // 8px
      sm: '1rem',      // 16px
      md: '1.5rem',    // 24px
      lg: '2rem',      // 32px
      xl: '3rem'       // 48px
    },
    breakpoints: {
      mobile: '320px',
      tablet: '768px',
      desktop: '1024px'
    }
  };

declare module 'styled-components' {
    type Theme = typeof theme;
    export interface DefaultTheme extends Theme {}
  }