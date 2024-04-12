import { Calculos } from "./Calculos.js";

describe( 'Mi test' ,()=>{
    let calculos;

    beforeEach(() => {
        calculos = new Calculos();
    });

    test('Debe retornar la suma de dos números' , ()=>{
        const resultado = calculos.sumar( 5, 7);
        expect(resultado).toBe(12);
    })
})