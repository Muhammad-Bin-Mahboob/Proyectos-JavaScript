document.getElementById("compareButton").addEventListener("click", function () {
  var num1Value = document.getElementById("num1").value;
  var num2Value = document.getElementById("num2").value;
  var num3Value = document.getElementById("num3").value;

  if (num1Value === "" || num2Value === "" || num3Value === "") {
    alert("Por favor, complete todos los campos.");
    return; // Detener la ejecución si hay campos vacíos
  }

  var num1 = Number(num1Value);
  var num2 = Number(num2Value);
  var num3 = Number(num3Value);

  // Verificar si los valores son numéricos
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Por favor, ingrese valores numéricos válidos.");
    return; // Detener la ejecución si hay valores no numéricos
  }

  if (num1 > num2 && num1 > num3) {
    alert("El número mayor es: " + num1);
  } else if (num2 > num1 && num2 > num3) {
    alert("El número mayor es: " + num2);
  } else {
    alert("El número mayor es: " + num3);
  }
});
