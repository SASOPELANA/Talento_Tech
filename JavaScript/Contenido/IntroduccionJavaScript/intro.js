console.log("Desde el archivo intro.js");

console.log(10 + 20);
console.log(100 - 20);
console.log(10 * 20);
console.log(100 / 20);
console.log(100 % 20);
console.log(100 ** 20);

// Variable y constantes en javascript
const DNI = 346712256;
var nombre = "Sergio";
let edad = 38; // la opcions ma moderna y segura

console.log("Mi DNI es: " + DNI);
console.log("Mi nombre es: " + nombre);
console.log("Mi edad es: " + edad);

console.log(" ");

// Objeto Number
// Para trabajar con numeors de dos maneras.

// literales
let numero = 123;

// usando el constructor
let numero2 = new Number(123);
console.log(numero + " " + numero2);

// COnverison numerica
// Podés convertir strings en números con parseInt() o parseFloat().

let nume1 = parseInt("123"); // 123
let nume2 = parseFloat("123"); // 123

console.log(nume1 + " " + nume2); // imprime 123 123

// También podés convertir usando diferentes bases
let numBinario = parseInt("1010", 2); // base binaria
console.log(numBinario);
