/*
    Ejercicio práctico #2:

Iterar sobre una lista de productos con bucles y condicionales

Enunciado: crear un programa que reciba una lista de productos, cada uno
con un precio y un indicador de descuento (true o false). El programa debe
iterar sobre la lista y:

1. Mostrar todos los productos con descuento.
2. Mostrar el total de productos sin descuento.
3. Al final, mostrar cuántos productos tienen descuento y cuántos no.

Tips:
● Uso de bucles: Utilizá un for para recorrer la lista de productos.
● Condicionales: Dentro del bucle, utilizá if para verificar si el producto
tiene descuento (producto.descuento === true).
● Validación: Podés agregar validaciones para asegurarte de que los
datos de los productos sean correctos (nombres no vacíos, precios
válidos).
● Consola del navegador: Mostrá los resultados de los productos con
descuento y el total de productos en la consola usando
console.log()
 */

console.log("\n        ------ Tienda de Productos - LA MEJOR ------\n");

let productos = [
  { nombre: "Celular Samsumg", descuento: true },
  { nombre: "Led 24 ", descuento: true },
  { nombre: "Gabinete Gamers", descuento: false },
  { nombre: "Laptop Office", descuento: false },
  { nombre: "Laptop Gamers", descuento: true },
  { nombre: "PC Gamers", descuento: false },
  { nombre: "PC Office", descuento: true },
];

console.log("Lista de productos.\n");
for (let x = 0; x < productos.length; x++) {
  console.log(x + 1 + ". " + productos[x].nombre);
}

console.log(" ");

let conDes = 0,
  conSin = 0;

for (let x = 0; x < productos.length; x++) {
  if (productos[x].descuento) {
    console.log(productos[x].nombre + " --> este producto tiene descuento.\n");
    conDes++;
  } else {
    console.log(productos[x].nombre + " --> sin descuento.\n");
    conSin++;
  }
}

if (conDes > 0) {
  console.log(`La cantidad de productos con descuentos son: ${conDes}.\n`);
} else {
  console.log("No hay productos con descuentos");
}

if (conSin > 0) {
  console.log(`Los productos sin descuentos son ${conSin}.\n`);
} else {
  console.log("Todos los productos tiene descuentos.");
}
