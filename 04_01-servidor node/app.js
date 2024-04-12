import { createServer } from 'node:http';

const servidor = createServer( (peticion, respuesta)=>{
    console.log('Respuesta');
} )

servidor.listen(3000);

console.log('Ejecutando servidor Node');