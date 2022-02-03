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

//Agreaga una nueva @palabra para jugar a la lista
function agregarPalabra(palabra) {
  listaPalabras.push(palabra);

  console.log(listaPalabras);
}

//Inicializa la palabra secreta a jugar
function inicializarPalabra() {

  palabra =listaPalabras[Math.round(Math.random() * (listaPalabras.length - 1))];
  var guionBajo = "";
  for (let index = 0; index < palabra.length; index++) {
    guionBajo += "_";
  }

  console.log("<<PALABRA A JUGAR>> " + palabra);
  document.getElementById("aciertos").textContent = guionBajo;
}

function verificarLetra(letra) {
  var letraCorrecta = false;
  var letra = letra.toUpperCase();
  
  if (palabra.includes(letra)) {
    letraCorrecta = true;
    dibujarAcierto(letra);
  }
  else{
    dibujarError(letra);
  }
  return letraCorrecta;
}

//Ejecuta el Juego
function jugar(Event) {
  //console.log(Event);

  if (Event.keyCode >= 65 && Event.keyCode <= 90) {
    
    var repite = document.getElementById("errores").textContent.includes(Event.key.toUpperCase());
    var letraCorrecta = verificarLetra(Event.key);
    
   

    if (!letraCorrecta && !repite) {
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
    if (palabra == document.getElementById("aciertos").textContent) {

      console.log(palabra+" == "+document.getElementById("aciertos").textContent);
      finJuego();
      alert("YOU WIN !!");
      
    }
  }
}

//Finaliza la ejecucion del juego
function finJuego() {
  window.removeEventListener("keyup", jugar);
}

//ciclo para recorrer y armar una palabra con los datos ingresados
//Recorrer la palabra original y si el indice de letra existe usar
//ese indice para introducir letras al string de la palabra secreta

function dibujarAcierto(letra) {
  let palabraAuxiliar = document.getElementById("aciertos").textContent;

  for (index = 0; index < palabra.length; index++) {
    if (letra == palabra[index]) {
      palabraAuxiliar = reemplazarCaracter(palabraAuxiliar, index, letra);
    }
    document.getElementById("aciertos").textContent = palabraAuxiliar;
  }

  //var palabratest = "teclado";
  //console.log(palabratest)

  //console.log(palabratest.replace(palabratest.charAt(3),"A"));
}
function dibujarError(letra){
  let palabraAuxiliar = document.getElementById("errores").textContent;
  if (!palabraAuxiliar.includes(letra)) {
     palabraAuxiliar += letra;
  }
  document.getElementById("errores").textContent = palabraAuxiliar;

}

function reemplazarCaracter(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}



//Capturar correctamente la letra ✓
//Buscar letra en la palabra ✓
//Dibujar Aciertos en pantalla ✓
//Dibujar Errores en pantalla ✓
//Dibujar la Horca ✓
//Terminar Juego por derrota ✓
//Terminar Juego Por victoria ✓
//Organizar Juego e inicializar juego o crear una funcion de Inicializacion
//Agregar Nueva Palabra
