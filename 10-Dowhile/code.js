'use strict';

let num=5;
let n;
let cont=0;

do{
 n=+prompt('Ingrese un numero del 0 al 10',0);
 cont++;
 if(cont==3){
    break;
 }
}
while(n!=num );

if(n==num){
alert('ganaste al '+cont+' intento');
}else{
    alert('perdiste')
}