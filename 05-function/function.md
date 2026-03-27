Function Introduction (Class Script)

“Suppose you want to perform the same task again and again…
like adding two numbers.”

“Will you write the same code every time? 🤔
No… we use something called a function.”

“A function is a block of code that performs a specific task,
and we can reuse it multiple times.”

🧠 Syntax (Simple)
function functionName() {
  // code
}
💻 Example 1: Simple Function
function greet() {
  console.log("Hello Students");
}

// calling function
greet();
🎯 Explanation

We create a function, then we call it
It runs only when we call it

💻 Example 2: Function with Parameters
function add(a, b) {
  console.log(a + b);
}

add(5, 3);
🎯 Explanation

a, b = parameters
5, 3 = arguments

💻 Example 3: Function with Return
function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);
console.log(result);