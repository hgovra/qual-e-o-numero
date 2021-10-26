// Criando o serviço que vai perguntar para o servidor
// qual é o número a ser adivinhado durante o jogo
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const api = axios.create({
  baseURL: `https://us-central1-ss-devops.cloudfunctions.net`,
});

export const buscaNumero = () => {
  return api
    .get(`/rand?min=1&max=300`)
    .then((retorno) => {
      const { data, status } = retorno;

      return { retorno: data.value, status: status };
    })
    .catch((erro) => {
      if (erro.response) {
        const { status } = erro.response;

        // Em caso de erro, retorna o próprio código como valor
        return { retorno: status, status: status };
      }
    });
};
