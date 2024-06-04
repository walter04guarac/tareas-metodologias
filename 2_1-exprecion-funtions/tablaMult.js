/* Mostrar la tabla de multiplicar del numero ingresado
*/
let tabla;
tabla=function(numm){
    let table='';
    for(let i=0;i<=12;i++){
       table+=`${numm}*${i}=${numm*i}\n`;
    }
    return table;
}
let num=+prompt('ingrese un valor');
let result=tabla(num);

alert(result)
