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
    height: 100%;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  // Efeito visual para fazer os elementos piscarem
  .fail, .success {
    animation: blink 0.15s linear 3;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

export default GlobalStyle;