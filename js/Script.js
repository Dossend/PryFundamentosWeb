function playAudio() {
  const audio = document.getElementById("music");
  const gifContainer = document.getElementById("gif-container");

  if (audio.paused) {
    audio.play();
    gifContainer.style.display = "block"; // Muestra el GIF
  } else {
    audio.pause();
    gifContainer.style.display = "none"; // Oculta el GIF
  }
}

function formatearNumero(input) {
  let value = input.value.replace(/\D/g, "");
  let formattedValue = new Intl.NumberFormat("es-CO").format(value);

  input.value = "$" + formattedValue;
}

function Comprar() {
  const nombre = document.getElementById("nombre").value.trim();
  const precio = document.getElementById("precio").value.trim();
  const cantidad = document.getElementById("cantidad").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const entregaDomicilio = document.getElementById("domicilio").checked;
  const entregaPuntoFisico = document.getElementById("puntoFisico").checked;

  if (
    nombre &&
    precio &&
    cantidad &&
    direccion &&
    (entregaDomicilio || entregaPuntoFisico)
  ) {
    window.location.href = "/html/Loader.html";
  } else {
    alert("Por favor, rellene todos los campos correctamente.");
  }
}
