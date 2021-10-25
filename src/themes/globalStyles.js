/**
 *  Definindo os estilos de CSS globais
 *  para o projeto através do styled-components.
 */

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(180deg, #EEEEEE 0%, #FFFFFF 100%) no-repeat;
    min-height: 100vh;
  }

  #root {
    height: 100vh;
    width: 100vw;
  }
`;

export default GlobalStyle;
