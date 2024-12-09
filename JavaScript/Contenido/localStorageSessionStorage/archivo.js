// localStorage.setItem("tema", "oscuro");

// localStorage.setItem("usuario", "Pedro");

// let usuario = localStorage.getItem("usuario");

// console.log(usuario);

// localStorage.clear();

// sessionStorage.setItem("usuario", "Ana");

// Obtener datos de session storeage   --> getItem()
// let usuario = sessionStorage.getItem("usuario");
// console.log(usuario);

// eliminar datos de sessionStorage --> removeItem()
// sessionStorage.removeItem("usuario");

// Para borrar todos los datos de SessionStorage:
// sessionStorage.clear();

/* -------- carrito de compras -------- */
// 3.2. Funcionalidades del Carrito de Compras con JavaScript

/* 
  El carrito debe permitir agregar, eliminar productos y vaciar el carrito. Usaremos
  eventos y manipulación del DOM.
 */

document.getElementById("boton-agregar").addEventListener("click", function () {
  let producto = { id: 1, nombre: "Producto 1", precio: 10 };
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
});

// Uso de LocalStorage para guardar el estado del carrito
localStorage.setItem("carrito", JSON.stringify(carrito));

// Actualización del Carrito en tiempo real

function actualizarCarrito() {
  var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  var listaCarrito = document.getElementById("lista-carrito");
  listaCarrito.innerHTML = "";
  for (var i = 0; i < carrito.length; i++) {
    var producto = carrito[i];
    var li = document.createElement("li");
    li.textContent = producto.nombre + " - $" + producto.precio;
  }
}
listaCarrito.appendChild(li);
