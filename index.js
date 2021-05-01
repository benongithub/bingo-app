// Import stylesheets
import "./style.css";

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

let blueBallList = [];
let redBallList = [];

let redBalls = 0;
let blueBalls = 0;

let redSelector = document.getElementById("redSelector");
let numRedBallsDisplay = document.getElementById("numRedBalls");

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

redSelector.addEventListener("change", function() {
  redBalls = this.value;
  numRedBallsDisplay.innerText = "Anzahl rote Kugeln: " + redBalls;
});

let blueSelector = document.getElementById("blueSelector");
let numBlueBallsDisplay = document.getElementById("numBlueBalls");

blueSelector.addEventListener("change", function() {
  blueBalls = this.value;
  numBlueBallsDisplay.innerText = "Anzahl blaue Kugeln: " + blueBalls;
});

let drawBallButton = document.getElementById("drawBall");
let drawnBallDisplay = document.getElementById("drawnBall");

drawBallButton.addEventListener("click", function() {
  if (redBalls != 0 && blueBalls != 0) {
    let drawnNumber = getRandomInt(+redBalls + +blueBalls);
    console.log(drawnNumber);

    if (drawnNumber > redBalls) {
      drawnBallDisplay.style.backgroundColor = "blue";
    } else {
      drawnBallDisplay.style.backgroundColor = "red";
    }
  }
});
