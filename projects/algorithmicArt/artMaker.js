function drawCircle(x, y, radius) {
  var context = document.getElementById("canvas").getContext("2d");
  context.fillStyle = "#fff";
  context.strokeStyle = "#000";
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill();
  context.stroke();
}

function clear(color) {
  var context = document.getElementById("canvas").getContext("2d");
  if (color) {
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function initCanvas() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  context.fillStyle = "pink";
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawRandomRec() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var x = Math.random() * canvas.width;
  var y = Math.random() * canvas.height;
  var w = Math.random() * 200;
  var h = Math.random() * 200;
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  context.fillRect(x, y, w, h);
}
