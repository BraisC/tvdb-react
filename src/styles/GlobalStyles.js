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
      --color-red: #ff5959;
      --color-primary: ${(props) => props.theme.primary};
      --color-secondary: ${(props) => props.theme.secondary};
      --color-transparency: ${(props) => props.theme.transparency};
      --color-white: ${(props) => props.theme.white};
      --color-text: ${(props) => props.theme.text};
      --color-transparency-show: ${(props) => props.theme.transparencyShow};

      --shadow: 6px 6px 13px rgba(0, 0, 0, 0.35);

      @media ${(props) => props.theme.mediaQueries.tabLand} {
          font-size: 56.25%;
      }
      @media ${(props) => props.theme.mediaQueries.tab} {
          font-size: 50%;
      }
    


    }
    body {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      line-height: 1.6;
      
    }
    form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    .modal-video:focus{
      outline: none;
    }

    .modal-video-close-btn{
      width: 30px;
      height: 30px; 
      cursor: pointer;
    }
    .modal-video-close-btn::before, .modal-video-close-btn::after{
      background-color: var(--color-red) !important;
      height: 3px;
     
      cursor: pointer;
    }
`;
