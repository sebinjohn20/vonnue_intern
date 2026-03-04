// <!-- Good 🔥 this is a core JavaScript interview concept.

// 🧠 Execution Context

// Whenever JavaScript runs code, it creates an Execution Context.

// Every execution context has 2 main parts:

// 1️⃣ Memory Creation Phase (Creation Phase)

// Also called:

// Variable Environment

// Hoisting Phase

// 👉 Happens before code execution

// What happens here?

// JavaScript:

// Allocates memory for variables

// Allocates memory for functions

// Sets initial values

// Example
// console.log(a);
// var a = 10;

// function test() {
//   console.log("Hello");
// }
// During Memory Creation:
// Identifier	Memory Allocation
// a	undefined
// test	Full function stored

// So internally:

// a = undefined
// test = function() { console.log("Hello"); }
// 2️⃣ Code Execution Phase

// Now JavaScript executes code line by line.

// Continuing the example:

// console.log(a); // undefined
// a = 10;

// So:

// First prints undefined

// Then assigns 10 to a

// 🔥 Important Difference
// Function Declaration
// function test() {}

// Stored fully in memory phase.

// Function Expression
// var test = function() {}

// During memory phase:

// test = undefined

// Function is assigned only in execution phase.

// 🧠 Types of Execution Context

// Global Execution Context (GEC)

// Function Execution Context (FEC)

// Eval Execution Context (rare) -->

// <!--

// Step 1: Global Execution Context Created

// Memory Phase:

// a → undefined
// add → function

// Execution Phase:

// a = 5
// Step 2: Function Execution Context Created

// When add() runs:

// Memory Phase:

// b → undefined

// Execution Phase:

// b = 10
// console.log(15) -->

/// Every thing in javascript happens inside an Execution context
//
// getName();
// console.log(x);
// console.log(getName);

// function getName() {
//   console.log("Sebin");
// // }

// 🧠 What Is window?

// window is the global object in the browser.

// It represents:

// The browser window (tab) where your JavaScript is running.

// 🔥 Important Rule

// In the browser:

// var a = 10;

// console.log(window.a); // 10

// Why?

// Because:

// Global variables declared with var become properties of window.

//🧠 Lexical Environment (Simple English)

// Lexical Environment means:

// The place where JavaScript keeps variables and remembers where they
// were created.

// In simple words:

// 👉 It is a box that stores variables and functions
// 👉 And it also remembers its parent scope

// 📦 Think Like This

// When you write code:

// let name = "John";

// JavaScript stores it inside a Lexical Environment box.

// That box contains:

// Variables

// Functions

// Reference to parent environment

// 🏗 Example 1
// function greet() {
//   let message = "Hello";
//   console.log(message);
// }

// greet();

// When greet() runs:

// JavaScript creates a new lexical environment.

// Inside it:

// message = "Hello"

// After function finishes → that environment is destroyed.

// Here’s a very simple example 👇

// let a = 10;

// function test() {
//   let b = 20;
//   console.log(a);
// }

// test();
// 🧠 What happens?

// Global lexical environment stores → a = 10

// When test() runs, a new lexical environment is created

// Inside test, we have → b = 20

// JavaScript looks for a

// Not inside test

// So it looks in the parent (global) scope

// Finds a = 10

// Output:

// 10
// 💡 Simple Meaning

// Each function gets its own box (lexical environment).

// If a variable is not inside the box,
// JavaScript checks the parent box.

// That checking process is called scope chain.

// lexical eniviroment is  a local memory + lexical eniviroment of parent

console.log(b);
console.log(a);
let a = 20;
// var b = 100;

// Good question 👍 Let’s make it very simple.

// 🌍 var vs let in Global Scope
// 🔹 var
// var a = 10;

// Stored in global memory

// Also attached to the window object (in browser)

// console.log(window.a); // 10 ✅

// So we say:

// var becomes part of the global object.

// 🔹 let
// let b = 20;

// Stored in global scope

// ❌ BUT not attached to window

// console.log(window.b); // undefined ❌

// So we say:

// let is stored in global lexical environment, not inside global object.

// 🧠 Important Concept

// In browser, global execution context has 2 parts:

// 1️⃣ Global Object (window) → stores var
// 2️⃣ Script scope (lexical environment) → stores let and const

// 🎯 Interview Simple Answer

// var is stored in global object (window), but let is stored in script scope and not attached to window.

//gfghffghghgfhgfghfghfghfghfghhgfghffghfhgfhgfghhgfhfhfggfhfhgfhgfhghgfgfhfghfghgfhfghfggfhgfhfgfghfghfghfghfgfghffghfghghfghffghgfhgfhfhghghfghgfhgfhfghgffghfghfghfghghffghhgfhgfhghgfhggfhhgfhgfhghgfghghf
