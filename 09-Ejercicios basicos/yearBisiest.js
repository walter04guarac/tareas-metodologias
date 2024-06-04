'use strict';

let year = parseInt(prompt('Ingrese un año:'));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert(year + ' es un año bisiesto.');
} else {
    alert(year + ' no es un año bisiesto.');
}
