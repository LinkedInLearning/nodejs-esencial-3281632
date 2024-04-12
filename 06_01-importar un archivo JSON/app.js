import { readFile } from 'node:fs';

readFile('./archivos/libros.json' , (error, datos)=>{

    let libro = JSON.parse(datos)
    console.log(libro.autor)

} )