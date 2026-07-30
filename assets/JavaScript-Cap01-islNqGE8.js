import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`a-sintaxe`,children:`A Sintaxe`}),`
`,(0,n.jsx)(r.p,{children:`O Robô JavaScript é muito exigente!`}),`
`,(0,n.jsxs)(r.p,{children:[`Imagine o JavaScript como um `,(0,n.jsx)(r.strong,{children:`assistente robótico`}),` que irá fazer tudo o que você mandar, mas ele é muito literal. Se você falar uma palavra com uma letra errada ou esquecer um sinal, ele vai cruzar os braços e dizer: `,(0,n.jsx)(r.em,{children:`"Erro de Sintaxe! Não entendi!"`}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Sintaxe`}),` é apenas o nome chique para as `,(0,n.jsx)(r.strong,{children:`regras de escrita`}),` da linguagem. Veja as principais regras:`]}),`
`,(0,n.jsx)(r.h2,{id:`case-sensitive-maiúsculas-de-minúsculas`,children:`Case Sensitive: maiúsculas de minúsculas`}),`
`,(0,n.jsx)(r.p,{children:`Para o robô JS, uma palavra com letra maiúscula é completamente diferente de uma com letra minúscula.`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`let banana = "Amarela";\r
let Banana = "Fruta";
`})}),`
`,(0,n.jsx)(r.h2,{id:`ponto-e-vírgula`,children:`Ponto e Vírgula`}),`
`,(0,n.jsx)(r.p,{children:`Assim com em outras linguagens, o ponto e vírgula serve para dizer: "Terminei esta instrução, pode ir para a próxima!". É como o ponto final de uma frase escrita no caderno.`}),`
`,(0,n.jsxs)(r.p,{children:[`Hoje em dia, o JS consegue entender seu código mesmo sem os `,(0,n.jsx)(r.code,{children:`;`}),`, mas usá-lo é considerado uma boa prática para evitar confusões na interpretação.`]}),`
`,(0,n.jsx)(r.h2,{id:`comentários-e-anotações`,children:`Comentários e Anotações`}),`
`,(0,n.jsx)(r.p,{children:`Muitas vezes é necessário escrever anotações no meio do código, seja para você mesmo no futuro ou para outra pessoa que vá revisar seu código já pronto.`}),`
`,(0,n.jsxs)(r.p,{children:[`Usamos `,(0,n.jsx)(r.code,{children:`//`}),` (barras duplas) para comentar uma linha em específico ou `,(0,n.jsx)(r.code,{children:`/* */`}),` para criar um bloco de comentário para melhor organização e maior detalhamento.`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-JS`,children:`// Se eu colocar duas barras, o JS ignora tudo o que estiver nesta linha! É um comentário de uma linha.\r
\r
/* Se eu usar uma barra e um asterisco, \r
  eu posso escrever um comentário gigante,\r
  com várias linhas!\r
  O robô ignora tudo até encontrar o fechamento.\r
*/
`})}),`
`,(0,n.jsx)(r.h1,{id:`variáveis`,children:`Variáveis`}),`
`,(0,n.jsx)(r.p,{children:`Imagine que você está de mudança e precisa organizar seus pertences. Há uma variedade enorme de coisas (brinquedos, roupas e livros, por exemplo) e para não perder nada você pega caixas vazias. Depois de guardar o que queria, coloca uma etiqueta informando o que há dentro de cada uma.`}),`
`,(0,n.jsx)(r.p,{children:`Trazendo esse exemplo para o mundo da programação, as caixas são as variáveis (guardando informações na memória) e as etiquetas serão os nomes dados às variáveis.`}),`
`,(0,n.jsxs)(r.p,{children:[`Especificamente no JavaScript, existem dois tipos de variáveis: `,(0,n.jsx)(r.code,{children:`let`}),` e `,(0,n.jsx)(r.code,{children:`const`}),`.`]}),`
`,(0,n.jsx)(r.h2,{id:`let----a-caixa-que-aceita-mudanças`,children:`Let -- A caixa que aceita mudanças`}),`
`,(0,n.jsxs)(r.p,{children:[`Variáveis do tipo `,(0,n.jsx)(r.code,{children:`let`}),` guardam informações que podem ser modificadas durante a execução do programa. Voltando para o exemplo da mudança, são caixas que podem ter seu conteúdo mudado antes que a mudança tenha terminado.`]}),`
`,(0,n.jsx)(r.p,{children:`Imagine uma situação onde você precisa guarda a informação de pontos em um jogo. Em todo jogo, os jogadores ou times começam com seus pontos zerados e vão subindo sua pontuação. Observe o exemplo abaixo:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-JS`,children:`// 1. Criamos a caixa e colocamos o valor 0 lá dentro\r
let pontosDoJogo = 0; \r
\r
// 2. O jogador fez um gol! Vamos mudar o que está dentro da caixa:\r
pontosDoJogo = 1;\r
\r
// 3. Agora a nossa caixa "pontosDoJogo" vale 1!
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Note que a palavra `,(0,n.jsx)(r.code,{children:`let`}),` foi usada em somente uma das vezes, `,(0,n.jsx)(r.strong,{children:`na criação da variável`}),`. Para a modificação do valor que está guardado é necessário apenas chamar a variável já criada pelo seu nome.`]}),`
`,(0,n.jsx)(r.h2,{id:`const----a-caixa-que-não-aceita-mudanças`,children:`Const -- A caixa que não aceita mudanças`}),`
`,(0,n.jsxs)(r.p,{children:[`A palavra `,(0,n.jsx)(r.code,{children:`const`}),` vem de `,(0,n.jsx)(r.strong,{children:`constante`}),`, ou seja, algo que não muda e passa exatamente a ideia desse tipo de variável. Indo para o exemplo da mudança, esse é o tipo de caixa que depois de fechada ninguém mais vai mudar ou retirar o que tem dentro.`]}),`
`,(0,n.jsx)(r.p,{children:`Caso você tente mudar o valor da variável depois de sua criação, o JavaScript vai acusar erro e vai pedir para que você arrume isso.`}),`
`,(0,n.jsx)(r.p,{children:`Nesse tipo de variável, você irá guardar coisas que sempre serão as mesmas, como nomes de pessoas, datas de nascimento, etc.`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-JS`,children:`// Criamos a caixa constante com o nome\r
const meuNome = "Mariana";\r
\r
// Se você tentar fazer isso aqui embaixo, o robô vai reclamar:\r
meuNome = "Pedro"; // ❌ ERRO! O JS não deixa você mudar uma constante.
`})}),`
`,(0,n.jsx)(r.h2,{id:`var----outra-variável`,children:`VAR -- Outra variável?`}),`
`,(0,n.jsxs)(r.p,{children:[`Se você for atrás de tutoriais antigos, não será raro encontrar o uso da palavra `,(0,n.jsx)(r.code,{children:`var`}),` na criação de variáveis. Ela é como uma caixa velha, meio quebrada, que às vezes deixava as coisas sumirem ou causava bagunça no código.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Uma dica e boas práticas? Esqueça o `,(0,n.jsx)(r.code,{children:`var`}),`! Use sempre `,(0,n.jsx)(r.code,{children:`let`}),` para coisas que mudam e `,(0,n.jsx)(r.code,{children:`const`}),` para coisas que não mudam.`]}),`
`,(0,n.jsx)(r.h1,{id:`tipos-de-dados`,children:`Tipos de Dados`}),`
`,(0,n.jsx)(r.p,{children:`Vamos conhecer os três tipos de objetos mais comuns que colocamos nas nossas caixas:`}),`
`,(0,n.jsx)(r.h2,{id:`textos-strings`,children:`Textos (Strings)`}),`
`,(0,n.jsx)(r.p,{children:`Tudo o que for texto deve ser colocado entre aspas (podem ser duplas "" ou simples ''). Isso serve para o robô não confundir o texto com um comando do código.`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`const animalFavorito = "Cachorro"; // Isso é um texto!
`})}),`
`,(0,n.jsx)(r.h2,{id:`números`,children:`Números`}),`
`,(0,n.jsxs)(r.p,{children:[`Números não precisam de aspas. Você escreve eles direto! Se usar ponto flutuante (números quebrados), usamos o ponto `,(0,n.jsx)(r.code,{children:`.`}),` e não a vírgula `,(0,n.jsx)(r.code,{children:`,`}),`.`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-JS`,children:`let idade = 9;         // Número inteiro\r
let precoDoDoce = 2.50; // No JS, usamos ponto para centavos!
`})}),`
`,(0,n.jsx)(r.h2,{id:`booleanos`,children:`Booleanos`}),`
`,(0,n.jsxs)(r.p,{children:[`É um tipo especial que só aceita duas opções: ou é verdadeiro (`,(0,n.jsx)(r.code,{children:`true`}),`), ou é falso (`,(0,n.jsx)(r.code,{children:`false`}),`). É como um interruptor de luz (aceso ou apagado).`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-JS`,children:`let estaChovendo = false;  // Não, está um dia ensolarado!\r
let temSobremesa = true;   // Sim, tem bolo de chocolate!
`})}),`
`,(0,n.jsx)(r.h1,{id:`prática`,children:`Prática`}),`
`,(0,n.jsx)(r.p,{children:`Que tal uma pequena prática? Copie o código abaixo, imagine que você está criando um personagem para um jogo de videogame e tente completar os dados nas caixas mágicas:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-JS`,children:`// Desafio: Complete os dados do seu herói ou heroína!\r
\r
const nomeDoHeroi = "Super Dev"; // O nome nunca muda (const)\r
let nivel = 1;                   // O nível vai subir (let)\r
let pontosDeVida = 100;          // A vida pode diminuir ou aumentar (let)\r
const temSuperPoder = true;      // Sim ou Não? (Boolean)\r
\r
// Instruções para o robô mostrar no console o nosso herói:\r
console.log("Herói criado com sucesso!");\r
console.log(nomeDoHeroi);
`})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};