import { Reset } from "styled-reset";
import GlobalStyle from "./themes/globalStyles";

import Jogo from "./pages/Jogo";

const App = () => {
  return (
    <>
      <Reset />
      <GlobalStyle />

      <Jogo />
    </>
  );
};

export default App;
