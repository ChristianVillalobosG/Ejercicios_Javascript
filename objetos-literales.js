// Crear un objeto llamado persona con las propiedades nombre, edad y ciudad.
const persona = {
  nombre: 'Christian',
  edad: 31,
  ciudad: 'Heredia',
};

// Imprimir en la consola el nombre de la persona.  
const nombre = persona.nombre;
console.log(nombre); 

//Cambiar la ciudad de la persona a "San José" u otro. 
persona.ciudad = 'San José'; 
console.log(persona);
//Agregar una nueva propiedad llamada ocupación con el valor "Estudiante". 
persona.ocupacion = 'Estudiante';  
console.log(persona);

//Imprimir en la consola todas las propiedades del objeto. 
const propiedades = Object.keys(persona); 
console.log(propiedades);