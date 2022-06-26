import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }

 html, body, #root {
  height: 100%;
  position: relative;
 }

 body * {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, 
    system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
    'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', sans-serif;
  }

  a {
    text-decoration: none;

    &:visited, &:active, &:focus {
      color: inherit;
    }
  }

  button { 
    cursor: pointer;
  }
`;

export default GlobalStyles;
