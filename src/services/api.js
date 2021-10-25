// Criando o serviço que vai perguntar para o servidor
// qual é o número a ser adivinhado durante o jogo
import axios from "axios";

const api = axios.create({
  baseURL: `https://us-central1-ss-devops.cloudfunctions.net`,
});

export const buscaNumero = () => {
  return api
    .get(`/rand?min=1&max=300`)
    .then(({ data }) => {
      return data.value;
    })
    .catch(() => {
      return "falhou";
    });
};
