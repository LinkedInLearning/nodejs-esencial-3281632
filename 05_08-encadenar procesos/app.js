import {  copyFile , unlink } from 'node:fs';


const copiarArchivo  = ( ruta, nuevaRuta, nombreDelArchivo, limpiar)=> {

    copyFile( `${ruta}/${nombreDelArchivo}`, `${nuevaRuta}/${nombreDelArchivo}`, 
    (error)=>{

        if (error) {
            console.log(error);
        }else{
            limpiar( ruta, nombreDelArchivo);
        }
    }
)
}


const eliminarArchivo  = (ruta, nombreDelArchivo)=>{

    unlink(ruta + '/' + nombreDelArchivo, (error) => {
        if (error) {
            console.log("error al eliminar ");
        } else {
            console.log("movimiento OK");
        }
    })

} 


const origen = 'carpeta_origen';
const destino = 'carpeta_destino';
const nombreDelArchivo = 'archivo.txt';

copiarArchivo(origen, destino, nombreDelArchivo, eliminarArchivo);