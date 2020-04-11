function sumarLento(numero) {
    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            resolve(numero + 1);
        }, 800);

    });
}

let sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
        reject('error al sumar rapido');
    });
}

Promise.race([sumarLento(5), sumarRapido(10)])
            .then(respuestas => {
                console.log(respuestas);
            })
            .catch(console.log);