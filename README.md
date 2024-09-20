# Cadastro de Endereço
O código HTML fornecido cria uma página simples de cadastro de endereço, com campos para o usuário preencher dados como CEP, cidade, rua, bairro, estado, número e complemento. 

# Estrutura Básica do Documento HTML

O documento começa com o <!DOCTYPE html>, que informa ao navegador que este é um documento HTML5. 
Em seguida, temos a tag <html>, que envolve todo o conteúdo da página, e dentro dela, duas seções principais: o <head> e o <body>.

<meta charset='utf-8'>: Define o conjunto de caracteres como UTF-8, garantindo que caracteres especiais sejam exibidos corretamente.

<meta http-equiv='X-UA-Compatible' content='IE=edge'>: Garante compatibilidade com o Internet Explorer.

<meta name='viewport' content='width=device-width, initial-scale=1'>: Define que a página será responsiva, ajustando-se à largura da tela do dispositivo.

<title> Define o título da página, que é exibido na aba do navegador.

# Importação de Estilos e Scripts

No <head>, além de meta-informações, vemos a importação do Bootstrap, um framework CSS popular para estilizar páginas de forma responsiva e rápida.

<link> Carrega o arquivo CSS do Bootstrap para estilizar os elementos da página.

<link rel="stylesheet" href="cad.css">: Importa um arquivo CSS externo chamado cad.css para aplicar estilos personalizados.

<script src='cad.js'></script>: Importa um arquivo JavaScript chamado cad.js que, provavelmente, será usado para adicionar interatividade ao formulário, como validações de campos.

# Estrutura do Formulário

No corpo da página (<body>), o código principal é o formulário que permite o cadastro de endereços. Ele é criado com a tag, <form class="row g-3"> e dentro dessa tag temos diversos campos de input.

<h3>Cadastro de Endereço: Um título simples para o formulário.

Campo CEP: Um campo de texto (<input type="text">) para o usuário inserir o CEP.

Campo Cidade: Outro campo de texto para o preenchimento da cidade.

Campos Rua, Bairro, Complemento, Estado e Número: Campos de entrada de texto para coletar o endereço completo.

Todos os campos estão dentro de uma estrutura, <div class="col-md-6/col-12"> que define o layout responsivo, com o Bootstrap ajustando o tamanho dos campos com base no tamanho da tela do usuário.


# Botão de Envio
No final do formulário, há um botão de envio com a tag, <button type="submit">Entrar</button> estilizado com a classe btn-primary, que aplica o estilo de um botão azul conforme o padrão do Bootstrap.

# Estilização do Background
O corpo da página possui uma cor de fundo definida como rgb(255, 190, 252), dando à página uma aparência visual personalizada com um tom de rosa claro.