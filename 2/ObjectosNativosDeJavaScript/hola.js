let productos = [ 
    { nombre: "Laptop", categoria: "Electrónica", precio: 1500 }, 
    { nombre: "Silla", categoria: "Muebles", precio: 100 },
     { nombre: "Cargador", categoria: "Electrónica", precio: 50 }
     ];

function buscarProductos(product, nombre){
    for (let i = 0; i < product.length; i++) {
        if(nombre=product[i].nombre){
            return product[i];
        }
    }        
}

console.log(buscarProductos(productos, "Laptop"));