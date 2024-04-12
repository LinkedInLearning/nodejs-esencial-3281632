import { writeFile , appendFile} from 'node:fs';

// writeFile( './archivos/texto-nuevo.txt' , 'datos enviados desde node' , (error)=>{

//     if(error){
//         console.log('error al escribir el archivo');
//     }else{
//         console.log('escritura del archivo OK');
//     }
// } )

appendFile( './archivos/texto-nuevo.txt' , '\nNueva Línea' , (error)=>{

    if(error){
        console.log('error al escribir el archivo');
    }else{
        console.log('escritura del archivo OK');
    }
} )

