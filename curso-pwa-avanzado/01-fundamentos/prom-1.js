function sumarUno(numero, callback) {

    if (numero <= 7) {
        callback('numero muuy alto');
        return;
    }

    setTimeout(function () {

        return (null, numero + 1);

    }, 800);
}

sumarUno(5, function (nuevoValor)){

}