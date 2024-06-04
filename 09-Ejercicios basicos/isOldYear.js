'use strict';

let age =+prompt('Cuantos años tienes? ',); 
const Default= 18;  
if(age >= Default){
    console.log(age);
    alert("Eres mayor de edad");
}
else{
   alert('Eres menor de edad ')
}