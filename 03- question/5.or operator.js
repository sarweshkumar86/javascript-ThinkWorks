/*

Write a JavaScript program to check whether a number is fully divisible by 13 or 91.



*/


// Variable
let a = 91;

// Check divisibility
if (a % 13 === 0 || a % 91 === 0) {
  console.log("Number is divisible by 13 or 91");
} else {
  console.log("Number is not divisible by 13 or 91");
}