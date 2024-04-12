import { copyFile } from 'node:fs';

copyFile( './archivos/archivo_original.txt' , './archivos/archivo_copia.txt' , 
(error)=>{
    if(error){
        console.log("error al copiar");
    }else{
        console.log("copia OK");
    }
} )
