let data = [
    {name: "Nacho", telephone: "966112233", age: 40},
    {name: "Ana", telephone: "911223344", age: 35},
    {name: "Mario", phone: "611998877", age: 15},
    {name: "Laura", telephone: "633663366", age: 17}
    ];

data.push ({name: "Pedro", telephone: "611944444", age: 25},
        {name: "Julia", phone: "633232323", age: 37}
    );

console.log(data);


data.sort (function (n1, n2) { 
    return n1.age - n2.age; 
}); 

console.log(data);

data.sort(function(a,b){
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});

console.log(data);

let newVar = [];
for (let i = 0; i < data.length; i++) {
    if (data[i].age > 30) {
        newVar.push(data[i])
    }    
}

console.log(newVar);