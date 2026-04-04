// Select elements
let btn = document.getElementById("btn");
let result = document.getElementById("result");

// Event
btn.onclick = function () {

  let p = document.getElementById("principal").value;
  let r = document.getElementById("rate").value;
  let t = document.getElementById("time").value;

  // Formula: SI = (P * R * T) / 100
  let si = (p * r * t) / 100;

  result.innerHTML = "Simple Interest: " + si;
};