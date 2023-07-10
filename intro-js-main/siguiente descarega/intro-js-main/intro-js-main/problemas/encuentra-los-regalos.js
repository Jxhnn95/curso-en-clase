// implementa un juego de búsqueda

// 1️⃣ implementa la lógica básica

// 🟢 Tendrá una lista (array) llamada "tablero"
// let tablero = [];

// 🟢 Tendrá un contador de intentos inicalizado a 0
// let intentos = 0;

// 🟢 Una función crearTablero(numeroRegalos, dificultad)

// que cree una lista de numeroRegalos * dificultad elementos
// Ej. tablero = crearTablero(10, 2) crea un lista de 20 elementos

// debes esconder los regalos lo mejor quep puedas en el array
// de forma que en una posición del array puede haber un regalo ("🎁") o vacío ("⬜")

// en la lista deben estar todos los regalos
// Ej. tablero = crearTablero(10, 2) añadirá 20 elementos, 10 serán regalos "🎁" y 10 estarán vacíos "⬜"
// tablero contendrá algo como [⬜,🎁,⬜,⬜,🎁,⬜,🎁,🎁,⬜,🎁,⬜,🎁,⬜,⬜,🎁,🎁,⬜,🎁,⬜,🎁]

// 🟢 Una función buscarRegalo(tablero, posicion)

// que retorne 1 si hay un regalo (🎁) en la posición del tablero y 0 si no hay nada (⬜)

// 🟢 Una función hacerIntento(tablero, posicion)

// que retorne 1 si hay un regalo (🎁) en la posición del tablero y 0 si no hay nada (⬜)
// y en cualquier caso sume 1 a los intentos

// 2️⃣ crea una interfaz para el juego que utilice la lógica implementada

// 🟢 poder crear un tablero del tamaño deseado
// 🟢 poder buscar los regalos
// 🟢 poder establecer un máximo de intentos
// 🟢 si alcanzas el máximo de intentos antes de encontrar todos los regalos, pierdes
// 🟢 poder reiniciar el juego
// 🟢 tener un marcador de puntuacion con localStorage
// que guarde en una lista el nombre de jugador/a, intentos, tamaño del tablero, dificultad y resultado al finalizar

// 3️⃣ conviértelo en un juego de memoria

// utiliza la función setTimeout()
// para dejar al usuario que vea dónde están los regalos durante unos instantes
// y luego ocultar los regalos