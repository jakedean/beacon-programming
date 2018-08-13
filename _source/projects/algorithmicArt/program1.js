function startApp() {
  artMaker.initCanvas();
  // drawSomeCircles();
  // drawSomeRects();
  var depth = 0;

  document.body.addEventListener("click", function() {
    console.log(depth);
    artMaker.drawSierpinski(depth);
    depth++;
  });

  // drawCirclesWithLoop();
  drawRandomRecWithLoop();
}

function drawSomeCircles() {
  artMaker.drawCircle(500, 400, 100);
  artMaker.drawCircle(300, 300, 250);
  artMaker.drawCircle(200, 200, 50);
  artMaker.drawCircle(600, 250, 20);
}

function drawSomeRects() {
  artMaker.drawRandomRec();
  artMaker.drawRandomRec();
  artMaker.drawRandomRec();
  artMaker.drawRandomRec();
  artMaker.drawRandomRec();
  artMaker.drawRandomRec();
}

function drawCirclesWithLoop() {
  for (var i = 0; i < 1000; i++) {
    artMaker.drawCircle(i * 2, 400, i / 2);
  }
}

function drawRandomRecWithLoop() {
  for (var i = 0; i < 1000; i++) {
    artMaker.drawRandomRec();
  }
}

document.addEventListener("DOMContentLoaded", startApp);
