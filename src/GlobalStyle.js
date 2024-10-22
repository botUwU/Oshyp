// src/GlobalStyle.js
import { createGlobalStyle } from "styled-components";
import ExtraLight from "./assets/fonts/PlaywriteGBS-ExtraLight.ttf";
import ExtraLightItalic from "./assets/fonts/PlaywriteGBS-ExtraLightItalic.ttf";
import Italic from "./assets/fonts/PlaywriteGBS-Italic.ttf";
import Light from "./assets/fonts/PlaywriteGBS-Light.ttf";
import LightItalic from "./assets/fonts/PlaywriteGBS-LightItalic.ttf";
import Regular from "./assets/fonts/PlaywriteGBS-Regular.ttf";
import Thin from "./assets/fonts/PlaywriteGBS-Thin.ttf";
import ThinItalic from "./assets/fonts/PlaywriteGBS-ThinItalic.ttf";

// Adjust the path accordingly

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'PlaywriteGBS-Regular';
    src: url(${Regular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
@font-face {
    font-family: 'PlaywriteGBS-Thin';
    src: url(${Thin}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
@font-face {
    font-family: 'PlaywriteGBS-Italic';
    src: url(${Italic}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'PlaywriteGBS-ExtraLight';
    src: url(${ExtraLight}) format('truetype');
    font-weight: 200; // Extra Light weight
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
