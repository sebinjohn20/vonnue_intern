///  ------------------Closure--------------------

/// A function remembers varibles from its outer function even after
//  the outer fuction has finished executing

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }
//   return inner;
// }
// const counter = outer();
// counter();
// counter();

// Why 1, 2, 3?

// Because:

// Inner function remembers count

// It does NOT reset

// That memory = closure

// function createBankAccount(balance) {
//   return {
//     deposit(amount) {
//       balance += amount;
//       console.log("Balance", balance);
//     },
//     withdraw(amount) {
//       balance -= amount;
//       console.log("balance", balance);
//     },
//   };
// }
// const account = createBankAccount(1000);
// account.deposit(500);
// account.withdraw(200);
//console.log(account.balance); /// Undefined

//balance is private you cannot acces it directly
// only functions inside can access it  because of closure

///---------we use Closure------------

// 1-----Data Privacy

///2--------Remembering Data

// Closure helps  a fuction remembers previous state
// Example:

// Like a game score

// Like cart items in shopping

// Like login attempts

//3----- SetTimeout/setInterval

///-> closures help remember varibles inside async fuctions
// for (var i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// Step-by-step:

// 1️⃣ var is function-scoped, NOT block-scoped.
// There is only one single i variable.

// 2️⃣ The loop runs fast:

// i = 1
// i = 2
// i = 3
// i = 4 (loop stops)

// 3️⃣ setTimeout runs after 1 second.

// 4️⃣ By that time, loop is finished and i = 4.

// 5️⃣ All 3 functions share the same i (closure).

// ✅ How To Fix It?
// ✔️ Method 1: Use let (Best Way)
// for (let i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// Output:
// 1
// 2
// 3

// 👉 Why?
// let creates a new i for every loop iteration.
/// var--> one Shared variable----> prints 4 4 4
/// let---> New variable each time ---> prints 1 2 3

// 🔥 Interview One-Line Answer

/// Because var is function scoped all callback shared the same varible.When setTimeout runs, the loop has already finished and i become 4

// 1. What Happens Without Closure?

// Let’s remove closure concept.

// function counter() {
//   let count = 0;
//   count++;
//   console.log(count);
// }

// counter(); // 1
// counter(); // 1
// counter(); // 1

// Why always 1?

// Because:

// Every time counter() runs

// count is created again

// It resets to 0

// 👉 No memory between calls.

/////*************************      Hosting  ********************** */

// Hosting is javaScript's behavior where declarations are moved to the top of their scope
// during the memory creation phase before code execution

// ⚠️ Important:
// JavaScript has 2 phases when running code:

// 1️⃣ Memory Creation Phase
// 2️⃣ Code Executiodfn Phase

//🧠 Phase 1: Memory Creation Phase

// Before executing code
///  1->Variables are stored in memory
//  2-> Functions are stored in memory

//this is where hoisting happens

// console.log(a);
// var a = 10;

// What JS does internally:
// 🧠 Memory Phase:
// a → undefined

// Execution Phase:
// console.log(a); → undefined
// a = 10;
// 👉 Why not error?

//  because a exists in memory (but value not assigned yet)

//Example 2: let Hoisting (Temporal Dead Zone)
// console.log(b);
// let b = 20;
// b → uninitialized (TDZ)
// Varible exists but cannot be accessed

// ⚡ Execution Phase:

// When console.log(b) runs → ❌ ReferenceError
///----  What is TDZ---------------

//TDZ is the time between when a variable is hosited and when it is actually intialized
//during this time,you cannot access the variable if you try ReferenceError
// Why TDZ Exists?

// TDZ only applies to:

// let

// const

// NOT to:

// var

// Because let and const are hoisted but NOT initialized.

// Scope Starts
//    ↓
// a is hoisted (but uninitialized)
//    ↓
// ❌ Access here → ReferenceError (TDZ)
//    ↓
// let a = 10   ← TDZ ends here
//    ↓
// ✅ Now you can use a

// 🔥 Function Hoisting (Very Important)
// ✅ Function Declaration
// greet();

// function greet() {
//   console.log("Hello");
// }

/// ------------ what is a class------------------

/// A class is a blueprint to create objects

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log("Hi ,I am " + this.name);
//   }
// }
// const p1 = new Person("Sebin", 25);
// p1.greet();

///--------Constructor-------

/// constructor() is a special method
//  Runs automatically when object is created
// used to initialize values

///    -------------Inheritance (Very Important)--------

// class Animal {
//   speak() {
//     console.log("animal makes sound");
//   }
// }
// class Dog extends Animal {
//   brak() {
//     console.log("Dog barks");
//   }
// }
// const d = new Dog();
// d.speak();
// d.brak();

////////// ------------------ Super() method-----------------

// The super keyword is used in class inheritance

// it allows a child class to.
// ✅ Call the parent class constructor

// ✅ Access parent class methods

// class Parent {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Child extends Parent {
//   constructor(name, age) {
//     super(name);   // 👈 Call parent constructor
//     this.age = age;
//   }
// }

// const obj = new Child("John", 25);
// console.log(obj);

///  ************   Why Do We Use Classes in JavaScript? *******

// 1️⃣ Organize code
// 2️⃣ Create multiple similar objects
// 3️⃣ Reuse code (Inheritance)
// 4️⃣ Make code clean & readable
// 5️⃣ Handle complex applications

//*******************🚀 call(), apply(), and bind() in JavaScript

// All three are used to control the value of this.

/// Why do we need them

// In javascript:
// this depends on how a function is called
// sometimes we want to manually set this
// That’s where:

// call()
// apply()
// bind()

///************* 🔥 Basic Example********** */

// const person = {
//   name: "Sebin",
// };
// function greet(age) {
//   console.log(` Hi , I am  ${this.name}  and My age ${age}`);
// }

//  1️⃣ call()

//  Call functions immediately
//  Arguments passed normally (comma separated)

///  greet.call(person, 25);

// 2️⃣ apply()

// 👉 Calls function immediately
// 👉 Arguments passed as array
//  3️⃣ bind()

// 👉 Does NOT call immediately
// 👉 Returns a new function
// 👉 You call it later

// const newFunc = greet.bind(person, 25);
// newFunc();

// function greet(age, city, country) {
//   console.log(
//     `Hi, I am ${this.name}, ${age} years old, from ${city}, ${country}`
//   );
// }

// const person = { name: "John" };

// greet.apply(person, [25, "New York", "USA"]);

//  What is Lexical Scope?

// A function remembers where it was written, not where it was called.
//A function can access variables from where it was written in the code.

// let x = 10;
// function print() {
//   console.log(x);
// }
// function test() {
//   let x = 20;
//   print();
// }
// test();
// ❓ What will it print?

// It prints:

// 10

// NOT 20 ❌

// Because print() was  written in global scope where x=10 so when it runs,
//  it looks for x  in the place where it was created it does not care
// when it  is called
// Think Like This

// Imagine code structure like a tree:

// Global
//  ├── x = 10
//  ├── print()
//  └── test()
//       └── x = 20

// print() belongs to Global.

// So it always uses global variables.

// 🚀 What is an Arrow Function?

//Arrow functions are a shorter syntax for writing functions and
// they do not have their own this; instead, they inherit this from their surrounding scope

// In a regular function, this depends on how the function is called.

// const person = {
//   name: "John",
//   greet() {
//     console.log(this.name);
//   },
// };

// person.greet();

// Here:

// greet() is called using person

// So this = person

// 👉 Regular function this is dynamic (decided at call time).

// 🔥 Now Arrow Function
// const person = {
//   name: "John",
//   greet: function () {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 1000);
//   }
// };

// person.greet();

// Output:

// John

// why?
// because arrow function
// 👉 Does NOT create its own this
// 👉 It takes this from surrounding scope
// This is called:

// 🧠 Lexical this

// Lexical = based on where written.

// Arrow function’s this is decided by:

// Where it is defined
// NOT
// How it is called

// 📊 Big Difference Table
// Regular Function	Arrow Function
// Has its own this	No own this
// this depends on call	this depends on where written
// Dynamic this	Lexical this

// const obj = {
//   name: "John",
//   greet: () => {
//     console.log(this.name);
//   },
// };

// obj.greet();

// Why undefined?

// Because:

// Arrow was written in global scope

// Global this = window

// window.name usually undefined

// So it prints:

// normal()  ---> this = obj
//     |
//     ---> arrow function (no own this)
//             |
//             ---> uses parent this (obj)

// ⚡ Very Important Rule

// Normal function:

// this depends on how function is called

// Arrow function:

// this depends on where function is written

///////////////******************  CallBack    *****************/

///A function passed as an argument to another function.

// function greet(name, callback) {
//   console.log(`Hi ${name}`);
//   callback();
// }
// function sayBye() {
//   console.log("Bye");
// }
// greet("John", sayBye);

// 🧠 What Happened?

// We passed sayBye into greet

// greet called it using callback()

// So sayBye() ran

// 👉 sayBye is the callback function.

// 🧠 What is a Synchronous Callback?

// A synchronous callback:

// Executes immediately, in order, and blocks the next line until finished.
// code wait until  the callback finishes

// It runs in the same execution flow.

// function add(a, b, callback) {
//   const result = a + b;
//   callback(result);
// }

// function display(value) {
//   console.log("Result:", value);
// }

// add(2, 3, display);
// Execution Order:

// 1️⃣ add() starts
// 2️⃣ result calculated
// 3️⃣ callback(display) runs immediately
// 4️⃣ program continues

// Everything happens line by line.
// const numbers = [1, 2, 3];

// numbers.forEach((num) => {
//   console.log(num);
// });

///*************    Asynchronous Callback  */

// console.log("Done");

// console.log("Start");

// setTimeout(function () {
//   console.log("Inside Timeout");
// }, 1000);

// console.log("End");

// Output:

// Start
// End
// Inside Timeout

// Why?

// Because setTimeout is asynchronous.

// It runs later.

// 🧠 Very Important Concept

// JavaScript is:

// Single-threaded & synchronous by default

// Callbacks do NOT automatically mean async.

// Only certain APIs (like setTimeout, fetch) make them async.

////  ------   Event Loop

/// The Event Loop is a mechanism that allows javascript to handle asynchronous operations
//  without blocking the main thread

// 📊 Complete Flow Diagram
// Call Stack Executes Sync Code
//         ↓
// Async Code Sent To Web APIs
//         ↓
// Web APIs Complete
//         ↓
// Callbacks Added To Queues
//         ↓
// Event Loop Checks:
//     1. Is Call Stack Empty?
//     2. Run All Microtasks
//     3. Run One Macrotask
//         ↓
// Repeat

// It manages:

// Call Stack

// Web APIs

// Callback Queue

// Microtask Queue

// 4 Main Parts
// 1️⃣ Call Stack

// Where functions are executed.

// Think:

// Stack = Execution area

// 2️⃣ Web APIs (Browser)

// Handles:

// setTimeout

// setInterval

// fetch

// DOM events

// These are NOT part of JavaScript engine.

// 3️⃣ Callback Queue (Macrotask Queue)

// Stores:

// setTimeout callbacks

// setInterval callbacks

// DOM event callbacks

// 4️⃣ Microtask Queue

// Stores:

// Promise .then()

// queueMicrotask

// MutationObserver

// ⚠️ Microtasks have higher priority.

// console.log("start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 1000);

// Promise.resolve().then(() => {
//   console.log("promise");
// });
// console.log("end");

// 🚀 What is Callback Hell?

// Callback Hell happens when multiple callbacks are nested inside each other, making code hard to read and maintain.

// setTimeout(() => {
//   console.log("Step 1");

//   setTimeout(() => {
//     console.log("Step 2");

//     setTimeout(() => {
//       console.log("Step 3");

//       setTimeout(() => {
//         console.log("Step 4");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// function task1(callback) {
//   setTimeout(() => {
//     console.log("Task 1 completed");
//     callback();
//   }, 1000);
// }
// function task2(callback) {
//   setTimeout(() => {
//     console.log("Task 2 completed");
//     callback();
//   }, 1000);
// }
// function task3(callback) {
//   setTimeout(() => {
//     console.log("Task 3 completed");
//     callback();
//   }, 1000);
// }

// task1(() => {
//   task2(() => {
//     task3(() => {
//       console.log("All tasks done");
//     });
//   });
// });

///// -------------Promsie---------------

/// A Promise is an object that represents the eventual completion or failure of an asynchronous operation.
//A Promise is an object that represents a value that will be available in the future.

// function task1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("task1 completed");
//       resolve();
//     }, 1000);
//   });
// }
// function task2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 2 completed");
//       resolve();
//     }, 1000);
//   });
// }

// function task3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 3 completed");
//       resolve();
//     }, 1000);
//   });
// }

// task1()
//   .then(() => task2())
//   .then(() => task3())
//   .then(() => console.log("all tasks done"));

////////////////     What is an Async Function?

// An async function is a function that always returns a Promise.

// Why Do We Use Async?

// To use await inside the function.

// 🧠 What is await?

// await pauses the function until a Promise finishes.

// async function getData() {
//   try {
//     const response = await fetch("https://api.example.com/data");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("error occurred", error);
//   }
// }
// getData();

// Call Stack      Web APIs          Callback Queue
// ---------------------------------------------------
// console.log
// setTimeout ---> Timer (2s)
//                 |
//                 ↓
//             (after 2s)
//                     →  callback ready
//                                |
// Event Loop checks -------------|
// If stack empty → move to stack

// what is falsy value

//  false
//  0
//  ""
//  null
//  undefined
//  NaN

///Difference Between || and ?? (Important)
// let value = 0;

// console.log(value || 100); // 100 ❌
// console.log(value ?? 100); // 0 ✅

// why ?
// * || treats 0 as FileSystemDirectoryHandleAsyncIterator*
// * ?? (nullish coalescing) only treats null and undefined as nullish

// Use:

// || for general truthy fallback.

// ?? when 0 or "" should be allowed.

////**************  And Operator */

// A && B
// → If A is falsy → return A
// → If A is truthy → return B

//------------------->  Nullish Coalescing Operator

//  The nullish coalescing opearator(??) returns the right side value only if the left side is null
// or undefined

// A ?? B
// 👉 If A is null or undefined → return B
// 👉 Otherwise → return A
// console.log(null ?? 100);        // 100
// console.log(undefined ?? 50);    // 50
// console.log(0 ?? 10);            // 0
// console.log("" ?? "Hello");      // ""

// 3️⃣ Why Do We Need It?

// Because || treats many values as falsy.

// Example:

// let value = 0;

// console.log(value || 100);  // 100 ❌
// console.log(value ?? 100);  // 0 ✅

// || replaces 0
// ?? keeps 0

//-------------------> Template Literal----------------

// A template literal is a special type of string  introduced in ES6
// use backticks(``) instead  of quotes
// Supports string interpolation using ${}
// allow multi-line strings without escape characters

//      `My name is ${name} and I am ${age} years old.`;

//    "My name is " + name + " and I am " + age + " years old."

////---------- Enhanced Object Litearls ----------

// Enhanced Object Literals are improvements introduced in ES6 (ECMAScript 2015) that make object creation:

// Shorter

// Cleaner

// More powerful

// More readable

// 1️⃣ Property Shorthand
// ❌ Before ES6
// let name = "John";
// let age = 25;

// let user = {
//   name: name,
//   age: age
// };

// ✅ ES6 Enhanced Version
// let user = {
//   name,
//   age
// };

// If variable name and property name are same → no need to repeat.

// 2️⃣ Method Shorthand
// ❌ Before ES6
// let user = {
//   greet: function() {
//     console.log("Hello");
//   }
// };

// ✅ ES6 Version
// let user = {
//   greet() {
//     console.log("Hello");
//   }
// };

// Cleaner syntax.

////   ------------> what is Coercion----------------->

// Coercion means automatic type conversion
/// when javascript converts a value to a string, it is called String Coercion

// Javascript is a dynamically typed language so it automatically converts types when needed

// 1️⃣ When Does String Coercion Happen?

// String coercion happens when:

// Using + with a string

// Using template literals

// Using String() function

// Calling .toString()

// Concatenating values

// 2️⃣ Using + Operator (Most Common)

// If one operand is a string → JS converts the other to string.

// Example:
// console.log("5" + 2);

// Output:

// "52"

// What happened?

// JS converts 2 → "2"
// Then joins → "52"

// 3️⃣ Template Literals
// let age = 25;
// console.log(`I am ${age}`);

// JS automatically converts 25 → "25"

///f

// 🧠 1️⃣ First: Memory Model in JavaScript

// JavaScript stores data in:

// 🟢 Stack

// Primitives (number, string, boolean, null, undefined, bigint, symbol)

// Stored directly

// 🔵 Heap

// Objects

// Arrays

// Functions

// Variables store:

// Value (for primitives)

// Reference (memory address for objects)

// let obj1 = { name: "John" };
// let obj2 = obj1;
// obj2.name = "mike";
// console.log(obj1.name);// Mike

// Why?

// Memory view:

// Heap:
// { name: "John" }

// Stack:
// obj1 → reference to heap
// obj2 → same reference

// No copy happened. Both point to same object.

///-------------------> Shallow Copy-------------------->

//// Copies only the first level of properties
/// nested objects still share references

// let obj1 = {
//   name: "John",
//   address: {
//     city: "Delhi",
//   },
// };

// let obj2 = { ...obj1 }; /// shallow copy

// obj2.name = "mike";
// obj2.address.city = "mumbai";
// console.log(obj1.name); // John ✅
// console.log(obj1.address.city); // Mumbai ❌ (changed!)

// Why?

// Because:

// name is primitive → copied by value

// address is object → copied by reference

// So both obj1 and obj2 share same address.

/////--------------------------> Deep Copy ------------------------->

// Recursively copies all nested objects and arrays
//  no shared reference anywhere

// let user1 = {
//   name: "John",
//   address: {
//     city: "Delhi",
//   },
// };
// let user2 = structuredClone(user1);
// user2.address.city = "Mumbai";

// console.log(user2.address.city);
// console.log(user1.address.city);

// 🔥 What is happening?
// 1️⃣ structuredClone(user1)

// This creates a deep copy of user1.

// That means:

// It copies name

// It also copies the nested address object

// user2.address is a completely new object in memory

// So now:

// user1.address !== user2.address

// They are different objects.

// 2️⃣ Changing user2.address.city
// user2.address.city = "Mumbai";

// You are modifying only user2's address.

// ✅ Output
// Mumbai
// Delhi

// Why?

// user2.address.city → "Mumbai"

// user1.address.city → still "Delhi"
// (because deep copy created separate memory)

////--------------------->  Pass by Value means  ----------------->

/// When a varibles is passed to a function  , a copy of its value is passed
//  not the original varible itself
// so change inside the fuction do not affect the original varible

// let a = 10;
// let b = a;

// b = 20;

// console.log(a); // 10
// console.log(b); // 20

// function change(x) {
//   x = 20;
// }

// let a = 10;
// change(a);

// console.log(a);

// 🧠 Why?

// Memory:

// Stack:

// a → 10
// x → 10 (copy)

// When inside function:

// x = 20

// Only x changes.

// a remains 10.

/////-----------   Pass by reference---------------------

/// The function receives the actual memory location of the varibles .
/// Any change inside the function directly changes the original variable

// let obj1 = { name: "John" };
// let obj2 = obj1;

// obj2.name = "Peter";

// console.log(obj1.name); // Peter

// 📌 Is JavaScript Pass by Reference?

// ❌ No. JavaScript is NOT pass by reference.

// Object Example (Looks Like Pass by Reference)
// function change(obj) {
//   obj.name = "Mike";
// }

// let user = { name: "John" };

// change(user);

// console.log(user.name); // Mike

// Why did it change?

// Because:

// Heap:
// { name: "John" }

// Stack:
// user → ref A
// obj  → ref A (copy of reference)

// Both point to the same object in memory.

// So modifying a property changes the same object.

// 3️⃣ Proof That JS Is NOT Pass by Reference

// If JS were true pass-by-reference, this would work:

// function change(obj) {
//   obj = { name: "David" };
// }

// let user = { name: "John" };

// change(user);

// console.log(user.name);

// Output:

// John\\

////---------  first Class Function ------------>

/// Function are treated like normal values

///   1   Be assigned to variables
//   2  Be passed by arguments
//   3  Be return from other functions
/// 4   Be stored in objects or arrays

/////  1️⃣ Assign Function to a Variable

// const greet= function(){
//     console.log("Hello")

// }
//  greet()

// 2️⃣ Pass Function as Argument (Callback)
// function sayHello() {
//   console.log("Hello");
// }

// function execute(fn) {
//   fn();
// }

// execute(sayHello);

// We passed sayHello as a value.

// This is how callbacks work.

// 3️⃣ Return Function from Another Function
// function outer() {
//   return function () {
//     console.log("Inside returned function");
//   };
// }

// const result = outer();
// result();

// This is used in:

// Closures

// Function factories

// Currying

// Store Function Inside Object
// const user = {
//   name: "John",
//   greet: function () {
//     console.log("Hi");
//   },
// };

// user.greet();

// Here greet is just a function stored as a property.

///-------------  Pure Functions--------------

// A pure function  is a function that  Always return  the same output for the same Input , Has no side effects
// 1️⃣ Same Input → Same Output
// function add(a, b) {
//   return a + b;
// }

// add(2, 3); // 5
// add(2, 3); // 5

// No matter how many times you call it with 2, 3, result is always 5.

///-----------------  Higher Order Functions--------------------------

//  A higher order functions is a function that  takes another function as  an argument  ,
// return a functions

// 1️⃣ Function as Argument
// function greet(name) {
//   return "Hello " + name;
// }

// function processUserInput(callback) {
//   const name = "John";
//   return callback(name);
// }

// processUserInput(greet);

// Here:

// processUserInput is a Higher-Order Function

// Because it accepts greet as a parameter

///------------------>   isNaN()---------------------->

///because isNaN() first converts the value to a number then check
// Interview Trick Question
// NaN === NaN

// 👉 Result: false

// Because NaN is not equal to anything, even itself.

// 🔥 Summary
// Method	Converts Type?	Recommended?
// isNaN()	✅ Yes	❌ Not ideal
// Number.isNaN()	❌ No	✅ Yes

// isNaN("10");     // false (because "10" becomes 10)
// isNaN("");       // false ("" becomes 0)
// isNaN(true);     // false (true becomes 1)
// isNaN(undefined);// true

//-------------------------DOM--------------

// The DOM is a tree structure created by the browerser from html

// Example HTML:

// <body>
//   <div>
//     <button>Click Me</button>
//   </div>
// </body>

// DOM Tree:

// body
//  └── div
//       └── button

// JavaScript can:

// Select elements

// Change content

// Add/remove elements

// Handle events

// ----------------------->  prepend()Method-------------------->

//prepend()adds an element at the beginning of a parent element

// let div = document.querySelector("div");

// let p = document.createElement("p");
// p.textContent = "Hello";

// div.prepend(p);

/// ------------Event Flow in DoM----------------->

////  When you click a button inside a div the event travel in 3 phases

// 1️⃣ Capturing Phase (Top → Down)
// 2️⃣ Target Phase
// 3️⃣ Bubbling Phase (Bottom → Up)

// 🔵 1. Capturing Phase

// Event travels from:

// window → document → body → div → button

// This is called event capturing (trickling down).

// 🟢 2. Target Phase

// The event reaches the actual element clicked.

// 🔴 3. Bubbling Phase (Default)

// After reaching target, event goes back up:

// button → div → body → document → window

///First: How Browser Loads HTML

// When browser loads a page:

// Start reading HTML (top → bottom)

// When it finds <script>

// It stops HTML parsing

// Downloads script

// Executes script

// Then continues HTML

// This is called blocking behavior

// ❌ 1. Normal Script (Blocking)
// <script src="app.js"></script>

// What happens?
// HTML parsing → STOP
// Download JS → Execute JS
// Continue HTML

// 👉 Page becomes slower
// 👉 DOM may not be fully ready

/////-------------------->   Defer (recommended for most cases)

// <script src="app.js" defer></script>
// How it works:
// Browser downloads JS in parallel

// HTML parsing continues

// Script executes after HTML is fully parsed

// Executes in order (if multiple scripts)

// Flow:
// HTML parsing + JS download (parallel)
// After HTML done → Execute JS

///---------------  Important Points About defer

///----- Does NOT block HTML parsing

///------Runs after DOM is ready
//-------Maintains script order

///------Best for DOM manipulation

// ______________________. async_____________________________
// <script src="app.js" async></script>

// How it works:

// Browser downloads JS in parallel

// As soon as download finishes → executes immediately

// Does NOT wait for HTML parsing

// Order is NOT guaranteed

// Flow:
// HTML parsing + JS download
// If download finishes → Execute immediately
// HTML parsing may pause during execution

// Important Points About async

// ✅ Does not block download
// ❌ Execution order not guaranteed
// ❌ May run before DOM is ready
// ✅ Good for third-party scripts (analytics, ads)

///    What are Getters and Setters

///  They are special methods used to:

///  1  get->read a property
//  2 set->update a property

// let user = {
//   firstName: "John",
//   lastName: "Doe",

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   },

//   set fullName(value) {
//     let parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

///dfdsfdsfdsffdfsdfsdfasfdsdfsafsdfsdfsdfsdfdfsdfsdf

////------  What is a static Method-----

// A static method belongs to the class itself

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   static greet() {
//     console.log("Hello!");
//   }
// }

// How to Call It
// User.greet();   // ✅ Works

// let u = new User("John");
// u.greet();      // ❌ Error
// Why?

// Because static methods are attached to the class, not the instance.

////   -----------   What is AJAX --------

//  AJAX= Asynchronous JavaScript and XML

// It allows the browser to:

// ✅ Send request to server
// ✅ Get data
// ✅ Update page
// ❌ Without reloading the page

// How AJAX Works
// Browser → Send HTTP Request → Server
// Server → Send Response → Browser
// Browser → Update DOM

// All happens asynchronously (non-blocking).

////////////////------------  What is an API-------------

//API=  Application Programming Interface

// it is a bridge that alllow two applications to communicate with each other

// Good 🔥 this is core JavaScript concept.

// Let’s understand clearly:

// 🧠 Variable Environment vs Lexical Environment

// These are created during execution context creation.

// 1️⃣ Lexical Environment

// A Lexical Environment is a structure that holds:

// Local variables

// Function declarations

// Block scope variables

// Reference to outer environment

// Think of it as:

// {
//   EnvironmentRecord: { variables },
//   Outer: reference to parent scope
// }

// 2️⃣ Variable Environment

// Variable Environment is almost same as Lexical Environment.

// But:

// 👉 It is mainly used to store var variables and function declarations during creation phase.

// In modern JS engines:

// Both are often merged internally.

// But conceptually they are different.

// 🔥 Simple Difference
// Lexical Environment	Variable Environment
// Stores let, const, var	Stores var only (creation phase)
// Supports block scope	Function scope only
// Used for closures	Used for hoisting
// 🔎 Example
// function test() {
//   var a = 10;
//   let b = 20;
//   const c = 30;
// }

// When test() runs:

// Creation Phase

// Variable Environment:

// a: undefined

// Lexical Environment:

// b: uninitialized (TDZ)
// c: uninitialized (TDZ)

// 🔥 Important: TDZ (Temporal Dead Zone)
// console.log(x); // undefined
// var x = 5;

// console.log(y); // ReferenceError
// let y = 10;

// Why?

// Because:

// var → stored in Variable Environment → initialized as undefined

// let → stored in Lexical Environment → uninitialized until execution reaches line

// 🧠 Visual Memory Diagram

// When function runs:

// Execution Context
//    |
//    |-- Variable Environment
//    |       a: undefined
//    |
//    |-- Lexical Environment
//            b: <TDZ>
//            c: <TDZ>

// After execution phase:

// a: 10
// b: 20
// c: 30

// 🔥 Closures Connection

// Lexical Environment keeps reference to outer environment.

// Example:

// function outer() {
//   let x = 10;

//   function inner() {
//     console.log(x);
//   }

//   return inner;
// }

// const fn = outer();
// fn();

// Why does this work?

// Because:

// inner → has reference to outer's Lexical Environment

// That’s closure.

// 🎯 Simple Rule to Remember

// Variable Environment = var

// Lexical Environment = let, const, block scope

// Lexical keeps outer reference (scope chain)

// //////   What is Execution Context

// ///  whatever Javascript  runs code , it creates a special environment called  Execution Context

// /// 2 Types of Execution Context

// ///  1  Global Execution Context

// //   Created  When JS flle start
// ///  only One global exists

// /// 2  Function Exection Context
// ///-----> Created every time a function is called Each function call _> new execution context

// ///  3   Eval Execution Context (Rare)

// ////----------------4. Two Phases of Execution Context------------

// // 🟢 Phase 1: Memory Creation Phase (Hoisting Phase)

// // JS scans the code and allocates memory.

// // What happens here?

// // Variables → stored as undefined

// // Function declarations → fully stored

// // this → determined

// // Example:
// // var a = 10;

// // function test() {
// //   console.log("Hello");
// // }

// Memory phase:

// a → undefined
// test → function definition

// Nothing executed yet.
///------------------- Promise.all()--------------------

///------> Promise.all() takes multiple promises and Run them in parallel
///------> waits for all to resolve
///---->fails immediately if any one fail

////           Promise.all([promise1, promise2, promise3])

// let p1 = Promise.resolve(10);
// let p2 = Promise.resolve(10);
// let p3 = Promise.resolve(30);

// Promise.all([p1, p2, p3]).then((results) => {
//   console.log(results);
// });

//Even if one fails → whole Promise.all() fails.

/////-----------------  Promise.any()--------------

//-----------   promise.any()----------------

// Promise.any() resolves when the first promise fulfills (success) and ignores rejections.

// It only rejects if all promises fail.

// let p1 = Promise.reject("Error 1");
// let p2 = Promise.resolve("Success 2");
// let p3 = Promise.resolve("Success 3");

// Promise.any([p1, p2, p3])
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

//    What is Promise.race()

// Promise.race()  returns a promise that settles(resolves or rejects) as soon as the first promise setles

// let p1 = new Promise(res => setTimeout(() => res("First"), 1000));
// let p2 = new Promise(res => setTimeout(() => res("Second"), 2000));

// Promise.race([p1, p2])
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

///   -----------------Promise allSettled()------------

///  promise .allSetteld () wait for all promises to finsih, no matter if they reslove or reject
// It never rejects.

// It always returns results of all promises.

// 🔹 Syntax
// Promise.allSettled([p1, p2, p3])

// ✅ Basic Example
// let p1 = Promise.resolve("Success 1");
// let p2 = Promise.reject("Error 2");
// let p3 = Promise.resolve("Success 3");

// Promise.allSettled([p1, p2, p3])
//   .then(results => console.log(results));
