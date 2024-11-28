var input = document.getElementById("numero");
var button = document.getElementById("convertir");
var binari = document.getElementById("binario");
var octal1 = document.getElementById("octal");
var hexaDecimal = document.getElementById("hexadecimal");

function binario1(num) {
  return Number(num).toString(2);
}

function octal2(num) {
  return Number(num).toString(8);
}

function hexa(num) {
  return Number(num).toString(16).toUpperCase();
}

button.addEventListener("click", () => {
  var num = input.value;
  binari.innerText = binario1(num);
  octal1.innerText = octal2(num);
  hexaDecimal.innerText = hexa(num);
});
