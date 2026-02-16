///  ------------------Closure--------------------

/// A function remembers varibles from its outer function even after the outer fuction has finished executing

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

// Hosting is javaScript's behavior where declarations are moved to the top of their scope during the memory creation phase before code execution

// ⚠️ Important:
// JavaScript has 2 phases when running code:

// 1️⃣ Memory Creation Phase
// 2️⃣ Code Execution Phase

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
///-----  What is TDZ---------------

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

// Because print() was  written in global scope where x=10 so when it runs, it looks for x  in the place where it was created it does not care when it  is called
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
//   greet: function () {
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

/// The Event Loop is a mechanism that allows javascript to handle asynchronous operations without blocking the main thread

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

///
