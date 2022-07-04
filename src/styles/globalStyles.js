import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
      box-sizing:border-box;
      outline:none;
      border:none;
    }
  html, body {
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.lightgray};
  }
`;

export default GlobalStyles;
