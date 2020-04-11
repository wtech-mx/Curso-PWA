//self.addEventListener('fetch', event => {
    //if(event.request.url.includes('.jpg')){
        //console.log(event.request.url);

        
        //let fotoReq = fetch('img/main.jpg')
        //let fotoReq = fetch(event.request.url)
        //let fotoReq = fetch(event.request)

        //event.respondWith(fotoReq);
    //}
//});

//self.addEventListener('fetch',event =>{
   // if(event.request.url.includes('style.css')){
        //let respuesta = new Response(`
        
        //body{
        //    background:yellow !important;
        //    color:black;
        //}
        
        //`,{
        //    headers:{
        //        'Content-Type': 'text/css'
        //    }
        //});
        //event.respondWith(respuesta);
    //}
//});

//self.addEventListener('fetch', event => {
    //if (event.request.url.includes('main.jpg')) {

        //let resp = fetch('img/main-patas-arriba.jpg');
        //event.respondWith(resp);
    //}
//});

self.addEventListener('fetch',event =>{

    const resp = fetch(event.request)
                .then(resp => {

                    //if (resp.ok) return resp;
                    //else return fetch('img/main.jpg');

                    return resp.ok ? resp : fetch('img/main.jpg');
                });

    event.respondWith(resp);
    });
    