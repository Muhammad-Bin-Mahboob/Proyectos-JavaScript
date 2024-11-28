var btn = document.getElementById("button");

var rojo = document.getElementById("rojo");
var verde = document.getElementById("verde");
var azul = document.getElementById("azul");

btn.addEventListener("click", function (event) {
 if (event.target == verde) {
    document.bgColor = "#008000";
  } else if (event.target == azul) {
    document.bgColor = "#0000FF";
  }
});

function rojos() {
  document.bgColor = "#FF0000";
}

rojo.addEventListener("click", rojos);