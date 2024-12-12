import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

body, html {
  margin: 0;
  padding: 0;
  font-family: 'Pretendard', sans-serif;
  font-weight: 300;
}


  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
