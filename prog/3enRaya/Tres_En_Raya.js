let jugadas = 9;
const tablero = [];
const colores = ['red', 'blue'];
const nombres = ['MARIA', 'JUAN'];
let jugador = Math.floor(Math.random() * 2);

document.getElementById('jugador_' + jugador).style.backgroundColor = colores[jugador];

//cambiamos color si se puede
const cambiarColor = event => {
  //comprobamos si no se ha pulsado la casilla (posicion_1)
  if(tablero[event.target.id.slice(-1)-1] === 2) {
    jugador === 0 ? pintarTablero('red', 1, event) : pintarTablero('blue', 0, event);
    tablero[event.target.id.slice(-1)-1] = jugador;

    jugadas --; 
    // actualizamos numero de jugadas
    document.getElementById('numJugadas').textContent = jugadas;

    //actualizamos las jugadas que quedan
    jugada(); 
    
    if(comprobarGanador()){
      document.querySelector('h2').textContent = 'FELICIDADES ' + nombres[jugador]; 
      //ponemos el array lleno de numeros del jugador para que no se puedan cambiar casillas. 
      tablero.fill(jugador);
    }else {
      //mientras no hay ganador se pintan el fondo del siguiente jugador
      borrarFondo();
      pintarFondo(jugador);
    }
    
  }
  
  }

  //pintamos el color de la casilla del jugador
const pintarTablero = (color, jugon, event) => {
  event.target.style.backgroundColor = color;
  jugador = jugon;
  }

const jugada = () => tablero.includes(2) ? console.log('Quedan ' + jugadas + ' jugadas.') : console.log('Se acabo el juego.'); 

const comprobarGanador = () => {
  const combinacionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6]             // Diagonales
  ];

  //some devuelve un true si se cumple alguna condicion dentro
  //every si todos los elementos de un array cumplen con una condición definida por una función de prueba (ejemplo: si pillamos [0,1,2] lo usaremos como indice del array y miraremos si todos son del jugador que hapulsado --> tablero[0] = [1,1,1] si es el segundo jugador, habra hecho la primera fila ganando).
  return combinacionesGanadoras.some(combinacion => 
    combinacion.every(index => tablero[index] === jugador)
  );
}

//borramos los colores de fondo de jugadores
const borrarFondo = () => {
  document.getElementById('jugador_0').style.backgroundColor = 'black';
  document.getElementById('jugador_1').style.backgroundColor = 'black';
}

//pinta fondo del jugador que ha pulsado la casilla
const pintarFondo = (jugador) => {
  document.getElementById('jugador_' + jugador).style.backgroundColor = colores[jugador];
}

// Asocia el evento onclick a cada div
document.querySelectorAll('.tablero div').forEach(div => {
  div.onclick = cambiarColor;
});

//llenamos de doses la posicion de las casillas (libres por seleccionar)
for(i = 0; i< 9; i ++) tablero[i] = 2;

/*
Poner los jugadores como booleanos se podria:
player1 = !player1 --> de true pasa a false.
*/

