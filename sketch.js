function setup() {
  const canvasContainer = select('#canvasContainer');
  const canvas = createCanvas(400, 400);
  canvas.parent(canvasContainer);
  windowResized();
  textAlign(CENTER, CENTER); // Установка выравнивания текста по центру
  textSize(50); // Установка размера текста
}

function windowResized() {
  const canvasContainer = select('#canvasContainer');
  resizeCanvas(canvasContainer.width, canvasContainer.height);
}

function draw() {
  background(200);
  fill(50); // Цвет текста 
  text('IINII', width / 2, height / 2); // Размещение текста по центру канваса
}
