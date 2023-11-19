
const toggle = document.getElementById("toggle")
toggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
}
);

let nombre = prompt("Por favor, escribe tu nombre:");

if (nombre) {
  alert("¡Bienvenido, " + nombre + "! Gracias por visitar nuestra página.");
} else {
  alert("¡Bienvenido! Gracias por visitar nuestra página.");
}

function pantallas() {
  document.getElementById("anatomia").innerHTML = "Las pantallas";
}
;
