console.log("=== VARIABLES ===");

/*
Javascript - Linguagem de Programação

Armazenar Dados e Executar Tarefas (Instruções)

- Camada de Armazenamento (Memória RAM)

var chave = "valor";
let chave = "valor";
const chave = "valor";
*/

// var nome = "Leonardo";
// console.log("nome", nome);

// let idade = 39;
// console.log("idade", idade);

// const alto = true;
// console.log("alto", alto);

/*
- Camada de Instruções (Funções)

instrucao();
instrucao(param);
instrucao(param1, param2);

contexto.instrucao();
contexto.instrucao(param);
contexto.instrucao(param1, param2);
*/

// prompt();
// prompt("Digite seu nome:");
// prompt("Digite seu nome:", "Seu nome aqui!");
// console.log("Logging");

// ECMAScript
// Versão 5 (ES5)
// Versão 6 (ES6)

let escola = "Lets Code";
// const escola = "Alura"; // tentando redeclarar - não é possível!
escola = "Alura"; // tentando reatribuir - é possível!
console.log(escola);

const fundacao = 2015;
// const fundacao = 2005; // tentando redeclarar - não é possível!
// fundacao = 2005; // tentando reatribuir - não é possível!
console.log(fundacao);

// tipos de variaveis (tipos primitivos)
const nome = "Leonardo"; // string
console.log(nome, typeof nome);

const idade = 39; // number
console.log(idade, typeof idade);

const magro = false; // boolean
console.log(magro, typeof magro);

let nulo = null; // null
console.log(nulo);

let indefinido; // undefined
console.log(indefinido);
