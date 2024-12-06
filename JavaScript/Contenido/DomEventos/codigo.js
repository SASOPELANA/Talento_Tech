// Dom y Eventos

// let boton = document.getElementById("miBoton");

// boton.addEventListener("click", function () {
// alert("Hiciste click en el boton!!");
// });

// console.log(this);

let lista = document.getElementById("lista");
lista.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    alert("Hiciste clic en " + event.target.textContent);
  }
});
