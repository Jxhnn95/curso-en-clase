// Ejemplos de tipos de datos en JavaScript

// Números
let numero = 42;
let decimal = 42.0;
console.log({ numero }, { decimal });

// Cadenas de texto
let cadena = "Hola, mundo!";
const nombre = "Maria";
let cadenaConVariables = `Hola, ${nombre}`;
console.log({ cadena }, { cadenaConVariables });

// Booleanos
let verdadero = true;
let falso = false;
console.log({ verdadero }, { falso });

// Arrays (listas)
let array = [1, 2, 3, 4, 5];
console.log("array", array, array[3]);

// Objetos
let persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  padre: { nombre: "Paco" },
};
console.log(persona, persona.padre.nombre);

// Funciones
function saludar(nombre) {
  console.log("¡Hola, " + nombre + "!");
}
saludar("Ana");
saludar("Jose");

// Undefined
let indefinido;
console.log({ indefinido });

// ya no es indefinido, porque tiene valor
// indefinido = 3;
// console.log({ indefinido });

// Null
let nulo = null;
console.log({ nulo });
// nulo = "algo";
// ya no es null
// console.log(nulo * 2);

// NaN (Not a Number)
let noEsUnNumero = NaN;
console.log({ noEsUnNumero });

// Operador typeof para comprobar el tipo de dato
console.log("TIPOS:");
console.log("numero ->", typeof numero);
console.log("cadena ->", typeof cadena);
console.log("verdadero ->", typeof verdadero);
console.log("array ->", typeof array);
console.log("persona ->", typeof persona);
console.log("saludar ->", typeof saludar);
console.log("indefinido ->", typeof indefinido);
console.log("nulo ->", typeof nulo);
console.log("noEsUnNumero ->", typeof noEsUnNumero);
