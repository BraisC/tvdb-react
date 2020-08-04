import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    html {
      font-size: 62.5%; 
      box-sizing: border-box;
      --color-red: #FF6363;
      --color-primary: ${(props) => props.theme.primary};
      --color-secondary: ${(props) => props.theme.secondary};
      --color-white: ${(props) => props.theme.white};
      --text-color: ${(props) => props.theme.text};

      --shadow-color-dark: rgba(0, 0, 0, 0.25);
    }
    body {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      line-height: 1.6;
      background-color: ${(props) => props.theme.secondary};
    }
    form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;
