// Mostrar por consola 50 combinaciones aleatorias de la lotería primitiva. 
// Las combinaciones son 6 números del 1 al 49, pero debe tenerse en cuenta 
// que no se pueden repetir los números en una misma combinación.

function generarCombinacion() {
    const numeros = [];
    while (numeros.length < 6) {
      let numero = Math.floor(Math.random() * 50) + 1;
      // Math.floor => redondea hacia abajo.
      if (!numeros.includes(numero)) {
        numeros.push(numero);
      }
    }
    return numeros;
  }
  
  function mostrarCombinaciones(cantidad) {
    for (let i = 1; i <= cantidad; i++) {
      console.log('Combinación ' + i + ': ' + generarCombinacion().join(", "));
    }
  }
  
  mostrarCombinaciones(50);
  