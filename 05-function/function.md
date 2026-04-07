Function Introduction (Class Script)
In JavaScript, a function is a reusable block of code designed to perform a specific task. 
It is a fundamental building block that allows you to write code once and execute it multiple times .

Key Concepts
Definition & Invocation: You define a function to name it and specify what it does, but the code only runs when it is called (invoked).

Parameters & Arguments: Functions use parameters as placeholders for values they expect to receive. When you call the function, the actual values you pass are called arguments.

Return Values: Use the return statement to send a value back to the code that called the function. If no value is returned, the function defaults to returning undefined.





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