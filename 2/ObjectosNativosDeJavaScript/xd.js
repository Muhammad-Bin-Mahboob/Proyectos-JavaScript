const palabras = ["ana", "radar", "javascript", "reconocer", "oro", "palindromo", "salas"];

let palabra=[];
let reverse=[];

for(let i=0; i<palabras.length; i++){
    palabra[i] = palabras[i].split('').reverse().join('')
    if(palabra[i] === palabras[i]){
        reverse[i] = palabras[i]+ " es un palindromo.";
    }else{
        reverse[i] = palabras[i] + " no es un palindromo.";
    }
}

for(rever of reverse){
    console.log(rever);
}