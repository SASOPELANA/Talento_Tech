1. Introducción a LocalStorage y SessionStorage

¡Les damos la bienvenida a la clase de LocalStorage y SessionStorage! Hoy vamos
a ver cómo podés guardar datos en el navegador de una manera súper simple, y lo
mejor de todo: ¡permanentes o temporales, según lo que necesites!
Breve introducción al tema: ¿Te imaginás que un usuario pueda guardar sus
preferencias en tu aplicación y que, aunque cierre el navegador, esas preferencias
sigan ahí? De eso se trata LocalStorage, y de su primo, el SessionStorage, que
hace lo mismo pero con una duración más corta.

1.1. ¿Qué es LocalStorage?

LocalStorage es una API del navegador que te permite guardar datos en pares
clave-valor de manera persistente. Los datos almacenados permanecen incluso
después de cerrar el navegador. Por ejemplo, podés almacenar configuraciones
como el tema de la aplicación:

localStorage.setItem('tema', 'oscuro');
