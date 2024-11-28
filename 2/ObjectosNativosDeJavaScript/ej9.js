var boton = document.getElementById("comprobar");
var input = document.getElementById("date");

// Expresión regular para validar el formato de la fecha
// ^                  : Inicio de la cadena
// (0?[1-9]|[12][0-9]|3[01]) : Día válido (1-31) con 1 o 2 dígitos
// \/                 : Separador "/"
// (0?[1-9]|1[0-2])   : Mes válido (1-12) con 1 o 2 dígitos
// \/                 : Separador "/"
// (\d{2}|\d{4})      : Año con 2 o 4 dígitos
// $                  : Fin de la cadena
var regexFecha = /^(0?[1-9]|[1-2][0-9]|3[0-1])\/(0?[1-9]|1[0-2])\/(\d{2}|\d{4})$/;

function comprobarF(texto) {
    if (texto === "") {
        alert("Por favor, introduce una fecha.");
    } else if (!regexFecha.test(texto)) {
        alert("Tienes que introducir la fecha en el formato 31/12/YYYY.");
    } else {
        alert("Fecha válida. Gracias por introducirla.");
    }
}

// Añadir un listener al botón para ejecutar la validación al hacer clic
boton.addEventListener("click", () => {
    var texto = input.value.trim(); // Eliminar espacios en blanco al inicio y al final
    comprobarF(texto);
});