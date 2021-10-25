// Criando o serviço que vai perguntar para o servidor
// qual é o número a ser adivinhado durante o jogo
import axios from "axios";

const api = axios.create({
  baseURL: `https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300`,
});

export const buscaNumero = () => {
  return api
    .get("")
    .then(({ data }) => {
      return data.value;
    })
    .catch(() => {
      return "falhou";
    });
};
