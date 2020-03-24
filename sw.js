const CACHE_NAME = 'v1_cache_josue';


var urlsToCache = [

'/',
'.css/estilos.css',
'./img/1.png',
'./img/2.png',
'./img/3.png',
'./img/4.png',
'./img/5.png',
'./img/facebook.png',
'./img/instragram.png',
'./img/twitter.png',
'./img/icon-128x128.png',
'./img/icon-144x144.png',
'./img/icon-152x152.png',
'./img/icon-192x192.png',
'./img/icon-384x384.png',
'./img/icon-512x512.png',
'./img/icon-72x72.png',
'./img/icon-96x96.png',
'./img/favicon.png'

];

// Evento install
// Instalación del service worker y guardar en cache los recursos estaticos
self.addEventListener('install', e => {
	e.waitUntil(
		caches.open(CACHE_NAME)
			  .then(cache => {
			  	  return cache.addAll(urlsToCache)
			  	  			  .then(() => {
			  	  			  	self.skipWaiting();
			  	  			  });
 
			  })
	  		  .catch(err => console.log('No se ha registrado el cache', err))
	);
});
 
// Evento activate
// Que la app funcione sin conexión
self.addEventListener('activate', e => {
	const cacheWhitelist = [CACHE_NAME];
 
	e.waitUntil(
		caches.keys()
			  .then(cacheNames => {
			  	return Promise.all(
			  		cacheNames.map(cacheName => {
 
			  			if(cacheWhitelist.indexOf(cacheName) === -1){
			  				// Borrar elementos que no se necesitan
			  				return caches.delete(cacheName);
			  			}
 
			  		})
			  	);
			  })
			  .then(() => {
			  	// Activar cache
			  	self.clients.claim();
			  })
 
	);
 
});
 
// Evento fetch
self.addEventListener('fetch', e => {
 
	e.respondWith(
		caches.match(e.request)
			  .then(res => {
			  	 if(res){
			  	 	// devuelvo datos desde cache
			  	 	return res;
			  	 }
 
			  	 return fetch(e.request)
			  })
 
	);
 
});
