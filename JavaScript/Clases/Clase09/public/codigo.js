/* document.write("Hola mundo....."); */

/* Variables en JS  */
/* Nombre - tipo de dato - contenido */

/* let - var - conts */

let nombre;

let lenguaje =
  "Javascript"; /* no se puede crear la misma variable de nuevo, para asignar otro tipo dato distinto */
let edad = 38; /* variable numerica, puede se puede asignar otro tipo de dato distinto */
let lenguajE = 45;

lenguaje = 125;

/* este valor se mantiene simpre, no se puede asignar otro valor a esta variable constante */
const DNI = 346712256;

/* tipo de datos */

/* string */
let cadena = "Hola esto es una cadena de texto";

/* numericos o number */
let numerico = 32;
let num = "32"; /* ---> string */

// bool
let bool = true;

// INTERACIONES

// ALERT
alert("Soy un alerta");

// Prompt
let nombre1 = prompt("Decime tu nombre");

alert("hola " + nombre1);

// concatenion
// Los alert solo almacenan string
let num1 = prompt(nombre1 + "Decime un numero para sumar: ");
let num2 = prompt(nombre1 + "Decime un numero para sumar: ");
let resultado = num1 * num2;
alert("El resultado es: " + resultado); // muestra un stribn y concatenacion

// Convertir string en numeros
// parseInt  --> funcion

// mostrar el tipo de deato
console.log(typeof bool);
