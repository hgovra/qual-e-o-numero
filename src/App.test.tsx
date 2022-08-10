/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import App from './App';
import userEvent from '@testing-library/user-event';

const successServer = setupServer(
  rest.get(`https://us-central1-ss-devops.cloudfunctions.net/rand`, (req, res, ctx) => {
    return res(
      ctx.json({
        value: 123
      }),
      ctx.status(200)
    );
  })
);

const failServer = setupServer(
  rest.get(`https://us-central1-ss-devops.cloudfunctions.net/rand`, (req, res, ctx) => {
    return res(
      ctx.json({
        value: 502
      }),
      ctx.status(502)
    );
  })
);

describe("carrega um número do servidor com sucesso", () => {
  beforeAll(() => successServer.listen());
  afterAll(() => successServer.close());

  test('renderiza a interface do jogo', () => {
    render(<App />);

    const title = screen.getByText(/qual é o número/i) as HTMLHeadingElement;
    const visor = screen.getByTitle('0') as HTMLDivElement;
    const tip = screen.getByTestId('visor-tip') as HTMLSpanElement;
    const segments = screen.getAllByTestId('digit-segment') as HTMLOrSVGImageElement[];
    const guess = screen.getByPlaceholderText(/digite o palpite/i) as HTMLInputElement;
    const send = screen.getByText(/enviar/i) as HTMLButtonElement;

    expect(title).toBeInTheDocument();
    expect(visor).toBeInTheDocument();
    expect(tip).toBeInTheDocument();
    expect(segments.length).toBe(7);
    expect(guess).toBeInTheDocument();
    expect(send).toBeInTheDocument();
  });

  test("evita que valores inválidos sejam enviados", async () => {
    render(<App />);

    const guess = screen.getByPlaceholderText(/digite o palpite/i) as HTMLInputElement;

    fireEvent.change(guess, { target: { value: 301 } });
    expect(guess).toHaveValue(300);

    fireEvent.change(guess, { target: { value: 1234 } });
    expect(guess).toHaveValue(300);

    fireEvent.change(guess, { target: { value: 0 } });
    expect(guess).toHaveValue(1);
  });

  test("mostra dicas de acordo com os palpites enviados", async () => {
    render(<App />);

    const tip = screen.getByTestId('visor-tip') as HTMLSpanElement;
    const guess = screen.getByPlaceholderText(/digite o palpite/i) as HTMLInputElement;
    const send = screen.getByText(/enviar/i) as HTMLButtonElement;

    await waitFor(async () => {
      act(() => {
        fireEvent.change(guess, { target: { value: 100 } });
        userEvent.click(send);
      });

      const visor = await screen.findByTitle('100') as HTMLDivElement;

      expect(visor).toBeInTheDocument();
      expect(tip).toHaveTextContent(/é maior/i);
      expect(guess).toHaveDisplayValue('');
    });

    await waitFor(async () => {
      act(() => {
        fireEvent.change(guess, { target: { value: 200 } });
        userEvent.click(send);
      });

      const visor = await screen.findByTitle('200') as HTMLDivElement;

      expect(visor).toBeInTheDocument();
      expect(tip).toHaveTextContent(/é menor/i);
      expect(guess).toHaveDisplayValue('');
    });
  });

  test("apresenta a mensagem de vitória", async () => {
    render(<App />);

    const tip = screen.getByTestId('visor-tip') as HTMLSpanElement;
    const guess = screen.getByPlaceholderText(/digite o palpite/i) as HTMLInputElement;
    const send = screen.getByText(/enviar/i) as HTMLButtonElement;

    await waitFor(async () => {
      act(() => {
        fireEvent.change(guess, { target: { value: 123 } });
        userEvent.click(send);
      });

      const visor = await screen.findByTitle('123') as HTMLDivElement;
      const restart = screen.getByText(/nova partida/i) as HTMLButtonElement;

      expect(tip).toHaveTextContent(/você acertou!!!!/i);
      expect(visor).toHaveClass('success');
      expect(restart).toBeInTheDocument();
    });
  });

  test("inicia uma nova partida", async () => {
    render(<App />);

    const tip = screen.getByTestId('visor-tip') as HTMLSpanElement;
    const guess = screen.getByPlaceholderText(/digite o palpite/i) as HTMLInputElement;
    const send = screen.getByText(/enviar/i) as HTMLButtonElement;

    await waitFor(async () => {
      act(() => {
        fireEvent.change(guess, { target: { value: 123 } });
        userEvent.click(send);
      });

      const restart = screen.getByText(/nova partida/i) as HTMLButtonElement;

      act(() => {
        userEvent.click(restart);
      });

      const visor = await screen.findByTitle("0") as HTMLDivElement;

      expect(visor).toBeInTheDocument();
      expect(guess).toHaveDisplayValue('');
      expect(tip).toHaveTextContent('');
      expect(restart).not.toBeInTheDocument();
    });
  });
});

describe("acontece uma falha do servidor", () => {
  beforeAll(() => failServer.listen());
  afterAll(() => failServer.close());

  test("apresenta a mensagem de erro", async () => {
    render(<App />);

    const visor = await screen.findByTitle('502') as HTMLDivElement;
    const tip = screen.getByTestId('visor-tip') as HTMLSpanElement;
    const restart = screen.getByText(/nova partida/i) as HTMLButtonElement;
    const guess = screen.getByPlaceholderText(/digite o palpite/i) as HTMLInputElement;

    expect(visor).toHaveClass('fail');
    expect(tip).toHaveTextContent(`ERRO`);
    expect(restart).toBeInTheDocument();
    expect(guess).toHaveDisplayValue('');
  });
});
