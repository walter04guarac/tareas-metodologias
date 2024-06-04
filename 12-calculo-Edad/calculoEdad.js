/*
escribir uns funcion que reciva como argumento la edad
de una persona y devuelva true si es mayor de edad y
false si es menor.
*/


function calcularEdad(age){
    /*if(age>=18){
        return true;
    }else{
        return false;
    }*/
    return (age>=18);

}
let Age=+prompt('Ingrese su edad');
let edad=calcularEdad(Age);

alert('tu resultado es: '+edad);

////////
function mult(x, y) {
    let sum = 0;
    for (let i = 0; i < y; i++) {
        sum += x;
    }
    return sum;
}

let a = +prompt('First number');
let b = +prompt('Second number');
let result = mult(a, b);
alert('El resultado es: ' + result);
