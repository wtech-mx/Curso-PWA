//peticion ge
//https://reqres.in/api/users

let usuario = {
    nombre : 'fernando',
    edad: '33'
};

fetch('https://reqres.in/api/users',{
    method:'POST',
    body: JSON.stringify(usuario),
    headers:{
        'Content-Type':'application/json'
    }
})

.then(resp => resp.json())
.then(console.log)
.catch(error =>{
    console.log('eror en la aplicacion');
    console.log(error);
});