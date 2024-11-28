var input = document.getElementById("texto");
var button = document.getElementById("convertir");
var fila = document.getElementById("fila");

var index = 0;

function insertLetter(texto) {
  var letras = texto.split("");
  index = 0;

  // Limpiar las celdas existentes
  fila.innerHTML = "";

  // Crear una celda para cada letra
  letras.forEach(() => {
    var newCell = document.createElement("td");
    // createElement: te permite crear un elemento en el
    // javaScript, que estaran en html.
    fila.appendChild(newCell);
    // Añade <td></td> creados dentro de <tr></tr>

    // appendChild: Agrega un nuevo nodo al final de la
    // lista de un elemento hijo de un elemento padre
    // especificado.
  });

  var cells = document.querySelectorAll("td");

  function separar() {
    if (index < letras.length && index < cells.length) {
      cells[index].innerHTML = letras[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }

  var interval = setInterval(separar, 1000);
}

button.addEventListener("click", () => {
  var texto = input.value.toUpperCase();
  insertLetter(texto);
});
