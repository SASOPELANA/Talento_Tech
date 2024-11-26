/* 
Ejercicio práctico #2:

Concatenación y Conversión de Tipos de Datos
Crear un programa que reciba el nombre y la edad de una persona, los concatene en una
frase y luego convierta la edad de string a número para verificar si la persona es mayor de
edad.

Tips:
1. Validación de edad: asegurate de que la edad ingresada sea un número válido
antes de realizar cualquier operación. Usá isNaN() para evitar errores cuando el
usuario ingresa texto o un valor vacío en lugar de un número.

2. Concatenación de cadenas: recordá que podés concatenar textos fácilmente con
el operador +. Experimentá con diferentes formas de concatenar los valores para
personalizar el mensaje de salida.

3. Conversión de tipos: usá parseInt() o Number() para convertir la edad de un string
a un número, lo que es clave para realizar comparaciones o cálculos matemáticos.

4. Mensajes claros: asegurate de mostrar mensajes claros en la consola. Esto ayuda
tanto al usuario como a vos mismo a entender si el programa está funcionando como
esperabas.

5. Pruebas con datos diferentes: probá el programa con diferentes nombres y
edades (incluyendo casos límite como menores de edad o 
*/

console.log("Ejercicio II - Introduccion JavaScript");

document.write("Ejercicio II - Introduccion JavaScript");

let nombre = prompt("Ingrese su Nombre: ");

let edad = prompt("Ingrese su edad: ");

// Validamos los datos
if (isNaN(nombre)) {
  if (!isNaN(edad)) {
    alert(`Tu nombre es ${nombre} y tenes ${edad} años de edad.`);
    console.log(`Tu nombre es ${nombre} y tenes ${edad} años de edad.`);
    console.log(
      "Tu nombre es " + nombre + " y tenes " + edad + " años de edad.",
    );

    console.log(typeof edad);

    let edad1 = parseInt(edad);

    if (edad1 >= 18) {
      console.log("Usted es mayor de edad.");
    } else {
      console.log("Usted es menor de edad.");
    }
  } else {
    console.log("Dato no valido. Ingrese números para verificar la edad.");
  }
} else {
  console.log("Error. Ingrese caracteres alfabeticos para ingresar su nombre.");
}
