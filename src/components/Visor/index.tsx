import { Frame } from "./styled";

import Digit from "../Digit";

interface Props {
    display: number;
    status: string;
}

const Visor = (props: Props):JSX.Element => {
    const { display, status } = props;

    /**
     * Transformando o número do visor em um array para gerar
     * os algarismos individualmente
     */
    const sequence = `${display}`.split('');

    return (
        <Frame className={status} title={display as unknown as string}>
            {sequence.map((digit, index) => (
                <Digit character={digit} key={`num-${index}-${digit}`} />
            ))}
        </Frame>
    );
};

export default Visor;
