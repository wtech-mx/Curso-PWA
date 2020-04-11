function sumarLento(numero){
    var promesa = new Promise (function(resolve,reject){

        setTimeout(function(){
            resolve(numero + 1);
        },800);

    });
}

let sumarRapido = (numero) => {
    return new promise((resolve,reject)=>{
      setTimeout(()=>resolve(numero + 1),300)  
    });
}

Promise.all([sumarRaoido(10),sumarLento(5)]).then(respuestas=> {
    console.log(respuestas);
})
.catch(console.log);

//sumarLento (5).tehb(console.log);
//sumarRapido(10).then(console.log);