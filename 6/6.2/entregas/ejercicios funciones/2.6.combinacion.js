const personas = [
  { nombre: 'Juan', edad: 17 },
  { nombre: 'Ana', edad: 22 },
  { nombre: 'Pedro', edad: 19 },
  { nombre: 'Laura', edad: 16 },
];

// Filtrar personas mayores de 20 años usando una función externa
const result = personas.filter(fil);

function fil(persona) {
  return persona.edad > 20;
}

console.log(result);
// Resultado: [ { nombre: 'Ana', edad: 22 } ]

  