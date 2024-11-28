const menu = document.getElementById("menu");
const output = document.getElementById("output");
const resetButton = document.getElementById("reset");

// Función para manejar las acciones
menu.addEventListener("change", Jose);
    
function Jose() {
const opcion = menu.value;

switch(opcion) {
    case "saludo":
        output.innerHTML = "<p>¡Hola! ¿Cómo estás?</p>";
        break;
    case "box":
        const box = document.createElement("div");
        box.classList.add("box");
        box.textContent = "Nueva Caja";
        output.appendChild(box);
        break;
    case "fecha":
        const currentDate = new Date();
        output.innerHTML = '<p>Fecha y Hora Actual: ' + currentDate + '</p>';
        break;
    case "randNumber":
        const randNumber = Math.floor(Math.random() * 100) + 1;
        output.innerHTML = '<p>Número Aleatorio:' + randNumber + '</p>';
        break;
}
};

resetButton.addEventListener("click", function() {
    menu.value = "";
    output.innerHTML = "";
});