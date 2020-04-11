

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}


//if(window.caches){
//    caches.open('prueba1')
//    caches.open('prueba2');

    //caches.has('prueba2').then(console.log);

   // caches.delete('prueba1').then(console.log);
 //  caches.open('cachesv1').then(cache=>{
 //      cache.add('/index.html');
 //      cache.addAll([
 //          '/index.html',
 //          '/css/style.css',
 //          '/img/main.jpg',
 //      ]).then(() => {
 //          //cache.delete('/css/style.css');
 //          cache.put('index.html',new Response ('HOLA MUNDO'));
 //      });

       //cache.match('/index.html')
       // .then(res =>{
       //     res.text().then(console.log);
       // });

//   });
//   caches.keys().then(keys =>{
//       console.log(keys);
//   })
//};