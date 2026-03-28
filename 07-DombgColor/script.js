// Select buttons
let red = document.getElementById("redBtn");
let black = document.getElementById("blackBtn");
let white = document.getElementById("whiteBtn");

// Events
red.onclick = function () {
  document.body.style.backgroundColor = "red";
};

black.onclick = function () {
  document.body.style.backgroundColor = "black";
};

white.onclick = function () {
  document.body.style.backgroundColor = "white";
};