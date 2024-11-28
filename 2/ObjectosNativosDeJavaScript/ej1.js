var inputTexto = document.getElementById("texto");
var inputInverse = document.getElementById("inverse");
var inputMas = document.getElementById("mas");
var inputRepite = document.getElementById("repite");
var inputInversaMas = document.getElementById("inversaMas");
var button = document.querySelector("button");

function invertirTexto(texto) {
  // return texto.split("").reverse().join("");
  var uno = texto.split("");
  var dos = uno.reverse();
  var tres = dos.join("");
  return tres;
}

function convertirMayusculas(texto) {
  return texto.toUpperCase();
}

function repetirTexto(texto, veces) {
  return texto.repeat(veces);
}

function hacertodo() {
  var texto = inputTexto.value;
  
  inputInverse.value = invertirTexto(texto);
  inputMas.value = convertirMayusculas(texto);
  inputRepite.value = repetirTexto(texto, 3);
  inputInversaMas.value = convertirMayusculas(invertirTexto(texto));
};

button.addEventListener("click", hacertodo);