import { useState, useEffect, ChangeEvent } from "react";

import { getNumber } from "../../services/number";

import Visor from "../../components/Visor";

import { Box, Container, Guess, Icon, Question, Restart, Result, Send, Space, Tip, Top } from "./styled";

import RefreshIcon from "../../assets/refresh.svg";

interface RequestResult {
    value: number;
    status: number
}

const Game = (): JSX.Element => {
    // Número a ser adivinhado
    const [answer, setAnswer] = useState<null | number>(null);

    // Valor que o visor está mostrando
    const [display, setDisplay] = useState(0);

    // Comportamento da interface de acordo com o andamento do jogo
    const [ui, setUi] = useState({
        class: '',
        message: '',
        finish: false,
    });

    // Valor que o jogador está inserindo no campo de palpites
    const [guess, setGuess] = useState<string | number>('');

    /**
     * Focar o campo de palpites automaticamente
     * sem esperar o usuário clicar nele
     */
    const focusInput = () => {
        const input = document.querySelector('#guess') as HTMLInputElement;

        input.focus();
    };

    // Iniciar uma nova partida
    const loadNewNumber = async () => {
        try {
            const request = await getNumber().then(result => {
                return result;
            });

            const { value, status } = request as RequestResult;

            // Recebeu um número corretamente
            if (status === 200) {
                setAnswer(value);
                setGuess('');
                setDisplay(0);
                setUi({
                    class: '',
                    message: '',
                    finish: false,
                });

                focusInput();
            } else { // recebeu erro
                setUi({
                    class: "fail",
                    message: "ERRO",
                    finish: true,
                });
                setDisplay(value);
            }
        } catch (error) { // Falhou
            setUi({
                class: "fail",
                message: "ERRO",
                finish: true,
            });
            setDisplay(502);
        }
    };

    // Controlar comportamento do campo de palpites
    const handleInput = (e: ChangeEvent) => {
        const input = e.target as HTMLInputElement;

        let bid = input.value as unknown as number;

        // Palpite mínimo: 1
        if (bid < 1) {
            bid = 1;
            setTimeout(() => input.select(), 0);
        }

        // Palpite máximo: 300
        if (bid > 300) {
            bid = 300;
            setTimeout(() => input.select(), 0);
        }

        setGuess(bid);
    };

    const sendGuess = (bid: number) => {

        // Validação inicial: precisa haver algum palpite digitado
        if (bid) {
            // Convertendo o valor em número para fazer comparações
            bid = +bid;

            setDisplay(bid);

            const check = answer as number;

            // ACERTOU
            if (bid === check) {
                setUi({
                    class: "success",
                    message: "Você acertou!!!!",
                    finish: true,
                });
                setGuess('');
            }

            // Palpite é maior que a resposta
            if (bid > check) {
                setUi({
                    ...ui,
                    message: "É menor",
                });
                setGuess('');
            }

            // Palpite é menor que a resposta
            if (bid < check) {
                setUi({
                    ...ui,
                    message: "É maior",
                });
                setGuess('');
            }
        }

        focusInput();
    };

    // Carregar um número para adivinhar imediatamente ao carregar o app
    useEffect(() => {
        loadNewNumber();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <Top>
                <Question>Qual é o número?</Question>
            </Top>

            <Result>
                <Tip className={`${ui.class}`} data-testid="visor-tip">{ui.message}</Tip>
                <Visor display={display} status={ui.class} />
            </Result>

            <Space>
                {ui.finish ? (
                    <Restart onClick={loadNewNumber}>
                        <Icon src={RefreshIcon} alt="" /> Nova Partida
                    </Restart>
                ) : null}
            </Space>

            <Guess>
                <Box
                    id="guess"
                    disabled={ui.finish}
                    type="number"
                    value={guess}
                    onChange={e => handleInput(e)}
                    placeholder="Digite o palpite"
                />
                <Send
                    disabled={ui.finish}
                    role="button"
                    onClick={() => sendGuess(guess as number)}
                >
                    Enviar
                </Send>
            </Guess>
        </Container>
    );
};

export default Game;
