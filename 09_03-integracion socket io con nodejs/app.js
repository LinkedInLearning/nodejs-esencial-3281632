import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { readFile } from 'node:fs';

const server = createServer((peticion, respuesta) => {
    readFile('./index.html' , (err, data)=>{
        if(err){
            respuesta.writeHead(500);
            return respuesta.end('Error al cargar el archivo HTML');
        }

        respuesta.writeHead(200);
        respuesta.end(data);

    })
});

const io = new Server(server);

io.on('connection' , socket => {
    
    socket.on('mensaje', mensaje =>{
        console.log('Mensaje recibido:', mensaje);

        io.emit('mensaje', mensaje);
    })
});

server.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});