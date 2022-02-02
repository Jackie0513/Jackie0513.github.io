var canvas = document.getElementById("ahorcado")
console.log(canvas);
var canvasCtx = canvas.getContext("2d");
canvasCtx.fillStyle = "gray";
canvasCtx.strokeStyle ="white";

function dibujarHorca(){
//1 horca
canvasCtx.beginPath();
canvasCtx.moveTo(75, 312);
canvasCtx.lineTo(150, 312);
canvasCtx.lineTo(112, 275);
canvasCtx.lineTo(75, 312);
canvasCtx.moveTo(112, 275);
canvasCtx.lineTo(112, 55);
canvasCtx.lineTo(212, 55);
canvasCtx.lineTo(212, 90);
canvasCtx.stroke(); 
}
/*function dibujarHorca2(){
    //1 horca
    canvasCtx.beginPath();
    canvasCtx.moveTo(150, 625);
    canvasCtx.lineTo(300, 625);
    canvasCtx.lineTo(225, 550);
    canvasCtx.lineTo(150, 625);
    canvasCtx.moveTo(225, 550);
    canvasCtx.lineTo(225, 110);
    canvasCtx.lineTo(425, 110);
    canvasCtx.lineTo(425, 180);
    canvasCtx.stroke(); 
    }
*/
function dibujarCabeza(){
//2 cabeza
canvasCtx.moveTo(425, 230);
canvasCtx.beginPath();
canvasCtx.arc(425, 230, 50, 0, 2 * Math.PI);
canvasCtx.stroke();
}

function dibujarTorso (){
//3 torso

canvasCtx.beginPath()
canvasCtx.moveTo(425, 280);
canvasCtx.lineTo(425,460);
canvasCtx.stroke();
}
function dibujarPiernaDerecha(){
//4 pierna derecha
canvasCtx.beginPath()
canvasCtx.moveTo(425, 460);
canvasCtx.lineTo(485,520);
canvasCtx.stroke();
}

function dibujarPiernaIzquierda(){
//5 pierna izquierda
canvasCtx.beginPath();
canvasCtx.moveTo(425, 460);
canvasCtx.lineTo(365,520);
canvasCtx.stroke();
}


function dibujarBrazoDerecho(){
//6 brazo derecho
canvasCtx.beginPath();
canvasCtx.moveTo(425, 320);
canvasCtx.lineTo(485,380);
canvasCtx.stroke();
}

function dibujarBrazoIzquierdo(){
//7 breazo izquierdo
canvasCtx.beginPath();
canvasCtx.moveTo(425, 320);
canvasCtx.lineTo(365,380);
canvasCtx.stroke();
}








