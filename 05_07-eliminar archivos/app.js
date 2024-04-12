import { unlink  } from 'node:fs';

 unlink('./archivos/archivo_borrar.txt' , (error)=>{

        if(error){
            console.log('error');
        }else{
            console.log('eliminado archivo');
        }     
 })