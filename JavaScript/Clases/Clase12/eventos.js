// Eventos en JavaScript
// permiten intercturar con los elementos de una pagina web

// por id
// const boton = document.getElementById('miBoton')

// por clase
// const boton = document.getElementsByClassName('nombreClase')

// por tag --> por semantica
// const boton = document.getElementsByTagName('p')

// opcion mas practica con css --> sin archivo css
// por CSS --> no es nesesario armar un archivo css
const boton = document.querySelector(".miBoton"); // opcion mas practica con CSS

// capturas todas las etiquetas
const parrafo = document.querySelectorAll("#mensaje"); // todas las etiquetas // css

// Dom --> permite manipular elementos del html
boton.addEventListener("click", () => {
  alert("Hiciste click");
});

/*
parrafo.addEventListener('evento' ()=>{

}) 
*/

// selecionar elementos (capturar)
const entrada = document.querySelector("#entrada");
const botonMostrar = document.querySelector("#mostrar");
const salida = document.querySelector("#salida");

// agregar evento
boton.addEventListener("click", () => {
  const texto = entrada.value;

  // cambiar el contenido del texto
  salida.textContent = `escribiste ${texto}`;
});

// opcion limitada
// botonMostrar.onClick = () => {};

// agregar elemntos al html o etiquetas
const caja = document.querySelector("#caja");

// caja.innerHTML = " <p>Parrafo al div</p>";

const textoParrafo = "agregar texto al div";

// creamos el nodo de texto de texto
const nodoTexto = document.createTextNode(textoParrafo);

// agregar etiquetas
const parrafoDiv = document.createElement("p");

parrafoDiv.appendChild(nodoTexto);

caja.appendChild(nodoTexto);
