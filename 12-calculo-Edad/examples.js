

const factorial = function fac(n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * fac(n - 1);
    }
  };
  
  // Uso de la función
  console.log(factorial(5)); // Muestra: 120
  

const suma = (a, b) => a + b;

console.log(suma(2, 3)); // Output: 5



const operaciones = (a, b) => {
    const suma = a + b;
    const resta = a - b;
    return { suma, resta };
  };
  
console.log(operaciones(5, 3)); // Output: { suma: 8, resta: 2 }



// Retorno implícito de un valor
const cuadrado = x => x * x;

console.log(cuadrado(4)); // Output: 16

// Retorno implícito de un objeto
const crearPersona = (nombre, edad) => ({ nombre, edad });

console.log(crearPersona("Ana", 25)); // Output: { nombre: 'Ana', edad: 25 }



function askDeleteFile(question, onConfirm, onCancel) {
    if (confirm(question)) onConfirm();
    else onCancel();
  }
  
  function deleteFile() {
    alert("El archivo ha sido eliminado.");
  }
  function cancelDelete() {
    alert("Cancelaste la eliminación del archivo.");
  }

// Uso: las funciones deleteFile y cancelDelete son 
// pasadas como argumentos de askDeleteFile
askDeleteFile("¿Deseas eliminar este archivo?", deleteFile, cancelDelete);
  



