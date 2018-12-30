var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); // c = context

c.fillStyle = "rgba(255, 0, 0, 0.1)";
c.fillRect(100, 100, 100, 100); //x, y, w, h

c.fillStyle = "rgba(255, 0, 0, 0.3)";
c.fillRect(200, 200, 100, 200);

c.fillStyle = "rgba(255, 0, 0, 0.5)";
c.fillRect(300, 300, 100, 300);

console.log(canvas);

// LINE...
c.beginPath();
c.moveTo(50, 200);  // x, y
c.lineTo(300, 100); // x, y
c.lineTo(400, 300);
c.strokeStyle = "#fa34a4";
c.stroke();

// Arc / Circle...
// c.beginPath();  // Disconnects the previous path above
// c.arc(300, 300, 30, 0, Math.PI * 2); // x, y, r, startAngle, endAngle, draw conter clockwise bool. // Math.PI * 2 makes it go all the way around.
// c.strokeStyle = 'blue';
// c.stroke();

for (var i = 0; i < 254; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    //var w = 
    c.beginPath();
    c.arc(x, y, Math.random() * 30, 0, Math.PI * 2);
    var color1 = Math.ceil(i);
    var color2 = Math.ceil(i/3) + 100;
    var color3 = Math.ceil(i/4);
    console.log(`style:  + ${color1} | ${color2} | ${color3}`);
    c.strokeStyle = "rgba("+ color1 +", "+ color2 +", "+ color3 +", 0." + i + ")";
    c.stroke();
}
