import { buscarCep } from "../services/viaCep.js";

const campoCep = document.querySelector("#cep");
const btnBuscar = document.querySelector("#btnBuscar");

async function preencherEndereco() {
    if (!campoCep.value) return;

    try {
        const endereco = await buscarCep(campoCep.value);

        document.querySelector("#logradouro").value = endereco.logradouro;
        document.querySelector("#bairro").value = endereco.bairro;
        document.querySelector("#cidade").value = endereco.localidade;
        document.querySelector("#uf").value = endereco.uf;

    } catch (erro) {
        alert(erro.message);
    }
}

// Busca ao sair do campo CEP
campoCep.addEventListener("blur", preencherEndereco);

// Busca ao clicar no botão
btnBuscar.addEventListener("click", preencherEndereco);