var button = document.getElementById("comprobar");
var input = document.getElementById("date");

button.addEventListener("click", function() {
    // Obtener la fecha seleccionada
    var fechaNacimiento = new Date(input.value);

    // Obtener la fecha actual
    var hoy = new Date();

    // Calcular la edad
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    // Ajustar si el mes/día actual es anterior al de nacimiento en el año actual
    var mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    // Mostrar la edad en un alert
    alert("Tienes aproximadamente " + edad + " años.");
});