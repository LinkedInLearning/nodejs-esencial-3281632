var express = require('express');

var app = express();

app.all( '/' , ( peticion, respuesta)=>{
    respuesta.send("Express OK");
})

app.post( '/contacto' , ( peticion, respuesta)=>{
    respuesta.send("LLAMADA POST");
    console.log('POST');
})


const servidor = app.listen( 3000 , ()=>{
})