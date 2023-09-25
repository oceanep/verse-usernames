import { createGlobalStyle } from 'styled-components';
import { border, primaryBackground, shadows, spacing } from './common';
import verse from './verse';

export interface Theme {
    // logo: string;
    palette: {
      background: {
        default: string;
        secondary: string;
        tertiary: string;
        primary: typeof primaryBackground;
        overlay: string;
        card: string;
      };
      text: {
        default: string;
        secondary: string;
        hover: string;
      };
      menu: {
        text: {
          default: string;
          hover: string;
          selected: string;
        };
        icon: {
          default: string;
          selected: string;
        };
      };
      input: {
        text: {
          default: string;
          hover: string;
          active: string;
          disabled: string;
        };
        background: {
          default: string;
          hover: string;
          active: string;
          disabled: string;
        };
        border: {
          default: string;
          hover: string;
          active: string;
          disabled: string;
          error: string;
        };
      };
      border: { default: string; secondary: string };
      buttons: {
        standard: {
          background: {
            default: string;
            hover: string;
            active: string;
            disabled: string;
          };
          border: {
            default: string;
            hover: string;
            active: string;
          };
        };
      };
      carousel: {
        indicators: {
          default: string;
          active: string;
        };
      };
      hero: {
        icon: {
          default: string;
        };
      };
    };
    border: typeof border;
    spacing: typeof spacing;
    shadows: typeof shadows;
    important: string;
  }

  const themes = {
    verse,
    light: verse,
    dark: verse,
  };
  
  export const GlobalStyle = createGlobalStyle`
    html {
      scroll-behavior: smooth;
    }
  
    html,
    body,
    body > div {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
      margin: 0;
      padding: 0;
      color: ${({ theme }) => theme.palette.text.default};
      background:${({ theme }) => theme.palette.background.default};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  
    a {
      text-decoration: none;
    }
  `;
  
  declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends Theme {}
  }
  
  export default themes;
  