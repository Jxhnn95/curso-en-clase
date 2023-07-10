//
/*let array = [1, 2, 3, 4, 5];

function printArray(arrayToPrint){
    // aquí va el código para imprimir los elementos del array
}

// llamamos a la función pasando el array como argumento
printArray(array) // debería imprimir los elementos del array
console.log(array)*/















// 1.Imprimir los elementos de un array

/*

let array = [1, 2, 3, 4, 5];
let i = 0;

while(i<array.length){
    
 console.log(array[i]);
 i++;
}


//o asi(falta)

let array = [1, 2, 3, 4, 5];
let i = 0;

function printArray(arrayToPrint){

    while (i< arrayToPrint.length);
   
    console.log(printArray[i]);
    i++;

}
printArray(array);


*/









/*   2.  Sumar todos los elementos de un array*//*


//asi (no va ):

let numeros = [1, 2, 3, 4, 5];
function SumaArray (numeros) {
let i = 0 ;
let suma = 0;
while(i< numeros.legth){

console.log(suma[i]);
suma=suma+ numeros[i];
i++;
}
return suma;
}
/*
//o asi:


let numeros= [1, 2, 3, 4, 5],
suma = 0;

numeros.forEach(function(a) {suma += a;});
 
console.log(suma)














/*  3. Encontrar el número mayor en un array*/     /* 
Input:

let array = [5, 2, 9, 1, 7];

console.log(Math.max(...array));

*//*

//o 

let array = [5, 2, 9, 1, 7];
function finMax(array){
    let i = 0;
    let mayor="";
    while(i< array.length){
        if (mayor === underfined|| array[i]>mayor);
            {mayor>array[i]};
            i++;
    }
    return mayor;
    console.log(array)
}

*/

9
/*   4. Contar la cantidad de elementos pares en un array*/


//no vale

let array = [1, 2, 3, 4, 5];

funcion.paresArray(array) {
    let pares = 0;
    let i = 0
    while (i < array.legth) {
        if ((array[i]) % 2 == 0) { pares++; };
        i++;
    }
    return pares

}
//o


let array = [1, 2, 3, 4, 5];
let pares = array.filter(function (numeros) {
    return numeros % 2 == 0
})
document.write(pares)

//A(A<5 & ~mod(A,2))









/*  5. Buscar la posición de un elemento en un array*/   /*
Nota: sin usar la función indexOf() 🙂 //FALTA

Input:

let array = [10, 20, 30, 40, 50];
let target = 30;
Output:
console.log(array);
console.log(target);
let indice = array.findIndex(target);
console.log(indice);

2













/*  6. Comprobar si todos los elementos de un array son positivos*/ /*
//FALTA  
Input:
function adyacent(inputArray) {

    let array = [1, 2, -3, 4, 5];
    resultado = "";
    for (
        i = 0;
        i < inputArray.legth + 1;
        i++) {
        resultado = inputArray[i] * inputArray[i + 1];
        operaciones.push(resultado)

    }
    return Math.mex(...operacion);
}
Output:

false
// o:


let i = o 
let positivos = 
while(i < inputArray.legth) {
        if(array[i]<array.legth){
    resultado = inputArray[i] * inputArray[i + 1];
    operaciones.push(resultado)}















/*  7. Calcular el promedio de un array*//*
Input:

let array = [10, 20, 30, 40, 50];
let numMax = Math.max(array);
let numMin = Math.min(array);
let primedio = (numMin + numMax) / 2;
cosole.log(promedio);
promedio(array = []);




let array = [10, 20, 30, 40, 50] => {
    let numMax = Math.max(array);
    let numMin = Math.min(array);
    let promedio = (numMin + numMax) / 2;
    cosole.log(promedio);
    let i = 0 ;
let suma = 0;
while(i< array.legth){
console.log(array[i]);
suma=suma+ array[i];
i++;
}
return suma;
}

promedio(array = []);


Output:

function ArrayAvg(Array) {
    let i = 0,
        summ = 0,
        ArrayLen = Array.length;
    while (i < ArrayLen) {
        summ = summ + Array[i++];
    }
    return summ / ArrayLen;
}
let a = ArrayAvg(Array);
console.log(a)

30


















/*  8. Invertir el orden de un array*//*
Input:

let numeros = [1, 2, 3, 4, 5];
Output:
console.log (`numeros:`, numeros);

let reversed = numeros.reverse();
console.log(`inversion:`, reversed);

console.log(`numeros:`, numeros);


[5, 4, 3, 2, 1]

//o

function=invertArray(array){
    let i = 0
    let reverseArray={}

while(i >= 0)
arrayParaInvertir =
return reverseArray;

}














/*  9. Eliminar elementos duplicados de un array*//*
Input:

let array = [1, 2, 2, 3, 4, 4, 5];
Output:
const result = array.reduce((acc,item)=>{
    if(!acc.includes(item)){
      acc.push(item);
    }
    return acc;
  },[])

  console.log(result);

[1, 2, 3, 4, 5]


//o


function removerDuplicados(array){
    
    let i= 0
    while(i< array.legth){
        let..
        if(position)
}
}




















/*  10.Ordenar un array de menor a mayor*//*
Input:

let array = [5, 2, 9, 1, 7];
let menor;
for (let
    i = 0;
    i < 10;
    i++); {
    if (array[i] < menor) { menor = array[i] }
    else {
        if (array[i] > menor) {
            menor = menor;
        }
    }
}
Output:
array.sort(array);
FileSystem.out.printIn(Arrays.toString(array));

[1, 2, 5, 7, 9}


    {
        int [] array = { 7, 2, 4, 8, 3, 9, 1, 5, 10, 6};

        for(int item = array) {
            System.out.println(item + "");
        }
    }


    //o


    let arrayDesordenado = [5, 2, 9, 1, 7];

    function sortArray(array) {
        let i = 0;
        let sorted = true;
        while (i < array.legth [i]) {
            let aux = null;
            let isSortedPair = array[i] < array(i + i);

            sorted < sorted && isSortedPair;

            if (isSortedPair){
                aux= array[1] =array[1];
                array[1] =aux;
            }
            i++;
            if(i ++array.legth = i && !sorted){
                i = 0
            }

        }
        return array;

    }

let arrayOrdenado = sortArray (arrayDesordenado);
console.log((arrayOdenad));*/
