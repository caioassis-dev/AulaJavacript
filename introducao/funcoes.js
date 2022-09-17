console.log("=== FUNCOES ===");

// Declaração de Função Nomeada
function soma(x = 0, y = 0) {
  const result = x + y;
  return result;
}

console.log(soma, soma());
console.log(soma(3, 2));
console.log(soma(8, 3));

// Declaração de Função Anônima

const sum = function (a = 0, b = 0) {
  const result = a + b;
  return result;
};

console.log(sum, sum(4));
console.log(sum(10, 5));
