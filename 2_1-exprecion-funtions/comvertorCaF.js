// algoritmo para convertir de grados celsius a farengei con funcion flecha
// Definimos la función flecha para la conversión
let celsiusToFahrenheit = celsius => (celsius * 9 / 5) + 32;

// Ejemplo de uso:
let gradosCelsius =+ prompt('ingrese los grados a comvertir °C a F ');
let gradosFahrenheit = celsiusToFahrenheit(gradosCelsius);

alert(`${gradosCelsius} °C es igual a ${gradosFahrenheit} °F`);
