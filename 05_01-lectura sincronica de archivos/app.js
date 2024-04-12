import { readFileSync } from 'node:fs';

let contenido = readFileSync('archivos/texto.txt' , 'utf-8');

console.log(contenido)