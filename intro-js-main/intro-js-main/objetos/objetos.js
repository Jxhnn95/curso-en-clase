/*

let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    padre: { nombre: "Paco" },
  };
  let valorDeNombre= persona "nombre";
  let valorDeEdad = persona "edad";
  let valorDeCiudad = persona "ciudad";
  let ValorDePadre = persona "padre";

  console.log(valorDeNombre, valorDeEdad, valorDeCiudad, ValorDePadre);
  let otroValorDeNombre = persona.nombre;
  let otroValorDeEdad = persona.edad;
  let otroValorDeCiudad=persona.ciudad;
  let otroValorDePadre=persona.padre;


//Actuslizar valores
persona["nombre"] = "otro nombre";
persona["edad"]= = "otra edad";
persona["ciudad"]= "otra ciudad";
persona["padre"] = "otro padre"

//añadir otro nombre
perosna["nombre"]= "un nombre mas"
*/


//Crear objeto Frutas
let frutas = {
    Manzana: 1,
    Pera: 2,
    Platano: 3,
    Kiwi: 4,
    Piña: 5,
    Mango: 6,
}
console.log(frutas["Manzana"]);
console.log(frutas["Pera"]);
console.log(frutas["Platano"]);
console.log(frutas["Kiwi"]);
console.log(frutas["Piña"]);
console.log(frutas["Mango"]);

frutas = {
    Manzana: {
        cantidad: 11,
        precio: 07,

    },
    Mango: {
        cantidad: 5,
        precio: 08,

    },
}
let cantidadManzana = frutas["Manzana"]["cantidad"];
let Manzana = frutas["Manzana"];
let mismaCantidadManzana = Manzana["cantidad"];
mismaCantidadManzanas = Manzana.cantidad;
console.log({ Manzana }, { cantidadManzana }, { mismaCantidadManzana });


//mostrar el precio manzana 
// como un string incluyendo simbolo de E
//manzana : 0.5$

console.log(`${frutas["Manzana"].nombre}: ${frutas["Manzana"].precio} Eur.`);
console.log(frutas["Manzana"].nombre + ": " + frutas["Manzana"].precio);
console.log(`${frutas["Manzana"].nombre}:${frutas["Manzana"].precio}`);


//ver precio manzana

verPrecio2("Manzana")

function verPrecio2(precioFrutas) {
    let fruta = frutas[precioFrutas];
    if(fruta == undefined){
    console.log(`${fruta[precioFrutas].nombre}: ${fruta["platano"].precio} `);
} else{
    console.log (`${fruta.nombre}: ${fruta.precio}Eu.`);
}
}

let precio = Manzana.precio;
let Moneda = precio
let precioTotal = Manzana.precio * Manzana.cantidad
console.log([precio] + [Moneda],"Eu.en total")

//en funcion

let totalManzana = calcularTotalFruta("Manzana");
console.log({totalManzana})
function calcularTotalFruta(precioFrutas){
    let fruta = frutas[precioFrutas];
    let total = frutas.precio+ frutas.cantidad
    return total;
}

