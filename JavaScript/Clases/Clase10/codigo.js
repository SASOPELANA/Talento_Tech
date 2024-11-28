// Insteraciones

// prompt

// let nombre = prompt("Ingrese su nombre: ");

// document permite escribir en el navegador. el alerts solo da un mensaje
// document.write(nombre);

// confir me una opcion de aceptar o cancelar un opcion
// let ingreso = confirm(nombre + " desea ingresar? "); // true o false
// console.log(typeof ingreso);

/*
let num2 = prompt("Decime tu edad: ");
let num1 = prompt("Decime tu edad: ");

document.writeln(num1 + num2);
*/

// convertimso lso datos del prompt a numero directamente, usando la funcion Number()
// let num1 = Number(prompt("Ingrese un número: "));
// let num2 = Number(prompt("Ingrese otro número: "));

// document.writeln(num1 + num2);

// let num1 = prompt("Ingrese un número: ");
// let num2 = prompt("Ingrese otro número: ");

/*  "10"   "10" */
// Si la operacion es una suma concatena los datos pedios por prompt, si otra operacion forza la operacion en JS

// document.write(num1 * num2);

console.log("Hola desde la consola. \n");

// if ternario
// condicion ?true : false

let edad = 18;
edad >= 18 ? console.log("Podes pasar.") : console.log("No podes pasar.\n");

// Otro ejemplo de ternario
var nota = 10;
console.log("\nHe realizado el examen.");

// Condicion
/*
if (nota <= 5) {
  calificacion = "Insuficienta";
} else if (nota <= 6) {
  calificacion = "Suficienta.";
} else if (nota < 8) {
  calificacion = "Bien.";
} else {
  calificacion = "Sobresaliente.";
}
*/

// ternario
nota <= 5
  ? (calificacion = "Insuficienta.")
  : nota <= 6
    ? (calificacion = "Suficienta.")
    : nota < 8
      ? (calificacion = "Bien.")
      : (calificacion = "Sobresaliente.");

console.log(`He obtenido un ${calificacion}`);

// TODO: Uso de backtick  -->  ` `
// ${variable}
// en wzterm Alt Gr + }

let edad1 = 18;
let nombre = "Sergio";

console.log(`\n${nombre} tu edad es ${edad1}`);

// Metodo metodo contar caracteres en JS
console.log(`\nMetodo contar caracteres en JS.\n`);
let nombre3 = "Juan";
console.log(nombre3.length);

if (edad >= 18 && nombre3.length >= 8) {
  console.log(
    `${nombre3} tenes ${edad1} años de edad y un regalo.. tu nombre tiene ${nombre3.length} letras.`,
  );
} else {
  console.log("No cumple los requisitos.");
}
