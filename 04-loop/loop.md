Loop Introduction (Fun & Simple Style)

“Imagine you want to print numbers from 1 to 100…
Will you write 100 lines of code? 🤔
No… that’s not smart!”

“To solve this problem, we use something called a loop.”

“A loop is used to repeat a statement again and again
until a condition becomes false.”


...........................................................

Explain Structure

“Every loop has 3 important parts:”

👉 Initialization (where we start)
👉 Condition (when to stop)
👉 Increment/Decrement (how it moves)



“Think like this:
You start counting from 1 (initialization)
You stop at 10 (condition)
And every time you add 1 (increment)”


.................................................


hen Show Code
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
🎤 Explain Line by Line

“i = 1 → starting point
i <= 5 → condition
i++ → increase by 1”



.......................................................



1. Print 1 to 10

👉 Question: Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
🧠 2. Print Even Numbers

👉 Question: Print even numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
🧠 3. Reverse Counting

👉 Question: Print numbers from 10 to 1

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
🧠 4. Table of 5

👉 Question: Print table of 5

for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}
🧠 5. Sum of Numbers

👉 Question: Find sum from 1 to 5

let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}

console.log("Sum =", sum);





......................................................


While Loop Introduction


Syntax (Simple)
while (condition) {
  // code
}
💻 Example 1: Print 1 to 10
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}



..........................................

do...while Loop Introduction

Syntax
do {
  // code
} while (condition);
💻 Example 1: Print 1 to 5
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

