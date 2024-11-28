function mostrarFecha() {
  var hoy = new Date();
  var diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  var meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  var diaSemana = diasSemana[hoy.getDay()];
  var dia = hoy.getDate();
  var mes = meses[hoy.getMonth()];
  var año = hoy.getFullYear();

  alert('Hoy es ' + diaSemana + ' ' + dia + ' ' + 
    mes + ' ' + año + '.');
  //console.log("Hoy es " + diaSemana + " " + dia + " " + mes + " " + año + ".");
}

mostrarFecha();
