var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); // c = context

// c.fillStyle = "rgba(255, 0, 0, 0.1)";
// c.fillRect(100, 100, 100, 100); //x, y, w, h

// c.fillStyle = "rgba(255, 0, 0, 0.3)";
// c.fillRect(200, 200, 100, 200);

// c.fillStyle = "rgba(255, 0, 0, 0.5)";
// c.fillRect(300, 300, 100, 300);

// LINE...
// c.beginPath();
// c.moveTo(50, 200);  // x, y
// c.lineTo(300, 100); // x, y
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a4";
// c.stroke();

// for (var i = 0; i < 254; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, Math.random() * 30, 0, Math.PI * 2);
//     var color1 = Math.ceil(i);
//     var color2 = Math.ceil(i/3) + 100;
//     var color3 = Math.ceil(i/4);
//     console.log(`style:  + ${color1} | ${color2} | ${color3}`);
//     c.strokeStyle = "rgba("+ color1 +", "+ color2 +", "+ color3 +", 0." + i + ")";
//     c.stroke();
// }

// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 8; // x velocity
// var dy = (Math.random() - 0.5) * 8;
// var radius = 30;


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();        
    }

    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

var circleArray = [];

for (var i = 0; i < 100; i++) {    
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 2; // x velocity
    var dy = (Math.random() - 0.5) * 2;

    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i=0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();