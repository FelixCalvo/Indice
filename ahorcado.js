const nombres = [
  'COCODRILO', 
  'PERRO', 
  'GATO', 
  'ELEFANTE', 
  'LEON', 
  'TIGRE', 
  'JIRAFA', 
  'ZORRO', 
  'CABALLO', 
  'LOBO', 
  'OSO', 
  'AGUILA', 
  'SERPIENTE', 
  'DELFIN', 
  'CANGURO', 
  'PATO', 
  'RINOCERONTE'
];

let palabraAdivinar = nombres[Math.floor(Math.random() * nombres.length)];
let fotoAhorcado = 0;
let gameOver = palabraAdivinar.length;

console.log(palabraAdivinar);

function generarSpansPorLetras(cadena) {
  const container = document.querySelector(".palabra"); // Contenedor donde se añadirán los <span>
  // container.innerHTML = ""; // Limpiar contenido previo

  for (let i = 0; i < cadena.length; i++) {
    const span = document.createElement("span");
    span.className = "spanclassname_" + palabraAdivinar[i];//ponemos letra en la clase span para que sea igual a la letra a buscar para poder cambiarlas a la vez spanclassname__A
    //  span.textContent = cadena[i]; // Asignar la letra al contenido del span
    span.style.margin = "5px"; // Separación entre letras
    span.style.width = "50px"; 
    span.style.height = "50px";
    span.style.textAlign = "center"; // Centrar texto
    span.style.lineHeight = "50px"; // Centrar verticalmente
    span.style.border = "1px solid black"; // Opcional: Borde para destacar
    span.style.backgroundColor = "#f0f0f0"; // Opcional: Fondo claro
    container.appendChild(span); // Añadir el span al contenedor
  }
}


generarSpansPorLetras(palabraAdivinar);

document.querySelectorAll('.teclas').forEach(tecla => {
  tecla.onclick = function() {
    const letra = tecla.id.slice(-1);//para saber la letra del teclado pulsado tecla_a la ultima letra
    console.log(letra); 
    // Comprobar si la letra está en la palabra a adivinar
    if (palabraAdivinar.includes(letra)) {
      console.log("La letra está en la palabra");
      const spans = document.querySelectorAll(".spanclassname_" + letra);
      const div = document.querySelector("#tecla_" + letra);
      div.onclick = null;
      spans.forEach(span => {//guardamos la letra en todos los span que tengan la clase igual a la letra a buscar
        span.textContent = letra; // Asigna la letra al contenido de cada span
        gameOver --;
        if(gameOver === 0){
          setTimeout(() => {
            alert('Has ganado');
            location.reload();
          }, 300);
        }
    });   
    } else {
      fotoAhorcado++;
      document.querySelector('.ahorcado').src = `img/ahorcado_${fotoAhorcado}.jpg`;
      if(fotoAhorcado === 6){
        setTimeout(() => {
            alert('Has perdido');
            location.reload();
          }, 300);
        
      }
    }  
  };
});

