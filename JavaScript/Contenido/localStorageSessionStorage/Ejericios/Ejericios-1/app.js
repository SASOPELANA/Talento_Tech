// Ejercico 1
/* 
Ejercicios:

Ejercicio 1: Guardar Preferencias de Usuario

Enunciado:
Crear una función que guarde y recupere las preferencias de un usuario, como su
nombre y el color de fondo preferido, utilizando LocalStorage.

1. La función debe permitir al usuario ingresar su nombre y seleccionar su color
de fondo preferido desde una lista de opciones.

2. Los datos ingresados deben almacenarse en LocalStorage.

3. Cada vez que la página se recargue, las preferencias deben recuperarse de
LocalStorage y aplicarse automáticamente (mostrar el nombre del usuario y
cambiar el color de fondo).

Tips:
● Uso de LocalStorage para almacenar el nombre y el color.
● Manipulación del DOM para aplicar los cambios de color de fondo.
● Uso de eventos como submit para guardar las preferencias.
 */

// Selección de elementos del DOM
const form = document.getElementById("preferences-form");
const nameInput = document.getElementById("name");
const bgColorSelect = document.getElementById("bg-color");
const greeting = document.getElementById("greeting");

// Función para cargar preferencias de LocalStorage
function loadPreferences() {
  const savedName = localStorage.getItem("userName");
  const savedColor = localStorage.getItem("bgColor");

  if (savedName) {
    greeting.textContent = `¡Hola, ${savedName}!`;
    nameInput.value = savedName;
  }

  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    bgColorSelect.value = savedColor;
  }
}

// Función para guardar preferencias en LocalStorage
function savePreferences(event) {
  event.preventDefault(); // Evitar que la página se recargue al enviar el formulario

  const userName = nameInput.value;
  const bgColor = bgColorSelect.value;

  if (userName) {
    localStorage.setItem("userName", userName);
    greeting.textContent = `¡Hola, ${userName}!`;
  }

  localStorage.setItem("bgColor", bgColor);
  document.body.style.backgroundColor = bgColor;
}

// Event Listener para guardar las preferencias
form.addEventListener("submit", savePreferences);

// Cargar preferencias al iniciar la página
window.addEventListener("DOMContentLoaded", loadPreferences);
