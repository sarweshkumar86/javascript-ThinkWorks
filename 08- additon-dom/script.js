// Select elements
let btn = document.getElementById("addBtn");
let result = document.getElementById("result");

// Event
btn.onclick = function () {

  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;

  let sum = Number(n1) + Number(n2);

  result.innerHTML = "Result: " + sum;
};