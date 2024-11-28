var miDiv = document.getElementById("miDiv");

miDiv.addEventListener("mouseover", function () {
  miDiv.style.backgroundColor = "#ff6347";
  miDiv.style.color = 'YELLOW';
});

miDiv.addEventListener("mouseout", function () {
  miDiv.style.backgroundColor = "#FFFFFF";
});
