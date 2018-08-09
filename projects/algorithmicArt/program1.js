function startApp() {
  initCanvas();
  // drawSomeCircles();
  // drawSomeRects();
  var depth = 0;

  document.body.addEventListener("click", function() {
    console.log(depth);
    drawSierpinski(depth);
    depth++;
  });
}

function drawSomeCircles() {
  drawCircle(500, 400, 100);
  drawCircle(300, 300, 250);
  drawCircle(200, 200, 50);
  drawCircle(600, 250, 20);
}

function drawSomeRects() {
  drawRandomRec();
  drawRandomRec();
  drawRandomRec();
  drawRandomRec();
  drawRandomRec();
  drawRandomRec();
}

function drawSierpinski(depth) {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  clear();
  context.save();
  context.translate(canvas.width * 0.5, canvas.height * 0.6);
  context.scale(0.5 * canvas.width, 0.5 * canvas.height);
  drawTriangle(depth);
  context.restore();
}

function drawTriangle(depth) {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  context.fillStyle = "#000";
  var angle = -Math.PI / 2;
  if (depth === 0) {
    context.beginPath();

    context.moveTo(Math.cos(angle), Math.sin(angle));

    angle += (Math.PI * 2) / 3;

    context.lineTo(Math.cos(angle), Math.sin(angle));

    angle += (Math.PI * 2) / 3;

    context.lineTo(Math.cos(angle), Math.sin(angle));

    context.fill();
  } else {
    context.save();
    context.translate(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5);
    context.scale(0.5, 0.5);
    drawTriangle(depth - 1);
    context.restore();

    angle += (Math.PI * 2) / 3;
    context.save();
    context.translate(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5);
    context.scale(0.5, 0.5);
    drawTriangle(depth - 1);
    context.restore();

    angle += (Math.PI * 2) / 3;
    context.save();
    context.translate(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5);
    context.scale(0.5, 0.5);
    drawTriangle(depth - 1);
    context.restore();
  }
}

document.addEventListener("DOMContentLoaded", startApp);
