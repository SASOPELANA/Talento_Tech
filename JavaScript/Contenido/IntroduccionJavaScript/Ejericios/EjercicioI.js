/*
 Ejercicio práctico #1:

Operaciones con Variables y Tipos de Datos

Crear un programa que reciba dos números como entrada, realice varias operaciones
aritméticas con ellos y muestre los resultados en la consola del navegador. 
Además, se deberá verificar si el resultado de la suma de ambos números es 
mayor o menor que un valor dado.

Tips:
 
1. Validación de entradas: asegurate de que los usuarios ingresen números válidos.
Utilizá isNaN() para verificar que las entradas no sean texto u otros valores no
numéricos. 

2. Uso de parseFloat() y parseInt(); dependiendo del ejercicio, recomenda que 
utilicen parseFloat() si los numeros pueden tener decimales o parseInt() si 
solo aceptan numeros enteros.

3. Descomposición del problema: recordá que podés dividir el problema en partes
más pequeñas. Primero capturá los números, luego realizá las operaciones, y por
último verificá los resultados.

4. Consola del navegador: mostrá los resultados usando console.log() para que los
estudiantes puedan ver los cálculos en la consola del navegador. Es una excelente
herramienta para debuggear.

*/

// Pedir numero por navegador con prompt
let num1 = prompt("Ingrese el primer numero");
num1 = parseInt(num1);

let num2 = prompt("Ingrese el segundo numero");
num2 = parseInt(num2);

// validmos los numeros con isNaN();
if (!isNaN(num1) && !isNaN(num2)) {
  alert("El primer numero es " + num1);
  alert("El segundo numero es " + num2);
  let suma = num1 + num2;
  console.log(suma);
  alert(`La suma de ${num1} y ${num2} es: ${suma}`);
  let resta = num1 - num2;
  alert(`La resta de ${num1} y ${num2} es: ${resta}`);
  console.log(resta);
} else {
  alert("Alguno de los numeros ingresados no es un numero");
}

// Uso de parseFloat() y parseInt()
let num3 = prompt("Ingrese un numero para la division: ");
num3 = parseFloat(num3);

let num4 = prompt("Ingrese el segundo número para la división: ");
num4 = parseFloat(num4);

if (!isNaN(num3) && !isNaN(num4)) {
  if (num4 == 0) {
    alert("No se puede dividir por cero");
  }

  let division = num3 / num4;
  console.log(division);
  alert(`La división de ${num3} por ${num4} es: ${division}`);
} else {
  alert("Alguno de los numeros ingresados no es un numero");
  console.log("Alguns de los numeros ingresados no son numeros");
}
