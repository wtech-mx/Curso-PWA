
// Ciclo de vida del SW

self.addEventListener('install',event =>{
    console.log('sw:instalando sw');

    //self.skipWaiting();

    const instalacion = new Promise((resolve,reject) =>{

        setTimeout(() => {
            console.log('sw:instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1);

    });

    event.waitUntil(instalacion);

});

//cuadno eñl sw toma el control de la apop

self.addEventListener('activate',event =>{
    //borrar cahce viejo

    console.log('Sw2: Activo para control la app ');
});

//ftech : manejo de peticiones http

self.addEventListener('fetch',event =>{
    //console.log('SW: ',event.request.url);
    
    //if (event.request.url.includes('https://reqres.in/api/')) {
    //    const resp = new Response (`{ok:false,mensaje: ´jajajaj}`);
    //    event.respondWith(resp);
    //}

});

//SYNC RECUPERAMOS LA CONEXIPON A AINTERNET

self.addEventListener('sync',event =>{
    console.log('Tenemos conexion');
    console.log(event);
    console.log(event.tag);
});

//push mandar las push notoficaciones

self.addEventListener('push',event =>{
    console.log('notificacion recicbida');
})