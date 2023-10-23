let interval;
function random_bg_color() {
var x = Math.floor(Math.random() * 256);
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);
var bgColor = "rgb(" + x + "," + y + "," + z + ")";
document.body.style.background = bgColor;
}
let colorchanger = document.body.style.background;
const start = document.getElementById('start');
const stop = document.getElementById('stop');
start.addEventListener('click',function() {
   interval = setInterval(function () {
    colorchanger = random_bg_color();
   },100); 
});
stop.addEventListener('click',function() {
    clearInterval(interval);
    interval = null;
    document.body.style.background = 'white';
});