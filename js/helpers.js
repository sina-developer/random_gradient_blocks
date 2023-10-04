function drawRect(x, y, w, h, color = "red") {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function drawCircle(r, x, y) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI, false);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#fff";
  ctx.stroke();
}

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let getPerlin2D = (x, y) => {
  return noise.perlin2(x, y);
};

let getPerlin3D = (x, y, z) => {
  return noise.perlin3(x, y, z);
};

function mapValues(n, start1, stop1, start2, stop2, withinBounds) {
  const newval = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newval;
  }
  if (start2 < stop2) {
    return constrain(newval, start2, stop2);
  } else {
    return constrain(newval, stop2, start2);
  }
}

const constrain = (n, low, high) => {
  return Math.max(Math.min(n, high), low);
};

function addAlpha(color, opacity) {
  // coerce values so ti is between 0 and 1.
  var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

const hasIntersection = (x, y, width, height) => {
  let cx = mouseX;
  let cy = mouseY;
  let cr = mouse_radius;
  const distX = Math.abs(cx - x - width / 2);
  const distY = Math.abs(cy - y - height / 2);

  if (distX > width / 2 + cr) {
    return false;
  }
  if (distY > height / 2 + cr) {
    return false;
  }

  if (distX <= width / 2) {
    return true;
  }
  if (distY <= height / 2) {
    return true;
  }

  const Δx = distX - width / 2;
  const Δy = distY - height / 2;
  return Δx * Δx + Δy * Δy <= cr * cr;
};

function checkIntersects(
  block,
  onIntersects = (block) => {},
  onNotIntersects = (block) => {}
) {
  if (hasIntersection(block.x, block.y, block.w, block.h)) {
    onIntersects(block);
  } else {
    onNotIntersects(block);
  }
}
