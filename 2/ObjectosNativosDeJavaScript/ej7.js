let fechaNacimiento = window.prompt('¿En qué fecha naciste? (YYYY/MM/DD)');
let hoy = new Date();

let añoNac = parseInt(fechaNacimiento.substring(0, 4));
let mesNac = parseInt(fechaNacimiento.substring(5, 7));
let diaNac = parseInt(fechaNacimiento.substring(8, 10));

// Calcular diferencia de años, meses y días
let años = hoy.getFullYear() - añoNac;
let meses = hoy.getMonth() + 1 - mesNac; 
// `getMonth()` devuelve de 0 a 11, sumamos 1
let dias = hoy.getDate() - diaNac;

// Ajustar si los días son negativos
if (dias < 0) {
  meses--;
  dias += 30; // Aproximamos un mes a 30 días
}

// Ajustar si los meses son negativos
if (meses < 0) {
  años--;
  meses += 12;
}

// Calcular total de días
let totalDias = (años * 365) + (meses * 30) + dias;

// Mostrar el resultado
alert('Han transcurrido ' + totalDias + ' días desde tu nacimiento.');