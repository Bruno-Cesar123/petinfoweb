import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    scroll-behavior: smooth;
    font-size: 67%;
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
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }
`;
