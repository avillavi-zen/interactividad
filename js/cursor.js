let size = 42;
let fill_color = 255;
let stroke_color = 100;
let x = 0, y = 0; friction = 0.1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(60);
}

function draw() {
    updatecursor();
   background (0, 35, 200, 80);
}
function updatecursor() {

      fill(fill_color);
    ellipse(mouseX, mouseY, size, size);
   stroke (stroke_color);
   x += (mouseX - x) * friction;
   y += (mouseY - y) * friction;
    ellipse(x, y, size, size);
}