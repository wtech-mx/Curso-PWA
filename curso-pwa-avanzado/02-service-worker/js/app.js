//if ('serviceWorker' in navigator) {
  //  console.log('podemos usarlo')
//}
//CONFIRMAR SI PODEMOS USAR EL SW
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
}