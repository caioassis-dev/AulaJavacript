console.log("=== OBJETOS - 2 ===");

/*
        ----------
        | OBJETO |
        ----------
       /          \ 
    PROPS         MÉTODOS

        ----------
        |  MOTO  |
        ----------
       /         \ 
    CARACT        AÇÕES
    cor           ligar()
    tipo          desligar()
    ano           acelerar()
    roda          freiar()
    acabamento    buzinar()
    modelo        trocarMarcha()
    fabricante
    combustivel


        -----------
        | CONSOLE |
        -----------
        /          \ 
    PROPS         MÉTODOS
    memory        log()
                  error()
                  info()
                  clear()
*/

// Sintaxe Literal (Objeto Auto-Definido)

const moto = {
  cor: "vermelho",
  ano: 2010,
  fabricante: {
    nome: "Honda",
    cidade: "São Paulo",
    estado: "SP",
  },
  acessorios: ["rodas liga", "retrovisor monocromático"],
  modelo: "CB 500",
  usada: true,
  ligar: function () {
    return "ON";
  },
  desligar: function () {
    return "OFF";
  },
  buzinar: function () {
    return "BIBI!";
  },
};

console.log(moto); // Objeto Javascript
console.log(
  moto.modelo,
  moto.ano,
  moto.fabricante.nome,
  moto["cor"],
  moto["fabricante"]["cidade"],
  moto.acessorios[0],
  moto["acessorios"][1]
);
console.log(moto.ligar(), moto["desligar"]());

const json = JSON.stringify(moto); // Converte em JSON
console.log(json);

const obj = JSON.parse(json); // Converte Objeto Javascript
console.log(obj);
