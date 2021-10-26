import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { rest } from "msw";
import { setupServer } from "msw/node";

import App from "./App";

const servidorSucesso = setupServer(
  rest.get(
    `https://us-central1-ss-devops.cloudfunctions.net/rand`,
    (req, res, ctx) => {
      return res(
        ctx.json({
          value: 123,
        })
      );
    }
  )
);

const servidorFalha = setupServer(
  rest.get(
    `https://us-central1-ss-devops.cloudfunctions.net/rand`,
    (req, res, ctx) => {
      return res(
        ctx.json({
          value: "falhou",
        })
      );
    }
  )
);

describe("carrega número do servidor com sucesso", () => {
  beforeAll(() => servidorSucesso.listen());
  afterAll(() => servidorSucesso.close());

  test("renderiza a interface", async () => {
    act(() => {
      render(<App />);
    })
    
    await waitFor(() => {
      const titulo = screen.getByText(/qual é o número/i);
  
      const visor = screen.getByTitle("0");
      const dica = visor.closest("section").getElementsByClassName("visor-dica");
      const segmentos = visor.getElementsByTagName("path");
  
      const campo = screen.getByPlaceholderText(/digite o palpite/i);
      const btn = screen.getByText(/enviar/i);
  
      expect(titulo).toBeInTheDocument();
  
      expect(visor).toBeInTheDocument();
      expect(dica.length).toBe(1);
      expect(segmentos.length).toBe(7);
  
      expect(campo).toBeInTheDocument();
      expect(btn).toBeInTheDocument();
    });
  });

  test("evita que valores inválidos sejam enviados", async () => {
    act(() => {
      render(<App />);
    })
    
    await waitFor(() => {
      const campo = screen.getByPlaceholderText(/digite o palpite/i);
  
      act(() => {
        fireEvent.change(campo, { target: { value: 301 } });
      });
  
      expect(campo.value).toBe("300");
    });

    await waitFor(() => {
      const campo = screen.getByPlaceholderText(/digite o palpite/i);
  
      act(() => {
        fireEvent.change(campo, { target: { value: 12345 } });
      });
  
      expect(campo.value).toBe("300");
    });

    await waitFor(() => {
      const campo = screen.getByPlaceholderText(/digite o palpite/i);
  
      act(() => {
        fireEvent.change(campo, { target: { value: 0 } });
      });
  
      expect(campo.value).toBe("1");
    });
  });

  test("mostra dicas de acordo com os palpites enviados", async () => {
    act(() => {
      render(<App />);
    });
    
    await waitFor(() => {
      const campo = screen.getByPlaceholderText(/digite o palpite/i);
      const btn = screen.getByText(/enviar/i);
  
      act(() => {
        fireEvent.change(campo, { target: { value: 100 } });
        userEvent.click(btn);
      });
      
      const visor = screen.getByTitle("100");
      const dicaMaior = screen.getByText(/é maior/i);

      expect(visor).toBeInTheDocument();
      expect(dicaMaior).toBeInTheDocument();
    });

    await waitFor(() => {
      const campo = screen.getByPlaceholderText(/digite o palpite/i);
      const btn = screen.getByText(/enviar/i);

      act(() => {
        fireEvent.change(campo, { target: { value: 200 } });
        userEvent.click(btn);
      });
  
      const visor = screen.getByTitle("200");
      const dicaMenor = screen.getByText(/é menor/i);

      expect(visor).toBeInTheDocument();
      expect(dicaMenor).toBeInTheDocument();
    });
  });

  test("apresenta a mensagem de vitória", async () => {
    act(() => {
      render(<App />);
    });
    
    await waitFor(() => {
      const campo = screen.getByPlaceholderText(/digite o palpite/i);
      const btn = screen.getByText(/enviar/i);
  
      act(() => {
        fireEvent.change(campo, { target: { value: 123 } });
        userEvent.click(btn);
      });
      
      const visor = screen.getByTitle("123");
      const parabens = screen.getByText(/você acertou!!!!/i);
      const novo = screen.getByText(/nova partida/i);

      expect(parabens).toBeInTheDocument();
      expect(visor).toHaveClass('acerto');
      expect(novo).toBeInTheDocument();
    });
  });

  test("inicia uma nova partida", async () => {
    act(() => {
      render(<App />);
    });
    
    await waitFor(() => {
      const campo = screen.getByPlaceholderText(/digite o palpite/i);
      const enviar = screen.getByText(/enviar/i);
  
      act(() => {
        fireEvent.change(campo, { target: { value: 123 } });
        userEvent.click(enviar);
      });
    
      const parabens = screen.getByText(/você acertou!!!!/i);
      const novo = screen.getByText(/nova partida/i);

      act(() => {
        userEvent.click(novo);
      });

      const visor = screen.getByTitle("0");
      
      const algarismos = visor.getElementsByTagName("svg");

      expect(parabens).toHaveTextContent('');
      expect(novo).not.toBeInTheDocument();
      expect(visor).toBeInTheDocument();
      expect(algarismos.length).toBe(1);
    });
  });
});

describe("acontece uma falha do servidor", () => {
  beforeAll(() => servidorFalha.listen());
  afterAll(() => servidorFalha.close());

  test("apresenta a mensagem de erro", async () => {
    act(() => {
      render(<App />);
    });
    
    await waitFor(() => {
      const visor = screen.getByTitle("502");
      const aviso = screen.getByText(`ERRO`);
      const btn = screen.getByText(/nova partida/i);

      expect(visor).toHaveClass('falha');
      expect(aviso).toBeInTheDocument();
      expect(btn).toBeInTheDocument();
    });
  });
});