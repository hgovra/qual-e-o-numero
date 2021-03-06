import { useState, useEffect, useRef } from "react";

import { buscaNumero } from "../../services/api";

import Visor from "../../components/Visor";

import {
  Campo,
  Container,
  Enviar,
  Espaco,
  Icone,
  Msg,
  Palpite,
  Recomecar,
  Resultado,
  Titulo,
  Topo,
} from "./style";

import IconeImg from "./refresh.svg";

const Jogo = () => {
  // Número a ser adivinhado
  // Caso, haja algum problema, receberemos como não-número (NaN)
  const [resposta, setResposta] = useState();

  // Valor que o visor está mostrando
  const [valor, setValor] = useState(0);

  // Aparência da interface de acordo com o andamento do jogo
  const [status, setStatus] = useState({
    classe: "",
    msg: "",
    fim: false,
  });

  // Valor que o jogador está inserindo no campo
  const [tentativa, setTentativa] = useState("");

  // Focar automaticamente o campo para melhorar o UX
  const campoRef = useRef(null);

  const focaCampo = () => {
    campoRef.current.focus();
  };

  const novoJogo = () => {
    // Carregar um novo número para adivinhar
    carregaResposta();

    setTentativa("");
    setValor(0);
    setStatus({
      classe: "",
      msg: "",
      fim: false,
    });
  };

  const carregaResposta = () => {
    buscaNumero().then((consulta) => {
      const { status, retorno } = consulta;

      // Status 200 significa que carregou o número do servidor com sucesso
      if (status === 200) {
        const campo = campoRef.current;
        
        // Essa validação aqui é necessária para evitar erro nos testes
        if(campo) {
          setResposta(retorno);

          focaCampo();
        }
      } else {
        setStatus({
          classe: "falha",
          msg: "ERRO",
          fim: true,
        });
        setValor(retorno);
      }
    });
  };

  const controlaInput = (e) => {
    setStatus({
      ...status,
      classe: "",
    });

    const numero = e.target.value;

    // Tamanho máximo do palpite: 3 caracteres
    if (`${numero}`.length > 3) {
      e.target.value = 300;
      e.target.select();
    }

    // Palpite mínimo: 1
    if (numero < 1) {
      e.target.value = 1;
      e.target.select();
    }

    // Palpite máximo: 300
    if (numero > 300) {
      e.target.value = 300;
      e.target.select();
    }

    setTentativa(e.target.value);
  };

  const enviaPalpite = (palpite) => {
    // Validação inicial: precisa haver algum palpite
    if (palpite !== "") {
      // Convertendo o valor em número para fazer cálculos
      palpite = Number(palpite);

      setValor(palpite);

      // CERTA RESPOSTA (ler com a voz do Sílvio Santos)
      if (palpite === resposta) {
        setStatus({
          classe: "acerto",
          msg: "Você acertou!!!!",
          fim: true,
        });
        setTentativa('');
      }
      
      // Palpite é maior que a resposta
      if (palpite > resposta) {
        setStatus({
          ...status,
          msg: "É menor",
        });
        setTentativa('');
      }
      
      // Palpite é menor que a resposta
      if (palpite < resposta) {
        setStatus({
          ...status,
          msg: "É maior",
        });
        setTentativa('');
      }
    }

    focaCampo();
  };

  // Carregar um número para adivinhar imediatamente ao carregar o app
  useEffect(() => {
    carregaResposta();

    focaCampo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Topo>
        <Titulo>Qual é o número?</Titulo>
      </Topo>

      <Resultado>
        <Msg className={`${status.classe} visor-dica`}>{status.msg}</Msg>
        <Visor valor={valor} status={status.classe} />
      </Resultado>

      <Espaco>
        {status.fim ? (
          <Recomecar onClick={novoJogo}>
            <Icone src={IconeImg} alt="" /> Nova Partida
          </Recomecar>
        ) : null}
      </Espaco>

      <Palpite>
        <Campo
          disabled={status.fim ? "disabled" : ""}
          type="number"
          value={tentativa}
          onChange={(e) => {
            controlaInput(e);
          }}
          placeholder="Digite o palpite"
          id="campo-palpite"
          ref={campoRef}
        />
        <Enviar
          disabled={status.fim ? "disabled" : ""}
          onClick={() => enviaPalpite(tentativa)}
        >
          Enviar
        </Enviar>
      </Palpite>
    </Container>
  );
};

export default Jogo;
