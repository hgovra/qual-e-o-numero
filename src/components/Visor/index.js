import { Caixa } from "./style";

import Algarismo from "../Algarismo";

const Visor = (props) => {
  const { valor, status } = props;

  // Transformando o número do visor em uma array para gerar os algarismos individualmente
  const sequencia = `${valor}`.split("");

  return (
    <Caixa className={status} title={valor}>
      {sequencia.map((algarismo, index) => (
          <Algarismo numero={algarismo} key={`num-${index}-${algarismo}`} />
      ))}
    </Caixa>
  );
};

export default Visor;
