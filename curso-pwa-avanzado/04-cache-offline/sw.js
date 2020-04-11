const CACHE_NAME = 'cache-1';

const CAHE_STATIC = 'static-v2';

const CAHE_DYNAMIC = 'dynamic-v1';

const CAHE_INMUTABLE = 'inmutable-v1';

const CAHE_DYNAMIC_limit = 50;

function limpiarCache(cacheName, numeroItems) {
    caches.open(cacheName)
        .then(cache => {
            return cache.keys()
                .then(keys => {
                    if (keys - length > numeroItems) {
                        cache.delete(keys[0])
                            .then(limpiarCache(cacheName, numeroItems));
                    }
                });
        });
}


self.addEventListener('install', e => {

    const cacheProm = caches.open(CAHE_STATIC)
        .then(cache => {

            return cache.addAll([
                '/',
                '/index.html',
                '/css/style.css',
                '/img/main.jpg',
                '/js/app.js',
            ]);
        });

    const cacheInmutable = caches.open(CAHE_INMUTABLE)
        .then(cache => {
            return cache.add('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css');

        })

    e.waitUntil(Promise.all([cacheProm, cacheInmutable]));


});

self.addEventListener('fetch', e => {

    //1-catch onliy -usada cuando toda la app es servidsaa desde el cache

    //e.respondWith(caches.match(e.request));

    //2-cache with network fallback

    //const respuesta = caches.match(e.request)
    //    .then(res => {
   //         if (res) return res;
            //no existe filke
            //tengpo que ir a la web
     //       console.log('no eiste', e.request.url);

    //        return fetch(e.request).then(newResp => {


    //            caches.open(CAHE_DYNAMIC)
    //                .then(cache => {
    //                    cache.put(e.request, newResp);
    //                    limpiarCache(CAHE_DYNAMIC, 5);
    //                });
    //            return newResp.clone();
   //         });
    //    });

    //e.respondWith(respuesta);

    //3-network with cache fallbak
    //const respuesta = fetch(e.request).then(resp=>{

        //if (!res) return caches.match(e.request);
        
        //caches.open(CAHE_DYNAMIC)
        //.then(cache=>{
        //    cache.put(e.request,res);
        //    limpiarCache(CAHE_DYNAMIC, CAHE_DYNAMIC_limit);
        //});

        //return res.clone();

    //}).catch(err => {
    //    return caches.match(e.request);
    //});

    //e.respondWith(respuesta);

    //4-cache with network update--siempre esatran un v atras
    //if(e.request.url.includes('bootstrap')){
    //    return e.respondWith(caches.match(e.request));
    //}

    //const respuesta =caches.open(CAHE_STATIC).then(cache=>{

    //    fetch(e.request).then(newRes=>{
    //        cache.put(e.request,newRes);
    //    });

    //    return cache.match(e.request);
    //});
    
    //e.respondWith(respuesta);

    //5-cahce y network race

    const respuesta =  new Promise((resolve,reject)=>{
        const rechazada = false;

        const falloUnavez = () =>{
            if(rechazada){

                if(/\.(png|jpg)$/.test(e.request.url)){
                    resolve(caches.match('/img/no-image.jpg'));
                }else{
                    reject('no se encotro respuesta');
                }

            }else{
                rechazada = true;
            }
        }

        fetch(e.request).then(res=>{

            res.ok ? resolve(res) : falloUnavez();

        }).catch(falloUnavez);

        caches.match(e.request).then(res=>{
            res ? resolve(res) : falloUnavez();
        }).catch (falloUnavez);
    })

        e.respondWith(respuesta);


});