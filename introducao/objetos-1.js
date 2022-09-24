console.log("=== OBJETOS - 1 ===");

/*
        ----------
        | OBJETO |
        ----------
       /          \ 
    PROPS         MÉTODOS


        ---------
        | CARRO |
        ---------
       /         \ 
    CARACT        AÇÕES
    cor           ligar()
    tipo          desligar()
    portas        acelerar()
    roda          freiar()
    acabamento    buzinar()
    modelo        trocarMarcha()
    fabricante
    combustivel
    ano
*/

// Sintaxe Literal (Objeto Dinâmico)

const carro = {}; // objeto vazio

// Dot Notation (Notação de Ponto)

// objeto.propriedade = valor; // definição
carro.cor = "preto";
carro.modelo = "Golf";
carro.fabricante = "VW";
carro.ano = 2020;

// objeto.propriedade; // leitura
console.log(carro.modelo);

// objeto.metodo = function() {}; // definição
carro.ligar = function () {
  return "ON";
};

carro.desligar = function () {
  return "OFF";
};

// objeto.metodo(); // executar
console.log(carro.ligar());

// Bracket Notation (Notação de Colchetes)

// objeto["propriedade"] = valor; // definição
carro["combustivel"] = "G";
carro["rodas"] = 17;

// objeto["propriedade"]; // leitura
console.log(carro["combustivel"]);
console.log(carro["fabricante"]);

// objeto["metodo"] = function() {}; // definição
carro["buzinar"] = function () {
  return "BIBI...";
};

// objeto["metodo"](); // executar
console.log(carro["buzinar"]());

console.log(carro);
