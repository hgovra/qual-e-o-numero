/**
 * Criando o serviço que vai perguntar para o servidor
 * qual é o número a ser adivinhado durante o jogo
 */

import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const api = axios.create({
    baseURL: process.env.REACT_APP_NUMBER_API,
});

interface ResultData {
    data: NumberData;
    status: number;
}

interface NumberData {
    value: number;
}

export const getNumber = () => {
    return api
        .get(`/rand?min=1&max=300`)
        .then((result: ResultData) => {
            const { data, status } = result;

            return { value: data.value, status: status };
        })
        .catch(error => {
            const { status } = error.response;

            /**
             * Em caso de erro, retorna o próprio código como valor
             * para exibi-lo no visor.
             */
            return { value: status, status: status };
        });
};
