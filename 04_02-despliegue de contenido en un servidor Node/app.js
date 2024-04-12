import { createServer } from 'node:http';

const servidor = createServer( (peticion, respuesta)=>{
    console.log('Respuesta');


    respuesta.writeHead( 200 , {'Content-type': 'text/html' } );
    respuesta.write('Respuesta para el url' + peticion.url );
} )

servidor.listen(3000);

console.log('Ejecutando servidor Node');