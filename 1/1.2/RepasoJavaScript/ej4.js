var color = window.prompt('¿Qué color quieres poner? "R" para rojo, "V" para verde o "A" para azul');

if (color === "R" || color === "r") {
    document.bgColor = "#FF0000";
} else if (color === "V" || color === "v") {
   document.bgColor = "#008000";
} else if (color === "A" || color === "a") {
   document.bgColor = "#0000FF";
}

// colores deben de ser en hexadecimal