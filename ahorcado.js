const nombres = ['Terremoto', 'Motocicleta', 'Edificio', 'Camiseta', 'Cerveza', 'Cocodrilo'];


// Asocia el evento onclick a cada div
document.querySelectorAll('.teclas').forEach(tecla => {
  tecla.onclick = extraerNumeroClase();
});


console.log(nombres);

// Función que se ejecuta al hacer click en una tecla
