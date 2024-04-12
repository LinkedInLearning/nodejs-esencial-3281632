import { readFileSync , readFile } from 'node:fs';

const inicio = performance.now();

// let contenido = readFileSync('archivos/big.data' , 'utf-8');

let contenido = readFile('archivos/big.data' , 'utf-8' , ()=>{
    console.log('Contenido OK')
});

const final = performance.now();
const tiempoTotal = final - inicio;

console.log(tiempoTotal)
