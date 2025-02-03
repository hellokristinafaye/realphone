var circle = document.getElementById('circle');
var upBtn = document.getElementById('upBtn');
var downBtn = document.getElementById('downBtn');

var rotateValue = circle.style.transform;
var rotateSum;

upBtn.onclick = function () { 
    // this line changes the value of the transform property by -90deg
    rotateSum = rotateValue + "rotate(-90deg)";
    // this line updates the transform property to rotateSum 
    circle.style.transform = rotateSum;
    // this line updates rotateValue to be teh same as rotateSum
    rotateValue = rotateSum
}
downBtn.onclick = function () { 
    // this line changes the value of the transform property by -90deg
    rotateSum = rotateValue + "rotate(90deg)";
    // this line updates the transform property to rotateSum 
    circle.style.transform = rotateSum;
    // this line updates rotateValue to be teh same as rotateSum
    rotateValue = rotateSum
}