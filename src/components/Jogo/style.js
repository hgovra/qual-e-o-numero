import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Topo = styled.header`
  height: 10vh;
`;
export const Titulo = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -1px;
  color: #ef6c00;
  text-transform: uppercase;
  background: -webkit-linear-gradient(#ef6c00, #db6300);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::after {
    display: block;
    content: "";
    margin: 10px auto;
    width: 205px;
    height: 1px;
    background: #cfcfcf;
  }
`;

export const Resultado = styled.section`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Msg = styled.span`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -1px;
  color: #ff6600;
  display: inline-block;
  height: 20px;
  margin-bottom: 30px;
  margin-top: -40px;

  &.falha {
    color: #cc3300;
  }

  &.acerto {
    color: #32bf00;
  }
`;

export const Espaco = styled.section`
  height: 20vh;
`;
export const Recomecar = styled.button`
  background: linear-gradient(180deg, #434854 0%, #9e9e9e 100%);
  border: 0;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  padding: 13px;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
export const Icone = styled.img`
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin: -2px 1px 0 -5px;
`;

export const Palpite = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 20vh;
  flex-basis: content;
`;
export const Campo = styled.input`
  background: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  padding: 13px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #222222;

  &:focus {
    border-color: #FF6600;
    outline: none;
  }
  &::placeholder {
    color: #9e9e9e;
  }
  &[type=number] {
    -moz-appearance: textfield;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  &:disabled,
  &[disabled] {
    background: #f5f5f5;
  }

  &.falha {
    border-color: #cc3300;
    outline: none;
    color: #cc3300;
  }
`;
export const Enviar = styled.button`
  background: linear-gradient(180deg, #ef6c00 0%, #c0661c 100%);
  border: 0;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  padding: 13px;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled,
  &[disabled] {
    background: #dddddd;
    cursor: default;
    opacity: 1;
  }
`;
