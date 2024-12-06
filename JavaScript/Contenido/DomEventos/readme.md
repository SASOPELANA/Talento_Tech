- Clase 12: DOM y eventos

* 1. Manipulación del DOM

¿Qué es el DOM?

El DOM (Document Object Model) es una representación estructurada de la página web.
Es la manera en la que el navegador convierte el HTML en una estructura de nodos a los
que podemos acceder y modificar mediante JavaScript. Pensá en el DOM como en un árbol
donde cada elemento HTML (etiquetas, atributos, textos) es un nodo del mismo.

En resumen, el DOM es la "puerta de entrada" para que JavaScript interactúe con tu página
web.

1. getElementById()

Este es uno de los métodos más simples y rápidos para acceder a un elemento específico
del DOM. Como su nombre lo indica, selecciona un elemento según su atributo id. Recordá
que el id debe ser único en el documento.

Ejemplo:

<h1 id="titulo">Bienvenido a mi sitio</h1>

<script>

let elemento = document.getElementById("titulo");

console.log(elemento);

// Devuelve el elemento <h1 id="titulo">...</h1>

</script>

2. getElementsByClassName()

Este método devuelve una colección de elementos que comparten la misma clase. A
diferencia de getElementById(), que devuelve un solo elemento, este método devuelve
un HTMLCollection, lo que significa que podés tener varios elementos con la misma clase
y trabajar con todos ellos.

Creación dinámica de elementos HTML con createElement()

Una de las mayores ventajas del DOM es que no solo podés modificar lo que ya está en la
página, sino que también podés agregar nuevos elementos en tiempo real. Esto lo hacemos
con createElement(), que crea un nuevo nodo en memoria, pero que no se añade a la
página hasta que usamos appendChild().

2. Eventos en JavaScript

¿Qué son los eventos en JS?

Los eventos en JavaScript son acciones que ocurren en el navegador y que podemos
"escuchar" o capturar para ejecutar algún código. Estos eventos pueden ser disparados por distintas interacciones como un clic, una tecla presionada, o el envío de un formulario) o bien por el navegador (carga de la página) u otros elementos interactivos.

En otras palabras, un evento es como una señal de que algo ha pasado en el navegador, y
podemos responder a esa señal escribiendo código.

La importancia de los eventos en la interacción usuario-sitio

Sin eventos, una página web sería estática e inerte. Gracias a los eventos, podemos
interactuar con la usuaria, permitiéndole realizar acciones como enviar formularios, hacer clic en botones, o incluso mover el ratón sobre elementos para mostrar información
adicional. Los eventos son esenciales para la interactividad en las aplicaciones web
modernas.

Tipos de eventos comunes: click, keypress, submit, etc.

Algunos de los eventos más comunes en JavaScript incluyen:

- click: Se dispara cuando se hace clic en un elemento.

- keypress: Se activa cuando se presiona una tecla.

- submit: Ocurre cuando un formulario es enviado.

- mouseover: Se dispara cuando el ratón pasa por encima de un elemento.

- load: Ocurre cuando un recurso (como una página o una imagen) se ha cargado
  completamente
