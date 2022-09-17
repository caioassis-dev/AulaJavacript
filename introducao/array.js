console.log("=== ARRAY ===");

console.dir(Array.prototype);

// Sintaxe OOP
const carros = new Array("Fox", "Uno", "Palio");
console.log(carros);
console.log(carros[2]);
console.log(carros.constructor);
console.log(carros.length);

// Sintaxe Literal
let cars = ["Fox", "Uno", "Palio", "Celta"];
console.log(cars);
console.log(cars[1]);
console.log(cars.constructor);
console.log(cars.length);

// Explorando a API
cars.push("Toro"); // add item no final do array
cars.unshift("Up"); // add item no inicio do array

cars.splice(3, 1, "Ecosport"); // substitui item na posicao X
cars.splice(1, 1); // remover item na posicao X
cars.splice(4, 0, "Clio"); // add item na posicao X

cars.sort(); // ordenar os valores do array
cars.reverse(); // inverte a ordem do array

cars.pop(); // remove ultimo item do array
cars.shift(); // remove primeiro item do array

cars = cars.concat(carros); // unifica dois ou mais arrays

for (let index = 0; index < cars.length; index++) {
  const element = cars[index];
  console.log(element);
}

console.log("===");

// callback
function pegaCarro(nomeDoCarro, index) {
  console.log(nomeDoCarro, index);
  // console.log(arguments[0], arguments[1]);
}

cars.forEach(pegaCarro);

console.log("===");

cars.forEach(function (car, index) {
  console.log(car, index);
});

console.log("===");

let numbers = [1, 2, 3, 4, 5];

console.log(
  numbers.forEach(function (number, index) {
    // console.log(number);
    return number;
  })
);

console.log("---");

numbers = numbers.map(function (number, index) {
  return number * 5;
});

console.log("---", numbers);

numbers = numbers.filter(function (number, index) {
  return number <= 15;
});

console.log("---", numbers);
