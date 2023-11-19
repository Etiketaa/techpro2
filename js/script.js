
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

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    const article = document.querySelector('.fade-in');
    const articleTop = article.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (articleTop < windowHeight) {
      article.style.opacity = 1;
    }
  });
});

function pantallas() {
  document.getElementById("anatomia").innerHTML = "Las pantallas";
}
;
