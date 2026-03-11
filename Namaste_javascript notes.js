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

// console.log(b);
// console.log(a);
// let a = 20;
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

// 2️⃣ Script Scope vs Global Scope
// Scope	Where it exists
// Script Scope	Variables declared at top of a script file
// Global Scope	Variables attached to the window object

// var a = 10;
// let b = 20;

// var a → becomes window.a

// let b → not attached to window

// window.a  // 10
// window.b  // undefined

// So:

// var → global scope + window object

// let / const → script scope only

// 4️⃣ Simple Definition (Interview Answer)

// Script scope is the scope of variables declared at the top level of a JavaScript file.
// These variables are accessible anywhere in that script but are not necessarily attached
//  to the window object when declared using let or const.

// Are let and const stored in Global Scope?

// ✅ Yes — but not in the same way as var.

// When let and const are declared outside any function, they are stored in the global scope, but they are NOT attached to the window object.

// 1️⃣ Example
// let a = 10;
// const b = 20;
// var c = 30;

// console.log(window.c); // 30
// console.log(window.a); // undefined
// console.log(window.b); // undefined

// 2️⃣ Internal Memory (How JavaScript stores it)

// When JavaScript runs:

// Global Execution Context is created

// It has two parts

// 1️⃣ Global Object (window)
// 2️⃣ Script / Lexical Environment

// Global Execution Context
// │
// ├── Global Object (window)
// │      var variables
// │
// └── Script Scope
//        let
//        const
// let and const are stored in the global lexical environment (script scope), not in the window object,
//  while var is stored in the global object.

// avaScript Global Execution Context (GEC)

// When a JavaScript file runs, the engine first creates the Global Execution Context.

// It happens in 2 phases:

// 1️⃣ Memory Creation Phase
// 2️⃣ Execution Phase

// 1️⃣ Global Execution Context Structure
// Global Execution Context
// │
// ├── Global Object (window in browser)
// │
// ├── Lexical Environment
// │     ├── Environment Record
// │     └── Outer Environment Reference
// │
// └── this keyword
// 2️⃣ Example Code
// var a = 10;
// let b = 20;
// const c = 30;

// function add(x, y) {
//   return x + y;
// }

// console.log(a);

// 3️⃣ Phase 1 — Memory Creation Phase (Hoisting)

// Before executing the code, JavaScript scans the entire code and allocates memory.

// Memory Creation Diagram
// Memory Phase
// ────────────────────────

// window (Global Object)
// │
// ├── a : undefined
// ├── add : function()

// Script Scope / Lexical Environment
// │
// ├── b : <uninitialized> (TDZ)
// └── c : <uninitialized> (TDZ)
// Explanation
// Variable	Memory Allocation
// var a	stored in window object → undefined
// let b	stored in script scope but not initialized
// const c	stored in script scope but not initialized
// function add()	full function stored in memory
// 4️⃣ Temporal Dead Zone (TDZ)

// From the start of the scope until initialization, let and const stay in Temporal Dead Zone.

// Example:

// console.log(b); // ❌ ReferenceError
// let b = 20;

// Because b is in TDZ.

// Scope Start
//    │
//    │   TDZ
//    │──────────────
//    │
// let b = 20
// 5️⃣ Phase 2 — Execution Phase

// Now JavaScript runs the code line by line.

// Execution Diagram
// Execution Phase
// ────────────────────────

// var a = 10
// let b = 20
// const c = 30

// Memory now becomes:

// window
// │
// ├── a : 10
// ├── add : function()

// Script Scope
// │
// ├── b : 20
// └── c : 30
// 6️⃣ Complete Flow Diagram
// Step 1: Global Execution Context Created

//         GEC
//          │
//  ┌───────────────┬───────────────┐
//  │ Global Object │ Lexical Env   │
//  │   (window)    │               │
//  └───────────────┴───────────────┘

// Step 2: Memory Creation Phase

// window:
//    a = undefined
//    add = function()

// script scope:
//    b = TDZ
//    c = TDZ

// Step 3: Execution Phase

// a = 10
// b = 20
// c = 30

// 1️⃣ Lexical Environment (What it means)

// A Lexical Environment is the internal structure JavaScript uses to store variables and manage scope.

// Every execution context has one.

// Execution Context
// │
// ├── Variable Environment
// ├── Lexical Environment
// └── this

// The Lexical Environment has two parts.

// 2️⃣ Structure Diagram
// Lexical Environment
// │
// ├── Environment Record
// │       (stores variables & functions)
// │
// └── Outer Environment Reference
//         (points to parent scope)

// 3️⃣ Environment Record

// The Environment Record stores all variables and functions of the current scope.

// Example:

// let a = 10;
// const b = 20;

// function greet() {
//   let c = 30;
// }
// Global Environment Record
// Environment Record
// │
// ├── a : 10
// ├── b : 20
// └── greet : function

// So it is basically a storage area for variables.

// 4️⃣ Outer Environment Reference

// This is a reference (link) to the parent scope.

// It helps JavaScript find variables in outer scopes.

// Example:

// let a = 10;

// function test() {
//   console.log(a);
// }

// test();
// Scope Lookup Diagram
// Global Lexical Environment
// │
// └── Environment Record
//       a = 10
//       test = function

//         ▲
//         │ (Outer Environment Reference)

// Function Lexical Environment
// │
// └── Environment Record
//       (no 'a' here)

// When console.log(a) runs:

// 1️⃣ JS checks current environment record
// 2️⃣ a not found
// 3️⃣ JS follows outer environment reference
// 4️⃣ Finds a in global environment

// Output:

// 10

//Lexical Environment is an internal Javascript struture that stores variable and maintains a reference to its
// outer scope. It consists of an Environment Record (which stores varibles ) and an outer Environment Reference
// (which links to the parent scope)

// Variable Shadowing in JavaScript

// Variable shadowing happens when a variable declared in an inner scope has the same name as
// a variable in an outer scope.
// The inner variable hides (shadows) the outer variable inside that scope.

//

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// console.log(z);
// //

// A closure is when a function remembers variables from its lexical scope
//  even after the outer
//  function has finished execution.

//

// for (var i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// 1️⃣ Output
// 6
// 6
// 6
// 6
// 6

// After 1 second, it prints 6 five times.

// 2️⃣ Why This Happens
// Step 1 — var is Function Scoped

// var i creates one single variable for the entire loop.

// i → same variable used in all iterations
// Step 2 — Loop Execution

// The loop runs very fast.

// i = 1
// i = 2
// i = 3
// i = 4
// i = 5
// i = 6  ← loop stops

// By the time setTimeout runs, the loop is already finished.

// So i = 6.

// Step 3 — setTimeout Callback

// Each callback prints the same i.

// console.log(i)

// Since i is now 6, all callbacks print 6.

// 3️⃣ Timeline Diagram
// Loop execution (immediate)

// i=1 → timer set
// i=2 → timer set
// i=3 → timer set
// i=4 → timer set
// i=5 → timer set

// Loop ends → i = 6

// After 1 second

// console.log(i)
// console.log(i)
// console.log(i)
// console.log(i)
// console.log(i)

// Output:

// 6 6 6 6 6
// 4️⃣ Memory Diagram
// Global Scope
// │
// └── i = 6

// All callbacks reference the same i.

// 5️⃣ Correct Solution (Using let)
// for (let i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// Output

// 1
// 2
// 3
// 4
// 5
// Why?

// let creates a new block-scoped variable for every loop iteration.

// Diagram:

// Iteration 1 → i = 1
// Iteration 2 → i = 2
// Iteration 3 → i = 3
// Iteration 4 → i = 4
// Iteration 5 → i = 5

// Each setTimeout gets its own i.

// 6️⃣ Another Solution (Using Closure)
// for (var i = 1; i <= 5; i++) {
//   function close(x) {
//     setTimeout(function () {
//       console.log(x);
//     }, 1000);
//   }
//   close(i);
// }

// Output

// 1
// 2
// 3
// 4
// 5

// Here x creates a new copy of i each time.
// for (let i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// for (var i = 1; i <= 5; i++) {
//   function close(x) {
//     setTimeout(function () {
//       console.log(x);
//     }, 1000);
//   }
//   close(i);
// }

// 1️⃣ Global Execution Context Created

// When the script starts:

// Global memory becomes:

// Global Memory
// │
// ├── i : undefined
// └── close : function
// 2️⃣ Loop Starts
// i = 1

// Condition:

// 1 <= 5 → true

// Now this line runs:

// close(i)

// So:

// close(1)
// 3️⃣ Function close(1) Executes

// A new execution context is created.

// Inside close:

// x = 1

// Memory of close:

// close Execution Context
// │
// └── x = 1

// Now this runs:

// setTimeout(function () {
//   console.log(x);
// }, 1000);
// What happens internally

// setTimeout goes to Web API

// Timer starts (1000 ms)

// The callback function is stored.

// Important:

// The callback forms a closure with x.

// callback
// │
// └── closure → x = 1

// Now close() finishes.

// But x stays in memory because the callback still needs it.

// 4️⃣ Second Loop Iteration
// i = 2

// Call:

// close(2)

// New execution context:

// close Execution Context
// │
// └── x = 2

// New timer created.

// Closure:

// callback
// │
// └── closure → x = 2
// 5️⃣ Same Process for All Iterations
// close(3) → closure x = 3
// close(4) → closure x = 4
// close(5) → closure x = 5

// Timers created:

// Timer 1 → x = 1
// Timer 2 → x = 2
// Timer 3 → x = 3
// Timer 4 → x = 4
// Timer 5 → x = 5

// Loop finishes:

// i = 6
// 6️⃣ After 1 Second (Event Loop)

// Timers complete.

// Callbacks move to Callback Queue.

// Callback Queue
// │
// ├── console.log(1)
// ├── console.log(2)
// ├── console.log(3)
// ├── console.log(4)
// └── console.log(5)

// Event Loop pushes them to Call Stack one by one.
// Each callback has its own closure.

// 9️⃣ Why This Works

// Because close(x) creates a new variable x every iteration.

// So every callback remembers its own copy.

// 🔑 Interview One-Line Answer

// The function close(x) creates a new execution context for every iteration.
// The callback passed to setTimeout forms a closure over x,
// preserving its value for each timer,
// so the correct numbers (1–5) are printed.

// Relationship Between Garbage Collection and Closures in JavaScript

// Closures and garbage collection are closely related because closures
// can keep variables in memory even after a function finishes execution.

// 1️⃣ What Garbage Collection Does

// JavaScript automatically removes unused memory.

// This process is called Garbage Collection (GC).

// Rule used by GC:

// If something is NOT reachable → remove it from memory

// Example:

// function test() {
//   let a = 10;
// }

// test();

// After test() finishes:

// a is not used anywhere

// // So Garbage Collector deletes it.
// 2️⃣ What Happens with Closures

// Closures prevent garbage collection of variables that are still needed.

// Example:

// function outer() {
//   let a = 10;

//   function inner() {
//     console.log(a);
//   }

//   return inner;
// }

// const fn = outer();

// Here:

// outer() finishes execution

// Normally its variables should be deleted

// But inner() still needs a.

// So JavaScript keeps a in memory.

// When a closure is created, the inner function remembers variables from the outer function.

// Because the inner function still needs those variables, JavaScript keeps them in memory.

// So the Garbage Collector cannot delete them.

// One-line Simple Answer (Interview)

// Closures keep outer variables in memory. Because they are still used by the inner
//  function,
//  the garbage collector cannot remove them.

//Closures can increase memory usage because variables from outer functions stay
//  in memory. This may cause memory leaks, higher memory consumption,
// and sometimes make code harder to debug.

//////anonymous function

// An anonymous function in JavaScript is a function without a name.

// It is usually used inside another function, assigned to a variable, or passed as a callback.

// 1️⃣ Simple Definition

// 👉 An anonymous function is a function that has no function name.

// Example:

// function () {
//   console.log("Hello");
// }

// This function has no name, so it is called an anonymous function.

// But normally we store it in a variable or use it directly.

// 2️⃣ Anonymous Function Stored in a Variable
// let greet = function () {
//   console.log("Hello");
// };

// greet();
// Output
// Hello

// Here:

// function() → anonymous function

// greet → variable holding the function

// 3️⃣ Anonymous Function as Callback

// Example with setTimeout:

// setTimeout(function () {
//   console.log("Hello after 2 seconds");
// }, 2000);

// Explanation:

// function(){} → anonymous function

// passed directly to setTimeout

// 4️⃣ Anonymous Function in Event
// button.addEventListener("click", function () {
//   console.log("Button clicked");
// });

// Here the function runs when the button is clicked.

// Closures + event listeners can cause memory leaks in JavaScript because the closure keeps variables in memory, and the event listener keeps a reference to that closure. As long as that reference exists, Garbage Collection cannot remove those objects.

// 1️⃣ Step-by-Step Idea

// An event listener is attached to a DOM element.

// The listener function forms a closure and captures variables from its outer scope.

// The browser stores a reference to that function.

// Even if the DOM element is removed, the reference may still exist.

// Because of the reference, Garbage Collector cannot free the memory.

// This leads to a memory leak.

//

// The JavaScript Engine executes JavaScript code in several internal steps.
//  A simple way to understand it is:

// 1️⃣ Parsing (Reading the Code)

// The engine first reads your JavaScript code.

// It checks for syntax errors.

// Example:

// let a = 10;
// let b = 20;
// console.log(a + b);

// The engine converts this code into tokens and then builds a structure called an AST (Abstract Syntax Tree).

// Example AST idea:

//       +
//      / \
//     a   b
// 2️⃣ Compilation

// After parsing, the engine converts the code into bytecode.

// Modern engines like Google V8 JavaScript engine (used in Google Chrome and Node.js)
//  use Just-In-Time (JIT) compilation.

// Meaning:

// Code is compiled during execution, not before.

// Flow:

// JS Code → AST → Bytecode
// 3️⃣ Execution

// Now the JavaScript engine executes the bytecode.

// During execution:

// Execution Context is created

// Memory allocation happens

// Variables and functions are stored

// Example:

// var x = 5;
// function add(a, b){
//   return a + b;
// }
// add(2,3);

// The engine creates:

// Global Execution Context

// Function Execution Context

// 4️⃣ Call Stack

// JavaScript uses a Call Stack to track function execution.

// Example:

// function one(){
//   two();
// }

// function two(){
//   console.log("Hello");
// }

// one();

// Call stack flow:

// Global()
// one()
// two()
// console.log()

// After execution:

// two() removed
// one() removed
// Global remains
// 5️⃣ Garbage Collection

// Unused memory is removed automatically.

// Example:

// let obj = {name: "John"};
// obj = null;

// The object becomes unreachable → Garbage Collector removes it.

// 🔁 Complete JavaScript Engine Flow
// 1. JS Code
//       ↓
// 2. Parsing
//       ↓
// 3. AST (Abstract Syntax Tree)
//       ↓
// 4. Bytecode Generation
//       ↓
// 5. Execution
//       ↓
// 6. Call Stack Handling
//       ↓
// 7. Garbage Collection

// ✅ Simple one-line answer for interviews:

// The JavaScript engine first parses the code into an AST,
//  compiles it into bytecode using JIT compilation, executes
//  it using the call stack,
//  and finally removes unused memory through garbage collection.

// When JavaScript runs code, it first creates an Execution Context.
// An Execution Context is the environment where JavaScript code is evaluated and executed.

// 1️⃣ When is Execution Context Created?

// Execution context is created when:

// Global code runs

// A function is called

// eval() is executed (rarely used)

// 2️⃣ Types of Execution Context
// 1. Global Execution Context (GEC)

// Created when the JS program starts.

// Only one global execution context exists.

// It creates:

// Global Object (window in browser)

// this keyword

// Example:

// var a = 10;

// function test(){
//   console.log("Hello");
// }

// Here:

// Global execution context is created first.

// 2. Function Execution Context (FEC)

// Created whenever a function is called.

// Example:

// function add(a, b){
//   return a + b;
// }

// add(2,3);

// When add() runs:

// A new execution context is created.

// 3️⃣ Two Phases of Execution Context

// Every execution context has two phases.

// Phase 1️⃣ Memory Creation Phase (Creation Phase)

// Memory is allocated for:

// Item	What happens
// Variables	stored as undefined
// Functions	stored completely
// this	assigned

// Example:

// var x = 10;

// function greet(){
//   console.log("Hi");
// }

// Memory phase result:

// x → undefined
// greet → function definition
// Phase 2️⃣ Execution Phase

// Now JavaScript runs the code line by line.

// Example:

// var x = 10;
// console.log(x);

// Steps:

// x = undefined  (memory phase)

// Execution phase:
// x = 10
// console.log(10)

// Output:

// 10
// 4️⃣ Execution Context in Call Stack

// Example:

// function one(){
//   two();
// }

// function two(){
//   console.log("Hello");
// }

// one();

// Call stack flow:

// Global()
// ↓
// one()
// ↓
// two()
// ↓
// console.log()

// Then removed:

// console.log() removed
// two() removed
// one() removed
// 5️⃣ Structure of Execution Context

// Each execution context contains:

// Variable Environment

// Lexical Environment

// This Binding

// Execution Context
//    │
//    ├── Variable Environment
//    ├── Lexical Environment
//    └── this binding

// ✅ Simple interview answer

// Execution context is the environment where JavaScript code runs.
//  It is created in two phases: memory creation phase (variables stored as undefined and functions stored fully) and execution phase
// (code executed line by line).
//;;

// In JavaScript, a Promise has two important internal properties:

// Promise State

// Promise Result

// 1️⃣ Promise State

// The state tells what stage the promise is in.

// A promise has 3 states:

// State	Meaning
// Pending	Initial state (operation not finished yet)
// Fulfilled	Operation completed successfully
// Rejected	Operation failed
// let promise = new Promise((resolve, reject) => {
//   resolve("Data received");
// });

// promise.then((result) => {
//   console.log(result);
// });

//

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 success"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   // setTimeout(() => resolve("P2 success"), 1000);
//   setTimeout(() => reject("P2 fail"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 success"), 2000);
// });
// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 success"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 success"), 1000);
//   //  setTimeout(() => reject("P2 fail"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 success"), 2000);
// });
// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 success"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 success"), 1000);
//   //   setTimeout(() => reject("P2 fail"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   //setTimeout(() => resolve("P3 success"), 2000);
//   setTimeout(() => reject("P3 fail"), 2000);
// });
// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P1 fail"), 2000);
});
const p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P2 success"), 1000);
  setTimeout(() => reject("P2 fail"), 1000);
});
const p3 = new Promise((resolve, reject) => {
  //setTimeout(() => resolve("P3 success"), 2000);
  setTimeout(() => reject("P3 fail"), 5000);
});
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });

///fdsffsdfffddfdfdfdfdfffdffffsdfsdfdfdfdfffsfdsfdfffffffdfffffffffffdffffsdfdsffsdffsdfsdfsdffsdfdfdfdffffsdfsdfsdffdfdsfdfffddfffffdffffdsfdfdsfdfdfdfdfdfdfdffffsdgfgfdgfsfdfdfdfffdsfdsfdfdffffffffsdf
