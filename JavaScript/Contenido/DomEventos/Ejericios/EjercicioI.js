/*
Ejercicio práctico #1:

Modificación del DOM con Métodos de Selecciónormalize();

Enunciado: Crear un programa que, al hacer clic en un botón, cambie el contenido de un
párrafo en la página utilizando los métodos para acceder al DOM. Los pasos específicos
son:

1. Al cargar la página, se debe mostrar un párrafo con el texto: "Texto inicial".
2. Al hacer clic en un botón, se debe cambiar ese texto por: "El texto ha sido
modificado con JavaScript".
3. Usar getElementById() para seleccionar el párrafo y modificar su contenido con
textContent.

Tips:
* Selección por id: Utilizar getElementById() para acceder al elemento del DOM
que queremos modificar.
* Modificación de contenido: Utilizá textContent para cambiar el texto del párrafo.
* Eventos: Usar addEventListener para ejecutar la modificación cuando se hace
clic en el botón.
 */

let nuevoBoton = document.getElementById("btn");

// se modifica el texto del boton

nuevoBoton.addEventListener("click", function () {
  nuevoBoton.textContent = "El texto ha sido modificado con JavaScript";
});
