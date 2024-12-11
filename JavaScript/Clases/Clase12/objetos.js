// Objetos
// Los objetos en JavaScript son colecciones de propiedades, definido en pares clave-valor

// definicion de un objeto

const robot = {
  // Clave - valor
  nombre: "Buzz ligth Year",
  peso: 320,
  encendido: true,

  // Funcion dentro de un objeto, es un metodo
  saludar: function () {
    return "Hola, mi nombre es: " + this.nombre;
  },

  // funcion flecha no se puede usar el this para apuntr al objeto Robot
  encender: () => `Robot ${robot.nombre} encendido!!`,
};

console.log(robot.nombre);
console.log(robot.saludar());
console.log(robot.encender());

console.log(" ");
