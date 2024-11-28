let arr = [1,2,1,21,1,1,2,2,2];

let array = new Set(arr);

console.log(array);

//----------------------

function contarOcurrencias(palabra) {
    const ocurrencias = new Map();
  
    for (const palabra of palabras) {
      if (ocurrencias.has(palabra)) {
        ocurrencias.set(palabra, ocurrencias.get(palabra) + 1);
        // ocurrencias.get(palabra) 
        // get busca por 'key' y devuelve la 'clave'
      } else {
        ocurrencias.set(palabra, 1);
      }
    }
  
    return ocurrencias;
  }
  
  const palabras = ["casa", "tabla", "tabla", "mapa", "tabla", "mapa"];
  
  console.log("El Map de array edades es:", contarOcurrencias(palabras));
  

