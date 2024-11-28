var cadena = window.prompt('Introduce una cadena de texto:');
let contador = 0;

for (let i = 0; i < cadena.length; i++) {
  if (cadena[i] === 'a') {
    contador++;
  }
}
alert("La letra 'a' aparece " + contador + " veces en la cadena.");
