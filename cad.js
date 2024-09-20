 'use strict'; // Modo restrito // Este modo faz com que o JavaScript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação /*Consumo de API - https://viacep.com.br/*/ 


 // Função para limpar formulario
conts limparformulario = () =>{
    document.getElementById('logradouro').value = '';
    document.getElementById('CEP').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('Bairro').value = '';
    document.getElementById('Complemento').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('Número').value = '';
}

const eNumero = (numero) => /^[0-9]+$/.test(numero); 

// lent é uma propriedade que verifica a quantidade de caracteres dentro do argumento cep
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

// Função para preencher formulario com campos da API
const preencherFormulario = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro
    document.getElementById('localidade').value = endereco.localidade
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('uf').value = endereco.uf
}