// Crear una función llamada saludar que tome un parámetro nombre y devuelva un mensaje de saludo. 
const saludar = (nombre) => { 

    const saludo = `Hola ${nombre}, saludos!`; 
    console.log(saludo);
   
};

saludar('Juan Carlos'); 

//Crear una función llamada sumar que tome dos parámetros a y b, y devuelva su suma. 
const sumar = function(a, b) { 

    const suma = a + b; 
    return suma;
}; 

console.log(sumar(4,4)); 

// Llamar la función saludar con su nombre y mostrar el resultado en consola. 
saludar('Christian'); 

//Llamar la función sumar con los números 5 y 7, y mostrar el resultado en la consola. 
console.log(sumar(5,7));