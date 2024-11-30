// Programacion Modular y Funciones

/*
function calcularArea(largo, ancho) {
  return largo * ancho;
}

console.log(calcularArea(5, 3)); // 15
*/

// Definicion de parametros

/*
function saludar(nombre) {
  console.log("\nHola " + nombre);
}

saludar("Juan");
*/

// Tipos de funciones segun los paramatros
// Sin paramaetros

/*
function saludar() {
  console.log("\nHola a todos!!!\n");
}

saludar();
*/

// con paramatros
/*
function sumar(a, b) {
  console.log(a + b);
}

sumar(10, 20);
*/

// Argumentos
/*
function multiplicar(a, b) {
  return a * b;
 }

console.log(multiplicar(5, 8));

console.log(" ");
*/

// Ejemplos con multiples Argumentos
/*
function presentar(nombre, edad, ciudad) {
  console.log(nombre + " tiene " + edad + " años y vive en " + ciudad + ".");
}

presentar("Sergio", 30, "Salta");

*/

// Programacion Modular vs Funciones

function calcularAreaRectangulo(base, altura) {
  return base * altura;
}

function imprimirResultado(area) {
  console.log("\nEl área del rectángulo es: " + area);
}

// solo usar variables globales para variables const
// es mala practica esto
let base = 5;
let altura = 10;
let area = calcularAreaRectangulo(base, altura);

imprimirResultado(area);

//  Funciones Nativas de JavaScript

console.log("\nFunciones Nativas");

// funcions random
let numRandom = Math.floor(Math.random() * 10) + 1;
console.log("\nNúmero al azar entre el 1 al 10 --> " + numRandom + "\n");

console.log(Date());

// DADOS
console.log("\nTirar Dado\n");

function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log("Cara del dado: " + lanzarDado());
