function sumarUno (numero){

    var promesa = new Promise (function (resolve,reject){
        console.log(numero);

    if (numero >=7) {
        reject('el numero es muy alto');
    }

    setTimeout(function(){

    resolve ( numero + 1);

},800);

});

return promesa;

}

sumarUno (5)
    .then(sumarUno)
    .then(sumarUno)
    .then(nuvoNumero => {
        console.log(nuevoNumero);
    })
    .catch(error => {
        console.log("error en la promesa");
        console.log(error);
    });

