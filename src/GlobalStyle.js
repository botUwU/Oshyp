// src/GlobalStyle.js
import { createGlobalStyle } from "styled-components";
import MyCustomFont from "./assets/fonts/PlaywriteGBS-ExtraLight.ttf"; // Adjust the path accordingly

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MyCustomFont';
    src: url(${MyCustomFont}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'MyCustomFont', sans-serif; /* Default font */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
