let array = [1, 2, 3, 4, 5];
let pares = array.filter(function(numeros){
    return numeros %2 ==0
})
document.write(pares)

//A(A<5 & ~mod(A,2))