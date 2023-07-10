

let libro = {
    titulo: "titulo",
    autor: "autor",
    editor: "editor",
    publicacion: "publicacion",
    paginas: "numeor de paginas",
};

console.log(libro);

let biblioteca = [
    {
        titulo: "El señor de los anillos",
        autor: "Tolkien",
        publicacion: 1954,
        paginas: 320,
    },
    {
        titulo: "Harry Potter",
        autor: "JK",
        publicacion: 1964,
        paginas: 400,
    },
    {
        titulo: "La crónicas de Narnia",
        autor: "CS Lewis",
        publicacion: 1944,
        paginas: 400,
    },
];

console.log(biblioteca);

function buscarPorAutor(autor) {
    let noHayLbro = null;
    let libroEncontrado = [];
    for (let i = 0; i < biblioteca.legth; i++) {
        let libro = biblioteca[i];

        if (libro.autor === autor) {
            libroEncontrado.push(libro)
        }
    }
    return libroEncontrado;
}
let libroTolkien = buscarPorAutor("Tolkien");
let libroQuevedo = buscarPorAutor("Quevedo");

console.log({ libroTolkien });
console.log({ libroQuevedo });





function crearLibro(titulo, autor, publicacion, paginas) {
    let libro = {
        titulo=titulo,
        autor=autor,
        publicacion=publicacion,
        paginas=paginas,
    },
    return libro;
}
let nuevoLibro = crearLibro(
    "Los tres mosqueteros",
    "Alejandro Dumas",
    1800,
    250,
);
console.log({ nuevoLibro });

biblioteca.push(nuevoLibro);
console.log({ biblioteca });



function buscarMasLargo() {
    let buscarMasLargo = biblioteca[0];
    for (let i = 0; i < biblioteca.length; i++) {
        let libro = biblioteca[i];
        if (libro.paginas > buscarMasLargo.paginas) {
            buscarMasLargo = libro;
        }
    }

    return buscarMasLargo;

    

    //

  
    }
    return masPaginas;




    //
    function buscarPorTitulo(titulo) {
        for (let i = 0; i < libro.legth; i++);
        let libro = libro[1];
        if (libro.titulo == titulo) {
            return libro;
        }
    }
    return null;
}





//


let tituloInput = document.querySelector("#titulo");
console.log({ tituloInput });

let nuevaPelicua = tituloInput.value;
console.log({ nuevaPelicua });

let contenedorPelis = document.querySelector("#contenedorPelis");
console.log({ contenedorPelis });

contenedorPelis.innerHTML += `<li>${nuevaPelicua} </li>`;
});




/*

//mas antiguo

*/
//comparacion

function (libro.publicacion<libroMasantiguo.publicacion)
let libroMasantiguo = libro





function vacciarPeliculas() {
    localStorage.clear{ };


    let contenedorPelis = document.querySelector("#contenedorPelis");
    contenedorPelis.innerHTML = "";

}
let btnVaciar = document.getElementById("btn Vaciar");
console.log({
    btnVaciar
})


btnVaciar.addEventListener("click", function (_event));





function vacciarPeliculas() {
    localStorage.removeItem{ "Peliculas" };


    let contenedorPelis = document.querySelector("#contenedorPelis");
    contenedorPelis.innerHTML = "";

}
let btnVaciar = document.getElementById("btn Vaciar");
console.log({
    btnVaciar
})


btnVaciar.addEventListener("click", function (_event));