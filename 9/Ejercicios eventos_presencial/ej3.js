const boton = document.getElementById("reaparecer");
const p1 = document.getElementById("parrafo1");
const p2 = document.getElementById("parrafo2");
const p3 = document.getElementById("parrafo3");

p1.addEventListener('click', ocultar);
p2.addEventListener('click', oculta);
p3.addEventListener('click', ocult);

p1.addEventListener('contextmenu', eliminar);
p2.addEventListener('contextmenu', elimina);
p3.addEventListener('contextmenu', elimin);

boton.addEventListener('click', aparecer);

function ocultar() {
    p1.style.display = "none";
}

function oculta() {
    p2.style.display = "none";
}

function ocult() {
    p3.style.display = "none";
}

function eliminar(){p1.remove()}
function elimina(){p2.remove()}
function elimin(){p3.remove()}

function aparecer() {
    p1.style.display = "block"; // Vuelve a mostrar el párrafo 1
    p2.style.display = "block"; // Vuelve a mostrar el párrafo 2
    p3.style.display = "block"; // Vuelve a mostrar el párrafo 3
}