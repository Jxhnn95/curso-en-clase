// función printCuadrado(lado){...}

// que recibe un número entero positivo
// y dibuja con un emoji (Ej. 🟥) un cuadrado del tamaño de lado

// ejemplo para "lado = 1"

// 🟥

// ejemplo para "lado = 10"

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥

function printCuadrado(lado){
    let lado="";
    for(let i = 0; i<lado;i++){
        for(let j=0;j<lado;i++){
            cuadrado+= "🟥"
        }
        cuadrado+= "/n"
    }
    console.log(cuadrado);
}
let cuadrado3 = printCuadrado(3);
let cuadrado4 = printCuadrado(4);
printCuadrado(5);
