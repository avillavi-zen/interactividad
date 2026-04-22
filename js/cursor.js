let size = 42;
let fill_color = "#a5c3df";
let stroke_color = "#10100f";
let x = 0, y = 0; friction = 0.1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(60);
}

function draw() {
    background(179, 30);
    updatecursor();
}
function updatecursor() {
    //
    x += (mouseX - x) * friction;
   y += (mouseY - y) * friction;
   //
    let amt = map(x, 0, width, 0, 1);
   fill_color = lerpColor(color("#a6c4e0"), color("#da8ca4"), amt);
   fill(fill_color);
    ellipse(mouseX, mouseY, size, size);
   stroke(stroke_color);
    ellipse(x, y, size, size);
}