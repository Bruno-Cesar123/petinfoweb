import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #f8f8f8;
    color: #000;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }
`;
