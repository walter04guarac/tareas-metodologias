'use strict';

const costoKilometro = 0.29;
const costoArranque = 0.55;
const tarifaMinimaDia = 1.50;
const tarifaMinimaNoche = 1.75;

let distancia = prompt('Ingrese la distancia recorrida en kilómetros:', '1');

let esDeNoche = confirm('¿Es de noche? (Aceptar para sí, Cancelar para no)');

let costoTotalNoche = distancia * tarifaMinimaNoche + costoArranque;
let costoFinalNoche = Math.max(costoTotalNoche, tarifaMinimaNoche); 

let costoTotalDia = distancia * tarifaMinimaDia+ costoArranque; 
let costoFinalDia = Math.max(costoTotalDia, tarifaMinimaDia); 

let costoTotal;
if (esDeNoche) {
    costoTotal = costoFinalNoche; 
} else {
    costoTotal = costoFinalDia;
}

alert('El valor a pagar es de: $' + costoTotal.toFixed(2) + ' dólares');

