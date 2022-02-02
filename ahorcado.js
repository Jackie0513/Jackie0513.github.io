var intentos = 0;
var listaPalabras = [];
var palabra = "COMPUTADORA";

window.addEventListener("keyup", jugar);



//Agreaga palabra a la lista de palabras
function agregarPalabra(palabra) {
    listaPalabras.push(palabra);

    console.log(listaPalabras);
}


//Selecciona la palabra secreta a jugar
function palabraSecreta() { }

function verificarLetra(letra) {
    var letraCorrecta = false;
    var letra = letra.toUpperCase();
    console.log("<< Funcion Verificar Letra >>")
    console.log("Letra >> " + letra)
    console.log("Indice letra >> "+ palabra.indexOf(letra));
    console.log("Conteiene letra (?) >> "+ palabra.includes(letra));
    if(palabra.includes(letra)){
        letraCorrecta = true;
    }
    return letraCorrecta
    
}

//Ejecuta el Juego
function jugar(Event) {

    if (Event.keyCode >= 65 && Event.keyCode <= 90) {

        var letraCorrecta = verificarLetra(Event.key);

    }

    if(!letraCorrecta){
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
        alert("HAZ PERDIDO!!!")
        finJuego();
    }
}
}


//Finaliza la ejecucion del juego
function finJuego() {
    window.removeEventListener("keyup", jugar);
}

agregarPalabra("gato");

//Capturar correctamente la letra ✓
//Buscar letra en la palabra ✓
//Dibujar Aciertos
//Dibujar Errores 
//Dibujar la Horca