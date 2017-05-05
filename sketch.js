
/*slideshow*/

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
/*drawing*/

var redValue = 0;
var greenValue = 0;
var blueValue = 0;
var timer = 400;
var bgColor = 0;
var nextTime = timer;
var x = 0;
var speed = 5;
var x = 20;
var easing = 100;


function setup() {
    createCanvas(500, 500);
    background(0);
    fill(0);
}

function draw() {

  var targetX = mouseX;
x += (targetX - x) * easing;


    redValue = random(255);
    greenValue = random(255);
    blueValue = random(255);

    stroke(redValue, greenValue, blueValue);


    if (mouseIsPressed == false) {
        quad(mouseX, mouseY, height / 100, height / 50);
    }
    else {
        background(bgColor);
        if (millis() > nextTime)
            bgColor += 10;
        nextTime = millis() + timer;

        stroke(255);
        strokeWeight(5);
        noFill();
        ellipse(x, 400, 100, 100);

        x = x + speed;

    }
