/** @type {HTMLCanvasElement} */

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

context.fillStyle = " #161616";
context.fillRect(0, 0, 500, 305);

//Gallows
function showGallows() {
  context.strokeStyle = "#ff84b1dc";
  context.beginPath();
  context.moveTo(15, 0);
  context.lineTo(15, 300);
  context.lineWidth = 4;
  context.stroke();
  context.beginPath();
  context.moveTo(0, 20)
  context.lineTo(500, 20);
  context.lineWidth = 4;
  context.stroke();
  context.beginPath()
  context.moveTo(335, 0);
  context.lineTo(335, 300);
  context.lineWidth = 4;
  context.stroke();
  context.beginPath();
  context.moveTo(175, 20);
  context.lineTo(175, 55);
  context.lineWidth = 4;
  context.stroke();
}

//Puppet
//Head
function showHead() {
  context.beginPath();
  context.arc(175, 80, 26, 0, Math.PI * 2, true);
  context.lineWidth = 2;
  context.strokeStyle = "#ff84b1dc";
  context.stroke();
  context.beginPath();
  context.arc(166, 74, 3, 0, Math.PI * 2, true);
  context.fillStyle = "#ff84b1dc";
  context.fill();
  context.beginPath();
  context.arc(184, 74, 3, 0, Math.PI * 2, true);
  context.fill();
  context.beginPath();
  context.moveTo(184, 90);
  context.lineTo(166, 90);
  context.stroke();
}
//Body
function showBody() {
  context.beginPath();
  context.moveTo(175, 106);
  context.lineTo(175, 220);
  context.stroke();
}

//Arms
//Right
function showRightArm() {
  context.beginPath();
  context.moveTo(175, 125);
  context.lineTo(200, 158);
  context.stroke();
}
//Left
function showLeftArm() {
  context.beginPath();
  context.moveTo(175, 125);
  context.lineTo(150, 158);
  context.stroke();
}

//Legs
//Right
function showRightLeg() {
  context.beginPath();
  context.moveTo(175, 220);
  context.lineTo(200, 250);
  context.stroke();
}
//Left
function showLeftLeg() {
  context.beginPath();
  context.moveTo(175, 220);
  context.lineTo(150, 250);
  context.stroke();
}
