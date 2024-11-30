/*
 Ejercicio práctico #1:

Evaluación de condicionales y operadores lógicos

Enunciado: Crear un programa que reciba la edad de una persona y si está
en la lista VIP. El programa deberá verificar lo siguiente:

1. Si la persona tiene 18 años o más, permitirle el acceso al evento.

2. Si además de tener 18 años o más, es miembro VIP, darle acceso al
área exclusiva.

3. Si la persona tiene menos de 18 años, denegar el acceso.

Tips:

● Validación de entradas: Asegurate de que se ingrese una edad válida.
Podés usar isNaN() para verificar que el valor ingresado sea un
número.

● Uso de operadores lógicos: Combiná el operador && para verificar
que se cumplan ambas condiciones (edad >= 18 y ser miembro VIP).
● Operador ternario: Considerá usar un operador ternario si la lógica es
sencilla.

● Consola del navegador: Mostrá los resultados usando
console.log() para verificar si se cumplen las condiciones
correctamente

 */

let edad = Number(prompt("Ingrese su edad para ingresar al evento!"));
let vip = prompt("Ustedes es miembro Vip? (1/SI - 0/NO)");

isNaN(edad)
  ? console.log(
      "\nEl dato ingresado no es un número. Ingrese un dato valido para la edad.",
    )
  : console.log(" ");

if (vip === "1") {
  vip = true;
} else if (vip === "0") {
  vip = false;
} else if (edad >= 18 && vip != false && vip != true) {
  console.log("\nDato invalido, para miembro Vip. ");
  vip = null;
}

if (edad >= 18 && vip) {
  console.log(
    "\nUsted tiene acceso al evento y es miembro Vip, ingrese al área exclusiva.",
  );
} else if (edad >= 18) {
  console.log("\nUsted tiene acceso al evento.");
} else {
  console.log("\nAcceso denegado al evento.");
}

console.log("\n" + typeof vip);
