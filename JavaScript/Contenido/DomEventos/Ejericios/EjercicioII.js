/* 
Ejercicio práctico #2:

Creación Dinámica de Elementos y Eventos
Enunciado: Desarrollar un programa que permita a la persona agregar
nuevos elementos a una lista mediante un botón. Los pasos son:

1. Al hacer clic en un botón, se debe crear un nuevo elemento <li> en
una lista ya existente.

2. El contenido del nuevo elemento debe ser el texto: "Nuevo Elemento".
3. Usar createElement() para crear el nuevo elemento y
appendChild() para añadirlo a la lista.

4. Cada vez que se agrega un nuevo elemento, se debe mostrar una
alerta indicando: "Se ha añadido un nuevo elemento".

Tips:
● Creación de elementos: Usar createElement() para generar el
nuevo nodo <li>.
● Agregar al DOM: Usar appendChild() para añadir el nuevo
elemento a la lista.
● Eventos: Utilizá addEventListener() para asociar la acción de
agregar el elemento al evento click del botón.
 */

// Agregamos una lista
let addLista = document.getElementById("btnNew");
let newLista = document.getElementById("listNew");
var contadorlista = 0;

addLista.addEventListener("click", function () {
  let newElemeto = document.createElement("li");

  contadorlista++;

  newElemeto.textContent = `${contadorlista}. Nuevo Boton`;

  // agregremos el nuevo elemento a la lista
  newLista.appendChild(newElemeto);

  // mostramos con un alert, que se agrego un nueva lista
  alert("Nuevo elemento agregado!!!");
});
