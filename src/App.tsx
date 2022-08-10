import { Reset } from 'styled-reset';
import GlobalStyle from "./themes/globalStyles";

import Game from './pages/Game';

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />

      <Game />
    </>
  );
}

export default App;
