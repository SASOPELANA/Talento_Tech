// Condiciones

let edad = 15;

/*
if (edad >= 18) {
  console.log("\nSos mayor de edad.");
} else if (edad >= 13) {
  console.log("\nSos un adolecente.");
} else {
  console.log("\nSos un niño/a.");
}
*/

// Ternario
// condicion ? true : false
edad >= 20
  ? console.log("\nSos mayor de edad.")
  : edad >= 13
    ? console.log("\nSos un adolecente.")
    : console.log("\nSos un niño/a.");

// ciclos
console.log(
  "\n--------------------- Bucles en JavaScript --------------------------\n",
);

// sintaxis
// while
let i = 0;

while (i < 5) {
  console.log(i + 1);
  i++;
}

console.log(" ");

// do while
let x = 0;
do {
  console.log(x);
  x++;
} while (x < 5);

console.log("\n");
// for
for (let x = 0; x < 5; x++) {
  console.log(x + 1);
}

// iterar productos
console.log("\nEjemplo práctico: iterar productos\n");

let productos = ["Laptop", "Celular", "Tablet"];

for (let i = 0; i < productos.length; i++) {
  console.log(productos[i]);
}

// Cómo combinar operadores lógicos y bucles
console.log("\nCómo combinar operadores lógicos y bucles\n");

/*
 En muchos casos, vas a necesitar usar operadores lógicos dentro de bucles.
Por ejemplo, podés querer filtrar una lista de productos para mostrar solo los
que están en descuento.
Ejemplo práctico: filtrar productos en descuento
 */

let productos1 = [
  { nombre: "Laptop", descuento: true },
  { nombre: "Celular", descuento: false },
  { nombre: "Tablet", descuento: true },
];

for (let i = 0; i < productos1.length; i++) {
  if (productos1[i].descuento) {
    console.log(productos1[i].nombre + " - Si tiene descuento.\n");
  } else {
    console.log(productos1[i].nombre + " - No tiene descuento.\n");
  }
}

let array = [1, 2, 3];
console.log(typeof array);
