/**
 * Os algarismos do visor são um SVG exportado a partir do Figma.
 * Usando CSS, desenhamos cada número possível com os 7 segmentos
 * e deixamos o React trocar a classe de acordo com o valor.
 */

import { Character, Frame } from "./styled";

interface Props {
  character: string
}

const Digit = (props: Props): JSX.Element => {
  const { character } = props;

  return (
    <Frame>
      <Character x="0px" y="0px" viewBox="0 0 56 100" className={`num-${character}`}>
        <path
          data-testid="digit-segment"
          className="segment a"
          d="M12.8,11h29.8l10.3-9.8C52,0.4,50.8,0,49.5,0H5.7C4.4,0,3.2,0.4,2.2,1.2L12.8,11z"
        />
        <path
          data-testid="digit-segment"
          className="segment b"
          d="M1.3,2.1C0.5,3.1,0,4.3,0,5.7V44c0,2.2,1.3,4.1,3.1,5l8.6-6.5V11.8L1.3,2.1z"
        />
        <path
          data-testid="digit-segment"
          className="segment c"
          d="M43.4,12.1v30.5l8.6,6.5c1.8-0.9,3.1-2.8,3.1-5V5.7c0-1.3-0.5-2.6-1.3-3.5L43.4,12.1z"
        />
        <path
          data-testid="digit-segment"
          className="segment d"
          d="M12.8,89h29.8l10.3,9.8c-1,0.7-2.2,1.2-3.5,1.2H5.7c-1.3,0-2.5-0.4-3.4-1.2L12.8,89z"
        />
        <path
          data-testid="digit-segment"
          className="segment e"
          d="M1.3,97.9c-0.8-1-1.3-2.2-1.3-3.6V56c0-2.2,1.3-4.1,3.1-5l8.6,6.5v30.8L1.3,97.9z"
        />
        <path
          data-testid="digit-segment"
          className="segment f"
          d="M43.4,87.9V57.4l8.6-6.5c1.8,0.9,3.1,2.8,3.1,5v38.4c0,1.3-0.5,2.6-1.3,3.6L43.4,87.9z"
        />
        <path
          data-testid="digit-segment"
          className="segment g"
          d="M42.6,44H12.6l-8,5.9l8,5.9H24h7.1h11.4l8-5.9L42.6,44z"
        />
      </Character>
    </Frame>
  );
};

export default Digit;
