var canvas = document.getElementById("tabuleiro");
var context = canvas.getContext("2d");

context.fillStyle = "#85A63F";
context.fillRect(0, 0, 1200, 800);

/* Forca */
function desenhaForca() {

    context.strokeStyle = "#836a3b"
    context.beginPath();
    context.moveTo(50, 30);
    context.lineTo(50, 350);
    context.lineWidth = 30;
    context.stroke();
    context.beginPath();
    context.moveTo(50, 44)
    context.lineTo(295, 44);
    context.lineWidth = 12;
    context.stroke();
    context.beginPath();
    context.strokeStyle = "#735E38"
    context.moveTo(44, 120);
    context.lineTo(134, 41);
    context.lineWidth = 20;
    context.stroke();
    context.beginPath()
    context.strokeStyle = "#7a6f61";
    context.moveTo(266, 49);
    context.lineTo(266, 85);
    context.lineWidth = 5;
    context.stroke();
    context.beginPath()
    context.strokeStyle = "#836a3b"; 
    context.moveTo(20, 350);
    context.lineTo(170, 350);
    context.lineWidth = 14;
    context.stroke();
}

/* Boneco */
/* Cabeça */
function desenhaCabeca() {
    context.fillStyle = '#BFA380'
    context.beginPath();
    context.arc(266, 108, 23, 0, Math.PI * 2, true);
    context.fill()
    
}

/* Corpo*/
function desenhaCorpo() {
    context.strokeStyle = '#BFA380';
    context.beginPath();
    context.moveTo(266, 130);
    context.lineTo(266, 235);
    context.lineWidth = 5.5;
    context.stroke();
}


/* Braços*/
/* Direita */
function desenhaBracoDireito() {
    context.beginPath();
    context.strokeStyle = '#BFA380';
    context.moveTo(266, 139);
    context.lineTo(220, 155);
    context.lineWidth = 5.5;
    context.stroke();

}
/* Esquerda */
function desenhaBracoEsquerdo() {
    context.beginPath();
    context.strokeStyle = '#BFA380';
    context.moveTo(266, 139);
    context.lineTo(310, 155);
    context.lineWidth = 5.5;
    context.stroke();
}

/* Pernas */
/* Direita */
function desenhaPernaDireita() {
    context.beginPath();
    context.strokeStyle = '#BFA380';
    context.moveTo(266, 233);
    context.lineTo(235, 280);
    context.lineWidth = 5.5;
    context.stroke();
}
/* Esquerda */
function desenhaPernaEsquerda() {
    context.beginPath();
    context.strokeStyle = '#BFA380';
    context.moveTo(266, 233);
    context.lineTo(295, 280);
    context.lineWidth = 5.5;
    context.stroke();
}






