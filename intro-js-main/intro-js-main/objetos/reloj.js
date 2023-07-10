function formatsetHora(numero){
    if(numero<10){
        resturn 01(numero),

    }else(
        return numero;
    )
}



setInterval function(){
    let hora= document.querySelector("#hora");
    let min=document.querySelector("#min");
    let seg=document.querySelector("seg");
    const ahora=new Date();
    contenedorHoras.testContent=ahora.getHours();
    contenedorMin.testContent=ahora.getMinutes();
    contenedorSeg.testContent=ahora.getSeg();
},1000);