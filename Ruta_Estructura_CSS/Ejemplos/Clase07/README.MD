Clase N° 07: CSS 4 - Grid y Media Queries


CSS Grid Layout: es una técnica poderosa que te permite organizar el contenido de una
página web en una cuadrícula (grid) de filas y columnas. A diferencia de Flexbox, que solo
te permite trabajar con una sola dimensión (filas o columnas), Grid es bidimensional, lo que
significa que podés organizar el contenido en ambas direcciones al mismo tiempo.

Implementación de Grid

Para empezar a usar CSS Grid, todo lo que tenés que hacer es definir un contenedor como
un grid utilizando   display: grid



¿Qué son Media Queries?

Las Media Queries son una funcionalidad de CSS que permite aplicar estilos dependiendo
de las características del dispositivo, como el ancho o la orientación de la pantalla. Son
clave para implementar un diseño responsivo, asegurando que tu sitio web se vea y
funcione bien en todos los dispositivos, desde celulares hasta computadoras de escritorio.


Explicación:
● @media only screen and (max-width: 600px): aplica los estilos a pantallas con un
ancho máximo de 600px (ideal para celulares).
● @media only screen and (min-width: 768px): aplica los estilos a pantallas con un
ancho mínimo de 768px (usualmente tablets y computadoras más pequeñas)


Breakpoints comunes:

● Hasta 600px: dispositivos móviles pequeños (celulares).

● 600px - 768px: tablets en modo vertical.

● 768px - 992px: tablets en modo horizontal y laptops pequeñas.

● 992px - 1200px: laptops y monitores de escritorio estándar.

● Más de 1200px: monitores grandes
