//Crear un array llamado frutas que contenga los nombres de 5 frutas. 
const frutas = ['cas', 'mango', 'manzana', 'sandia', 'pera']; 

//Utilizar un bucle for para imprimir en la consola cada fruta del array. 
for (let i = 0; i < frutas.length; i++) { 
    console.log(frutas[i]);
}; 

//Utilizar un bucle for para imprimir en la consola el índice de cada fruta junto con su nombre. 
for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice: ${i}, Nombre ${frutas[i]}`);
  };