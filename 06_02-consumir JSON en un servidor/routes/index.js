var express = require('express');
var router = express.Router();
var fs = require('fs');



/* GET home page. */
router.get('/', function(req, res, next) {

  fs.readFile('./public/json/libros.json' , (error, datos)=>{ 

    if (error) {
      res.send("error de lectura");
    }else{
      let libros = JSON.parse(datos)
      res.render('index', { datosLibros: libros });
    }
    
  } )

  
});

module.exports = router;
