'use strict'

let ppk=0.25;
let arrq=0.50;
let distance=prompt('ingrese la distancia rrecorrida',1,0.5);

let total=(distance*ppk)+arrq;
let paradaMn=1.50;

if(total < paradaMn){
    alert('el valor a pagar es de  $'+paradaMn);
}else{
    alert('el valor a pagar es de  $'+total);
}
