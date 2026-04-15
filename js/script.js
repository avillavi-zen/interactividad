let a = 1;
let b = 2;

function suma(a=0, b=0) {
const resultado = a + b;
// aqui se muestra el resultado
console.log(resultado);
}
document.addEventListener("click", function() {
const red = Math.random() * 255;
const green = Math.random() * 255;
const blue = Math.random() * 255;
    const rgb = "rgb(" +red + "," + green + "," + blue + ")";
document.body.style.backgroundColor = rgb;
});
suma();
suma(5, 2);

/*
function resta() {
const resultado = a - b;
// aqui se muestra el resultado
alert(resultado);
}
resta();
resta(5, 2);
*/
