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
  'PINGÜINO', 
  'RINOCERONTE'
];

let palabraAdivinar = nombres[Math.floor(Math.random() * nombres.length)];
let fotoAhorcado = 0;

console.log(palabraAdivinar);

document.querySelectorAll('.teclas').forEach(tecla => {
  tecla.onclick = function() {
    const letra = tecla.id.slice(-1);//para saber la letra del teclado pulsado tecla_a la ultima letra
    console.log(letra); 
    // Comprobar si la letra está en la palabra a adivinar
    if (palabraAdivinar.includes(letra)) {
      console.log("La letra está en la palabra");
      const span = document.querySelector("#spanid_" + palabraAdivinar.indexOf(letra));
      span.textContent = letra; // Asignar la letra al contenido del span
    } else {
      fotoAhorcado++;
      document.querySelector('.ahorcado').src = `img/ahorcado_${fotoAhorcado}.jpg`;
      if(fotoAhorcado === 6){
        alert('Has perdido');
        location.reload();
      }
    }
    
    //  
  };
});

// const texto = "programacion"; guardar en aray todas las coincidencias de una letra
// const letra = "o";

// let posiciones = [];
// let posicion = texto.indexOf(letra);

// while (posicion !== -1) {
//   posiciones.push(posicion);
//   posicion = texto.indexOf(letra, posicion + 1);
// }

// console.log(`La letra "${letra}" aparece en las posiciones: ${posiciones}`);



// nombre.indexOf("a")); // 1 Si la letra no estuviese presente, devolvería -1

// const eliminarLetra = (str, posicion) => str.slice(0, posicion) + str.slice(posicion + 1);

// console.log(eliminarLetra("Hola Mundo", 4)); // "HolaMundo"

function generarSpansPorLetras(cadena) {
  const container = document.querySelector(".palabra"); // Contenedor donde se añadirán los <span>
  // container.innerHTML = ""; // Limpiar contenido previo

  for (let i = 0; i < cadena.length; i++) {
    const span = document.createElement("span");
    span.id = "spanid_" + i;
    //  span.textContent = cadena[i]; // Asignar la letra al contenido del span
    span.style.margin = "5px"; // Separación entre letras
    span.style.width = "50px"; 
    span.style.height = "50px";
    span.style.textAlign = "center"; // Centrar texto
    span.style.lineHeight = "50px"; // Centrar verticalmente
    span.style.border = "1px solid black"; // Opcional: Borde para destacar
    span.style.display = "inline-block"; // Para que sean bloques en línea
    span.style.backgroundColor = "#f0f0f0"; // Opcional: Fondo claro
    container.appendChild(span); // Añadir el span al contenedor
  }
}


generarSpansPorLetras(palabraAdivinar);
