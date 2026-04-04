/*

Write a JavaScript program to calculate student grade based on marks:

Marks >= 80 → Grade A++
Marks >= 60 → Grade A
Marks >= 45 → Grade B
Marks >= 33 → Grade C
Marks < 33 → Fail


*/


// Variable
let marks = 30;

// Grade calculation
if (marks >= 80) {
  console.log("Grade A++");
} 
else if (marks >= 60) {
  console.log("Grade A");
} 
else if (marks >= 45) {
  console.log("Grade B");
} 
else if (marks >= 33) {
  console.log("Grade C");
} 
else {
  console.log("Fail");
}