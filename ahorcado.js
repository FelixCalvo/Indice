const nombres = ['Terremoto', 'Motocicleta', 'Edificio', 'Camiseta', 'Cerveza', 'Cocodrilo'];

let palabraAdivinar = nombres[Math.floor(Math.random() * nombres.length)];

console.log(palabraAdivinar);

document.querySelectorAll('.teclas').forEach(tecla => {
  tecla.onclick = function() {
    const letra = tecla.id.slice(-1);
    console.log(letra); 

  };
});
