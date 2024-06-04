'use strcit'

let brand = "Toyota."; 
let model = "Corolla."; 
let year = 2022;
let isAutomatic = true; 
let colorsAvailable = [" red", " blue", " white."]; // Array 
let features = {
    seats: 5,
    airbags: true,
    fuelType: "Gasoline."
}; // Object 

alert('Marca '+brand+
'\nModelo '+model+
'\nAño '+year+
'\nEl auto es automatico? '+isAutomatic+
'\nColores disponibles: '+colorsAvailable+
'\nCaracteristicas: '+
'\n seats- '+features.seats+
'\n Airbags - ' + features.airbags +
'\n Fuel Type - ' + features.fuelType);

