console.log("=== PARADIGMAS ===");

// Sintaxe Literal (Comum)
const empresa = "Magazine Luiza";
const desde = 1950;

console.log(empresa, typeof empresa, empresa.constructor);
console.log(desde, typeof desde, desde.constructor);

// Sintaxe Alternativa (OOP)
const company = new String("Magazine Luiza");
const since = new Number(1950);

console.log(company, typeof company, company.constructor);
console.log(since, typeof since, since.constructor);

console.log(empresa.toUpperCase());
console.log(company.toUpperCase());

// API
console.dir(String.prototype);
console.dir(Number.prototype);
console.dir(Boolean.prototype);
console.dir(Object.prototype);
console.dir(Array.prototype);
console.dir(RegExp.prototype);
console.dir(Date.prototype);
console.dir(Math);
