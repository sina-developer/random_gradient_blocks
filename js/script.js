let cubes;
let col = 80;
let blockWidth = width / col;
let blockHeight = blockWidth;
let row = parseInt(height / blockHeight) + 1;
let shapes = {};

cubes = [...Array(row)].map((k, i) => {
  return [...Array(col)].map((cell, j) => {
    return;
  });
});

function setup() {
  for (let i = 0; i < cubes.length; i++) {
    const row = cubes[i];
    for (let j = 0; j < row.length; j++) {
      let block = new Block(j * blockWidth, i * blockHeight, "#000000");
      block.setup();
      row[j] = block;
    }
  }
}

function draw() {
  for (let i = 0; i < cubes.length; i++) {
    const row = cubes[i];
    for (let j = 0; j < row.length; j++) {
      row[j].checkIntersects();
      row[j].draw();
    }
  }
}

// draw();
function start() {
  setup();
  draw();
  //   setInterval(draw, 1000 / 60);
}
