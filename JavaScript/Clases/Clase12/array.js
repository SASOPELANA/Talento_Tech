// Array --> Es una lista ordenada de elementos que puede ser cualquier tipo de datos

let animales = ["Gato", "Perro", "Tigre"];

// Acceder por indices
for (let index = 0; index < animales.length; index++) {
  console.log(animales[index]);
}

console.log(animales[animales.length - 1] + "\n");

// Metodos de array
// Agregar elemmentos =  .push();
animales.push("Loro", "Conejo");
for (let index = 0; index < animales.length; index++) {
  console.log(animales[index]);
}

console.log(" ");

// Eliminar elementos del final = .pop()
animales.pop();

// recorrer un array
animales.forEach((animal, indice) => {
  console.log(`Animal ${animal}, indice --> ${indice}`);
});

console.log(" ");

// recorrer y buscamos la primer concidencia en el array
let felino = animales.find((animal) => animal == "Gato");
console.log(felino);
