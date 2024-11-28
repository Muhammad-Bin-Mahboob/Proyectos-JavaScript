var number = document.getElementById("newNum");
var but = document.getElementById("btn");

but.addEventListener('click', add);

function add() {
    var element = document.createElement("li");
    var rand = Math.floor(Math.random()*10)+1; 
    element.innerHTML= rand;
    number.appendChild(element);
}
