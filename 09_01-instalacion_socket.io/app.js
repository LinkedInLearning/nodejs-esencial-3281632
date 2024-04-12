import { createServer } from 'node:http';
import { Server } from 'socket.io';


const server = createServer((peticion, respuesta) => {
    respuesta.writeHead(200, {'Content-Type': 'text/plain'});
    respuesta.end('SocketIO');
});

const io = new Server(server);

io.on('connection' , socket => {
    console.log('Nuevo usuario conectado');
    socket.emit('mensaje', 'Servidor OK');
});

server.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});