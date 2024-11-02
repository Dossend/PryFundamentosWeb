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
