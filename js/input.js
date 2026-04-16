let title = document.querySelector('h1');
let inputtext = document.getElementById('input-text');
let inputcolor = document.getElementById('input-color');
let inputBackgroundColor = document.getElementById('input-background-color');
inputtext.addEventListener('input', function () {
    const value = inputtext.value;
    title.innerText = value;
})
inputcolor.addEventListener('input', function () {
    const value = inputcolor.value;
    title.style.color = value;
    document.body.style.color = value;
})
inputBackgroundColor.addEventListener('input', function () {
    const value = inputBackgroundColor.value;
    backgroundColor = value;
    document.body.style.backgroundColor = value;
})