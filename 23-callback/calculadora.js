'use strict';

function calc(op,fnSum,fnRest){
    if(op){
       fnSum();
    }else{
        fnRest();
    }
}
let a=Number(prompt('ingrese el primer numero...'));
let b=Number(prompt('ingrese el segundo numero...'));

let sum=()=>alert('"esta es una suma de: "\n '+ (a+b))

let rest=()=>alert('"esta es una resta de: " \n'+ (a-b))

calc(true,sum,rest);


/*
if(op==="suma"){
 
}else{

}
*/