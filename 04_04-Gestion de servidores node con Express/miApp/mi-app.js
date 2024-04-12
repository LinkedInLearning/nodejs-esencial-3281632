var express = require('express');

var app = express();

app.all( '/' , ( peticion, respuesta)=>{
    respuesta.send("Express OK");
})

const servidor = app.listen( 3000 , ()=>{
})