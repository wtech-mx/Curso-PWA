fetch('https://reqres.in/api/users/100000')

.then(resp => {

  if (resp.ok) {
      resp.json().then(console.log);
  }else{
      throw new Error('no existe el user')
  }
  
})

.catch (error => {
    console.log('error de peticion')
    console.log(error);
});
