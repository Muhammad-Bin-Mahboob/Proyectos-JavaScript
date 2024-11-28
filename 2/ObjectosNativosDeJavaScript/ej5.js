var num1 = document.getElementById("numero1");
var num2 = document.getElementById("numero2");
var num3 = document.getElementById("numero3");

var num4 = document.getElementById("numero4");
var num5 = document.getElementById("numero5");
var num6 = document.getElementById("numero6");

var num7 = document.getElementById("numero7");
var num8 = document.getElementById("numero8");
var num9 = document.getElementById("numero9");

var button = document.getElementById("convertir");

function mayor() {
  var numeros = [
    parseFloat(num1.value),
    parseFloat(num2.value),
    parseFloat(num3.value),
    parseFloat(num4.value),
    parseFloat(num5.value),
    parseFloat(num6.value),
    parseFloat(num7.value),
    parseFloat(num8.value),
    parseFloat(num9.value),
  ];
  var mayorNumero = -1;
  for (let i = 0; i < numeros.length; i++) {
    if(mayorNumero < numeros[i]){
      mayorNumero = numeros[i];
    }
  }
  return mayorNumero;
}

button.addEventListener("click", () => {
    var mayorNumero = mayor();
    alert('el Numero Mayor es ' + mayorNumero);
});
