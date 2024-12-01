/*
    Ejercicio práctico #1:

Función para Validar la Edad de una persona

Enunciado: Crear una función que reciba como parámetros el nombre y la edad de
una persona. La función debe realizar lo siguiente:

1. Verificar si la persona es mayor de edad (18 años o más).
2. Mostrar un mensaje en la consola que diga si la persona es mayor o menor
de edad.
3. Si es menor de edad, mostrar también cuántos años le faltan para cumplir 18.

Tips:
● Uso de parámetros: Pasar el nombre y la edad como argumentos a la
función.
● Condicionales: Usar un if...else para determinar si es mayor o menor
de edad.
● Consola del navegador: Utilizá console.log() para mostrar los
resultados en la consola.
 */

function holaMundo() {
  return "\nHola mundo!!\n";
}

console.log(holaMundo());

function Datos(edad, nombre) {
  if (edad >= 18) {
    console.log(`${nombre} es mayor de edad, tiene ${edad} años.`);
  } else {
    edad = 18 - edad;
    console.log(
      `${nombre} es menor de edad, y le falta ${edad} años, para ser mayor de 18.`,
    );
  }
}

Datos(20, "Sergio");
