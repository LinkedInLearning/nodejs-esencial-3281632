import {  readFile } from 'node:fs';

 
readFile('archivos/texto.txt' , 'utf-8' , (error, datos)=>{

    if(error){
        console.log('error de lectura');
        throw error;
    }else{
        console.log(datos)
    }
});

