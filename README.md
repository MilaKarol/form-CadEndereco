# Cadastro de Endereço📍

O código HTML fornecido cria uma página simples de cadastro de endereço, com campos para o usuário preencher dados pessoais e de endereço, como nome, sobrenome, e-mail, senha, CPF, data de nascimento, CEP, cidade, rua, bairro, estado, número e complemento. 

# Estrutura Básica do Documento HTML 📐

O documento começa com o &lt;!DOCTYPE html&gt;, que informa ao navegador que este é um documento HTML5. 
Em seguida, temos a tag &lt;html&gt;, que envolve todo o conteúdo da página, e dentro dela, duas seções principais: o &lt;head&gt; e o &lt;body&gt;.

&lt;meta charset='utf-8'&gt;: Define o conjunto de caracteres como UTF-8, garantindo que caracteres especiais sejam exibidos corretamente. 

&lt;meta http-equiv='X-UA-Compatible' content='IE=edge'&gt;: Garante compatibilidade com o Internet Explorer.

&lt;meta name='viewport' content='width=device-width, initial-scale=1'&gt;: Define que a página será responsiva, ajustando-se à largura da tela do dispositivo.

&lt;title&gt; Define o título da página, que é exibido na aba do navegador.

# Importação de Estilos e Scripts 📤

No &lt;head&gt;, além de meta-informações, vemos a importação do Bootstrap, um framework CSS popular para estilizar páginas de forma responsiva e rápida.

&lt;link &gt;Carrega o arquivo CSS do Bootstrap para estilizar os elementos da página.

&lt;link rel="stylesheet" href="cad.css"&gt;: Importa um arquivo CSS externo chamado cad.css para aplicar estilos personalizados.

&lt;script src='cad.js'></script&gt;: Importa um arquivo JavaScript chamado cad.js que, provavelmente, será usado para adicionar interatividade ao formulário, como validações de campos.

&lt;meta charset='utf-8'&gt;: Define o conjunto de caracteres como UTF-8, garantindo que caracteres especiais sejam exibidos corretamente.

&lt;meta http-equiv='X-UA-Compatible' content='IE=edge'&gt;: Garante compatibilidade com o Internet Explorer.


&lt;meta name='viewport' content='width=device-width, initial-scale=1'>: Define que a página será responsiva, ajustando-se à largura da tela do dispositivo.

# Estrutura do Formulário 📏

No corpo da página (&lt;body&gt;), o código principal é o formulário que permite o cadastro de endereços e dados pessoais. Ele é criado com a tag &lt;form class="row g-3"&gt; e dentro dessa tag temos diversos campos de input.

<h3&gt; Cadastro de Endereço: Um título simples para o formulário.


Campo CEP: Um campo de texto (&lt;input type="text"&gt;) para o usuário inserir o CEP.


Campo Cidade: Outro campo de texto para o preenchimento da cidade.


Campos Rua, Bairro, Complemento, Estado e Número: Campos de entrada de texto para coletar o endereço completo.


Todos os campos estão dentro de uma estrutura, &lt;div class="col-md-6/col-12"&gt; que define o layout responsivo, com o Bootstrap ajustando o tamanho dos campos com base no tamanho da tela do usuário.



<h3&gt; Seção de Dados Pessoais.

Título do Formulário: &lt;h3&gt;Dados Pessoais&lt;/h3&gt;


Campo NOME: Um campo de texto (&lt;input type="text" id="nome" name="nome" placeholder="Nome" required&gt;).


Campo SOBRENOME: Um campo de texto para o sobrenome.


Campo EMAIL: Um campo de texto para o e-mail.


Campo SENHA: Um campo de senha para a criação de uma senha segura.


Campo CPF: Um campo de texto para o CPF.


Campo DATA DE NASCIMENTO: Um campo de data para a data de nascimento.


# Botão de Envio ⌨️

No final do formulário, há um botão de envio com a tag, &lt;button type="submit"&lt;Entrar&lt;/button> estilizado com a classe btn-primary, que aplica o estilo de um botão azul conforme o padrão do Bootstrap.

# Estilização do Backgroun 🫧

O corpo da página possui uma cor de fundo definida como &lt;rgb(255, 190, 252)&gt;, dando à página uma aparência visual personalizada com um tom de rosa claro.

# Estilos Personalizados com CSS 🎨

O arquivo CSS cad.css contém estilos personalizados para aprimorar a aparência do formulário:

Espaçamento: O formulário tem um &lt;padding de 30px&gt;, proporcionando um espaçamento adequado entre a borda da página e os campos.

Botão Entrar: O botão tem efeitos de hover que aumentam seu tamanho e mudam sua cor, melhorando a interatividade do usuário.

Inputs: Campos de entrada possuem bordas arredondadas e efeitos de zoom ao serem destacados. O uso de transition e transform proporciona um feedback visual ao usuário.

Label: Os rótulos dos campos são estilizados para serem negritos e com espaçamento adequado.

Alinhamento do CPF e Data de Nascimento: Uma classe .cpf-data foi criada para alinhar os campos de CPF e Data de Nascimento lado a lado.

# Função pesquisarCep 📬

Essa é uma função assíncrona (definida como async), ou seja, ela permite a utilização de promessas (promises), o que é útil para realizar operações que podem demorar um pouco, como acessar APIs.

# limparFormulario() 🧹🪣

A função provavelmente limpa os campos de formulário antes de buscar as informações. Essa parte do código não está visível, mas podemos deduzir que apaga qualquer dado que já tenha sido preenchido.

# Construção da URL 🪚

A variável url monta o endereço da API ViaCEP, substituindo ${cep.value} pelo valor do CEP digitado pelo usuário:

# js

Copiar código
```
const url = `https://viacep.com.br/ws/${cep.value}/json/`; 
```
Esse URL é usado para buscar os dados de endereço relacionados ao CEP.

# Verificação do CEP 📃

A função cepValido(cep.value) é chamada para verificar se o CEP informado pelo usuário é válido. Novamente, essa função não está visível, mas deve validar o formato correto do CEP.

# Busca dos Dados 🔎

Se o CEP for válido, a função entra no bloco if e usa o método fetch para fazer a requisição à API:


Copiar código
```
const dados = await fetch(url);
```
Aqui, o await faz a função esperar a resposta da API antes de continuar. Depois que a resposta chega, ela é convertida para JSON:

# js

Copiar código
```
const addres = await dados.json();
```

# Tratamento de Erros ❌

Após a obtenção dos dados, o código verifica se a propriedade erro está presente no objeto addres retornado pela API:

# js
Copiar código
```
if(addres.hasOwnProperty('erro')){
    alert("CEP não encontrado");
}
```
Se a API retornar um erro (por exemplo, se o CEP não existir), uma mensagem de alerta é mostrada para o usuário.


# Evento de Escuta 🔊

No final, um "escutador" de eventos é adicionado ao campo de CEP:

# js
Copiar código
```
document.getElementById("cep").addEventListener("focusout", pesquisarCep);
```
Ele dispara a função pesquisarCep quando o usuário sai (dá "focusout") do campo onde digitou o CEP. Assim, ao digitar o CEP e clicar fora do campo, a busca na API é automaticamente iniciada.


# Recursos JavaScript 🛠️

O &lt;addEventListener&gt; é um método do JavaScript usado para registrar (ou "ouvir") eventos em elementos do DOM, como cliques, teclas pressionadas, mudanças de input, entre outros.
Com ele, você pode adicionar uma função para ser executada quando um determinado evento ocorre.

#
&lt;addres:&gt; Esse é o objeto em que você está verificando se existe uma propriedade específica.

#
&lt;hasOwnProperty('erro'):&gt; Esse método verifica se o objeto tem a propriedade "erro" como sua própria propriedade (e não uma propriedade herdada de outro objeto).
Ele retorna true se a propriedade existir, e false caso contrário.

#
&lt;await:&gt; A palavra-chave await faz com que o JavaScript espere a resolução de uma promessa (promise) antes de continuar a execução do código.
Ela só pode ser usada dentro de funções &lt;async&gt;. Nesse caso, &lt;await&gt; está esperando que a conversão dos dados para o formato &lt;JSON&gt; seja concluída.

#
&lt;dados.json():&gt; Aqui, dados é uma resposta (do tipo Response) de uma requisição HTTP, como uma requisição feita com &lt;fetch()&gt;. O método &lt;.json()&gt; é uma função que transforma o corpo da resposta (normalmente em formato JSON bruto) em um objeto JavaScript.
Esse método retorna uma promessa, por isso a necessidade de usar &lt;await&gt; para esperar que a conversão seja concluída.

#
&lt;const addres:&gt; Estamos criando uma constante chamada addres que armazenará o resultado da conversão dos dados JSON para um objeto JavaScript.

#
&lt;fetch&gt; É uma função JavaScript utilizada para fazer requisições HTTP de forma assíncrona, permitindo buscar dados de uma URL ou enviar dados para um servidor.

#

 &lt;focusout&gt; É um evento em JavaScript que é acionado quando um elemento perde o foco. Ele é comumente usado em campos de formulário (como inputs) para detectar quando o usuário sai do campo (ou quando o foco muda para outro elemento na página).

#
&lt;JSON&gt; (JavaScript Object Notation) é um formato leve de intercâmbio de dados, muito utilizado para transmitir informações entre um servidor e um cliente em aplicações web.
Ele é fácil de ler e escrever para humanos, e simples de interpretar e gerar por máquinas.

#


# Resumo 🚀

Esse código permite que, ao digitar um CEP e sair do campo, uma busca na API ViaCEP seja feita para obter informações do endereço. Ele trata erros de CEP inválido ou não encontrado e atualiza automaticamente o formulário com os dados retornados. Além disso, valida campos obrigatórios e fornece feedback ao usuário em tempo real.


# Autores ✒️
```
https://github.com/MilaKarol
```

## Referências 🖊️

[addEventListener](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)

[addres](https://www.w3schools.com/jsreF/dom_obj_address.asp)

[hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

[await](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/await)

[dados.json()](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)

[const addres](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

[fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)

[focusout](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event)

[JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)




## Link de Navegação
 
 [Site](https://milakarol.github.io/form-CadEndereco/cad.html)
