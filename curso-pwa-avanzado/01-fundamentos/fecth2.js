//peticion ge
//https://reqres.in/api/users

// fetch('https://reqres.in/api/users')
  //  .then(resp => resp.json())
   // .then(respObj => {
   //     console.log(respObj);
    //    console.log(respObj.page);
    //    console.log(respObj.page);
   // });

//no hacer

fetch('https://www.wikipedia.org')
    .then(resp => resp.text())
    .then(html => {
        document.open();
        document.write(html);
        document.close();
    })