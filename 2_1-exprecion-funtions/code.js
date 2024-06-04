'use strict'

//uso comun
function sum(a,b){
    return a + b;
}
//exprecion de funcion
let sumExp =function(a,b){
    return a+b;
}
//funcion flecha
let sumFlecha=(a,b)=>a+b;

let result= sumFlecha(2,3);
alert(result)