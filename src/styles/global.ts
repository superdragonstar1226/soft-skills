import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    width: 100vw;
  }

  body, input, button {
    font: 16px Poppins, sans-serif;
  }

  h1 {
    font: 36px Big Shoulders Inline Text, cursive;
  }

  button {
    cursor: pointer;
  }
`;
