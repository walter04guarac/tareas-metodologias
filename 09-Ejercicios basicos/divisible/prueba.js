'use strict';

let priceProduct=+prompt('Ingrese el costo del producto $',0.00);
let cant=+prompt('Ingrese cuntas unidades desea llevar??',1);
let priceParck=2.00;

let priceTotal=(priceProduct*cant)+priceParck;
let priceDiscount=priceProduct*cant;

if(priceProduct>=20.00){
    alert('Su valor a pagar es $'+priceDiscount+'\nParqueadero gratis');
}else{
    alert('Su valor a pagar es de $'+priceTotal+'\nincluye valor de parqueadero')
}

