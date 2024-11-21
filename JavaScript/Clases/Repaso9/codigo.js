// Opreradores de comparacion

let num1 = 32;
let num2 = 40;
let num3 = "32";
let num4 = 32;

// Boleanos

console.log(num1 == num3); // es igual -> true
console.log(num1 === num3); // es estrictamente igual -> false
console.log(num1 != num3); // es distinto o igual  --> false
console.log(num1 !== num3); // es estrictamente distinto o igal --> true
console.log(num1 > num2); // false
console.log(num2 < num3);
console.log(num1 >= num2);
console.log(num1 <= num2);

// Opredores logicos
console.log();

// OR ||
console.log(num1 == num3 || num1 > num2); // true

// AND &&
console.log(num1 == num3 && num1 > num2); // false

// Condicionales
let nombre = "Juan";
let edad = 36;

if (edad >= 18) {
  console.log("Podes pasar al boliche...");
} else {
  console.log("No popdes pasar!");
}

// if ternario
// condicion ? true : false

edad >= 18
  ? alert(`tenes ${edad} años y podes pasar`)
  : alert(`tenes ${edad} no podes pasar`);
