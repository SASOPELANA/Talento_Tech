/* 
Ejercicio practico #2

Funcion para calcular el precio total de un producto con IVA

Enunciado: Crear una función que reciba el precio de un producto y el porcentaje
de IVA (Impuesto al Valor Agregado). La función debe:

1. Calcular el precio total del producto, sumando el IVA.
2. Mostrar el precio total en la consola.
3. Hacer que el IVA sea un parámetro opcional, con un valor predeterminado del
   21% (típico en Argentina).

Tips:
● Parámetros opcionales: Definir un valor por defecto para el IVA si no se
  proporciona uno.
● Operaciones matemáticas: Calcular el IVA y sumarlo al precio del producto.
● Consola del navegador: Mostrar el precio final con consola.log()
*/

// variable contante global pra el iva 21%
const iva = 21;

// Funcion para calcular el precio final y retorna el valor final
function calcularPrecio(precio, iva) {
  return precio + (precio * iva) / 100; // regla de tres simple para calcular el precio final
}

let precio = Number(prompt("Ingrese el precio del producto: "));

if (!isNaN(precio) && precio > 0) {
  console.log("El precio del producto es: " + calcularPrecio(precio, iva));
} else {
  console.error("Error: Ingrese un precio valido.");
}
