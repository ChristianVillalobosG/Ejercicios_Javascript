// Crear un objeto Date con la fecha actual. 
const fechaActual = new Date(); 
console.log(fechaActual); 

//Imprimir en la consola el año actual. 
const anioActual = fechaActual.getFullYear(); 
console.log(anioActual);

//Imprimir en la consola el mes actual (recordar que los meses empiezan en 0). 
const obtenerMes = fechaActual.getMonth(); 
const mesActual = obtenerMes + 1; 
console.log(mesActual); 

//Crear una nueva fecha que sea el 1 de enero del próximo año. 
const nuevaFecha = new Date(fechaActual.getFullYear() + 1, 0, 1); 
console.log(nuevaFecha);
