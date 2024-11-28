var palabra = 'HOLA';
var letters = palabra.split("");
//var letters = ["H", "O", "L", "A"];

var cells = document.querySelectorAll("td");

var index = 0;

function insertLetter() {
  if (index < letters.length) {
    cells[index].innerHTML = letters[index];
    index++;
  } else {
    clearInterval(interval);
  }
}

var interval = setInterval(insertLetter, 1000);
