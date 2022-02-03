var intentos = 0;
var listaPalabras = [
  "COMPUTADORA",
  "CASA",
  "CARRO",
  "PERRO",
  "TECLADO",
  "RELOJ",
];
var palabra =
  listaPalabras[Math.round(Math.random() * (listaPalabras.length - 1))];

let botonNuevoJuego = document.getElementById("iniciar-juego");

botonNuevoJuego.addEventListener("click", () => {
  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
  intentos = 0;
  window.addEventListener("keyup", jugar);

  inicializarPalabra();
});

window.addEventListener("keyup", jugar);

//Agreaga palabra a la lista de palabras
function agregarPalabra(palabra) {
  listaPalabras.push(palabra);

  console.log(listaPalabras);
}

//Inicializa la palabra secreta a jugar
function inicializarPalabra() {
  palabra =
    listaPalabras[Math.round(Math.random() * (listaPalabras.length - 1))];
  var guionBajo = "";
  for (let index = 0; index < palabra.length; index++) {
    guionBajo += "_";
  }

  console.log("<<PALABRA A JUGAR>> " + palabra);
  console.log("Palabra Oculta >>> " + guionBajo);
  document.querySelector("p").textContent = guionBajo;
}

function verificarLetra(letra) {
  var letraCorrecta = false;
  var letra = letra.toUpperCase();
  console.log("<< Funcion Verificar Letra >>");
  console.log("Letra >> " + letra);
  console.log("Indice letra >> " + palabra.indexOf(letra));
  console.log("Conteiene letra (?) >> " + palabra.includes(letra));
  if (palabra.includes(letra)) {
    letraCorrecta = true;
  }
  return letraCorrecta;
}

//Ejecuta el Juego
function jugar(Event) {
  //console.log(Event);

  if (Event.keyCode >= 65 && Event.keyCode <= 90) {
    var letraCorrecta = verificarLetra(Event.key);

    if (!letraCorrecta) {
      intentos += 1;

      if (intentos == 1) {
        dibujarHorca();
      } else if (intentos == 2) {
        dibujarCabeza();
      } else if (intentos == 3) {
        dibujarTorso();
      } else if (intentos == 4) {
        dibujarPiernaDerecha();
      } else if (intentos == 5) {
        dibujarPiernaIzquierda();
      } else if (intentos == 6) {
        dibujarBrazoDerecho();
      } else if (intentos == 7) {
        dibujarBrazoIzquierdo();
      } else {
        console.log("Perdiste!!!");
        alert("HAZ PERDIDO!!!");
        finJuego();
      }
    }
  }
}

//Finaliza la ejecucion del juego
function finJuego() {
  window.removeEventListener("keyup", jugar);
}

//agregarPalabra("gato");

//Capturar correctamente la letra ✓
//Buscar letra en la palabra ✓
//Dibujar Aciertos en pantalla
//Dibujar Errores en pantalla
//Dibujar la Horca ✓
//Terminar Juego por derrota
//Terminar Juego Por victoria
//Organizar Juego e inicializar juego o crear una funcion de Inicializacion
//Agregar Nueva Palabra