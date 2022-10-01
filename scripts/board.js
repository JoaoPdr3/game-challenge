/** @type {HTMLCanvasElement} */

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

context.fillStyle = "#161616";
context.fillRect(0, 0, 500, 305);

//Gallows
context.strokeStyle = "#333333";
context.beginPath();
context.moveTo(110, 10);
context.lineTo(110, 305);
context.lineWidth = 24;
context.stroke();
context.beginPath();
context.moveTo(100, 24)
context.lineTo(245, 24);
context.lineWidth = 12;
context.stroke();
context.beginPath()
context.strokeStyle = "#ffffff";
context.moveTo(235, 30);
context.lineTo(235, 50);
context.lineWidth = 2;
context.stroke();
context.beginPath()
context.strokeStyle = "#333333";
context.moveTo(80, 150);
context.lineTo(175, 150);
context.lineWidth = 16;
context.stroke();

//Puppet
//Head
context.fillStyle = '#9C9C9C';
context.beginPath();
context.arc(235, 61, 14, 0, Math.PI * 2, true);
context.fill()
//Body
context.strokeStyle = '#9C9C9C';
context.beginPath();
context.moveTo(235, 70);
context.lineTo(235, 120);
context.lineWidth = 4;
context.stroke();

//Arms
//Right
context.beginPath();
context.strokeStyle = '#9C9C9C';
context.moveTo(235, 78);
context.lineTo(220, 96);
context.lineWidth = 4;
context.stroke();
//Left
context.beginPath();
context.strokeStyle = '#9C9C9C';
context.moveTo(235, 78);
context.lineTo(250, 95);
context.lineWidth = 4;
context.stroke();

//Legs
//Right
context.beginPath();
context.strokeStyle = '#9C9C9C';
context.moveTo(235, 119);
context.lineTo(220, 129);
context.lineWidth = 4;
context.stroke();
//Left
context.beginPath();
context.strokeStyle = '#9C9C9C';
context.moveTo(235, 119);
context.lineTo(250, 129);
context.lineWidth = 4;
context.stroke();