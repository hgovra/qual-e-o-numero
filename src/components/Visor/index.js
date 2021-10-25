import { Caixa } from "./style";

import Algarismo from "../Algarismo";

const Visor = (props) => {
  const { valor, status } = props;

  const sequencia = `${valor}`.split("");

  return (
    <Caixa className={status}>
      {sequencia.map((algarismo, index) => (
          <Algarismo numero={algarismo} key={`num-${index}-${algarismo}`} />
      ))}
    </Caixa>
  );
};

export default Visor;
