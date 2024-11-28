document.getElementById('iniciar').addEventListener('click', Good);

function Good() {
    const palabras = new Set();

    while (true) {
        const palabra = prompt('Introduce una palabra (o deja vacío para terminar):');

        if (!palabra) break; // Salimos si está vacío o cancelado.
        palabras.add(palabra.toLowerCase()); // Convertimos a minúsculas para evitar duplicados.
    }

    const resultado = [...palabras].sort((a, b) => b.localeCompare(a, 'es'));

    const resultadoElemento = document.getElementById('resultado');

    if (resultado.length > 0) {
        resultadoElemento.textContent = 'Palabras ordenadas (de Z a A): ' + resultado.join(", ");
    } else {
        resultadoElemento.textContent = 'No se introdujeron palabras.';
    }
};
