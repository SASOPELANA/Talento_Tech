Introduccion a JavaScript

Que es JavaScript? 

JavaScript, o, para los amigos, JS, es lo que le da vida a una
página web.

Si HTML es el esqueleto y CSS la apariencia, JavaScript es el
alma que permite que las cosas interactúen. Gracias a este
lenguaje podés hacer que un botón muestre una alerta, que un
formulario envíe datos sin recargar la página, o que cambie el
contenido cuando movés el mouse.

Principales Características de JavaScript

* Lenguaje del lado del cliente: se ejecuta directamente en el navegador del usuario.

* Orientado a objetos: aunque no sea 100% orientado a objetos como otros
lenguajes, JS te permite trabajar con objetos.

* Tipado débil: no tenés que especificar el tipo de dato (número, string, etc.) al
declarar variables.

* Interpretado: no necesita compilación; el navegador se encarga de ejecutarlo al
vuelo.


* Usando un archivo externo, la mejor práctica:

<script src="mi-script.js"></script>

Este último método es el más usado porque separa el código JS del HTML, manteniendo
todo más organizado.


3. Variables y Constantes en JavaScript

Declaración de Variables

En JS tenés tres maneras de declarar variables: var, let y const.

* var: la vieja confiable, pero con algunos problemas de alcance (scope). No la uses
mucho si no es necesario.

* let: la opción moderna y segura.

* const: como su nombre indica, es para valores que no van a cambiar.

Ejemplos:

var nombre = "Juan";

let edad = 30;

const PI = 3.1416;


* 4. Tipos de Datos en JavaScript

En JS, tenés varios tipos de datos:

_ Undefined: cuando una variable no tiene valor.

_ Boolean: verdadero (true) o falso (false).

_ Number: números, tanto enteros como decimales.

_ String: cadenas de texto.

_ Null: ausencia intencionada de un valor.

_ BigInt: para trabajar con números grandes.

_ Symbol: para crear valores únicos.


* Conversión Numérica

Podés convertir strings en números con parseInt() o parseFloat().

let numero = parseInt("42");

console.log(numero); // Imprime 42

También podés convertir usando diferentes bases:

let numBinario = parseInt("11101", 2); // Base binaria

console.log(numBinario); // Imprime 29
