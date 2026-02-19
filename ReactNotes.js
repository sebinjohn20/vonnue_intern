/// What is React

// React is a javascript library for building user interfaces,especially  single page applications
// it is created by FaceBook

/// Why react

// Component-based architecture
// virtual dom
// fast rendering
// reusable ui
///////////

/////////////-------------------> Virtual dom------------------------------

// Virtual dom is a lighweight copy of the real Dom kept in  memory by javascript
//It is mainly used by libraries like React to make UI updates faster and more efficient.

///+++++  🧠 Why Virtual DOM is Needed?
//❌ Problem with Real DOM

// The real dom is slow to update
// repaints the whole UI frequently
// cause performance issue when many updates happen

// ✅ How Virtual DOM Solves This

// Virtual DOM works in 3 main steps:

//1️⃣ Create Virtual DOM

// A copy of the real DOM is created in memory
// it is just a javascript Object
// 2️⃣ Update Virtual DOM

// When state changes, a new virtual dom created
// React compares old VDom and new VDOM

// This process is called:

// 🔍 Diffing Algorithm

// React finds:

// What exactly changed?

// Which element updated?

// What needs modification?

/// 3️⃣ Update Only Changed Part

// only the changed part is updated in the real DOM
// not the Whole page
// This is called:

// ⚡ Reconciliation

///   What is JSX

// it allows writting HTML inside Javascript
// 🧩 Example JSX
// const element = <h1>Hello Sebin</h1>;

// You write this simple line… but internally many steps happen 👇

// 🧠 STEP 1️⃣ — JSX Is Not Valid JavaScript

// Browsers do NOT understand JSX.

// So this:
// 🔄 STEP 2️⃣ — Babel Transpiles JSX

// A compiler like Babel converts JSX into normal JavaScript.

// JSX:

// <h1>Hello Sebin</h1>

// Becomes:

// React.createElement("h1", null, "Hello Sebin");

// So JSX is just syntactic sugar.

// React.createElement Creates an Object

// This function does NOT create real DOM immediately.

// It returns a JavaScript object.

// Example output:

// {
//   type: "h1",
//   props: {
//     children: "Hello Sebin"
//   }
// }

// This object is called:

// 🌳 Virtual DOM Element

// It is just a lightweight JS object.

// 🧠 STEP 4️⃣ — React Builds Virtual DOM Tree

// If you write:

// <div>
//   <h1>Hello</h1>
//   <p>Welcome</p>
// </div>

// React creates a tree like:

// div
//  ├── h1
//  │     └── "Hello"
//  └── p
//        └── "Welcome"

// But this is still in memory, not real browser DOM.

// ⚡ STEP 5️⃣ — React Compares (Diffing)

// When state changes:

// <h1>Hello Sebin</h1>

// becomes

// <h1>Hello John</h1>

// React:

// Creates new Virtual DOM

// Compares it with old Virtual DOM

// Finds what changed

// This comparison is called:

// 🔍 Diffing Algorithm

// React checks:

// Same element type?

// Same props?

// Same children?

// 🔄 STEP 6️⃣ — Reconciliation

// React now updates ONLY the changed part in the real DOM.

// In our example:

// Only text node changes.

// So instead of recreating <h1>, it just updates text.

// Very efficient 🚀

// 🖥 STEP 7️⃣ — Browser Paint

// After minimal DOM updates:

// Browser repaints only required part

// UI updates smoothly

// Full Flow Summary
// You Write JSX
//       ↓
// Babel Converts JSX → React.createElement()
//       ↓
// React.createElement returns JS Object (Virtual DOM)
//       ↓
// Virtual DOM Tree Created
//       ↓
// State Change Occurs
//       ↓
// New Virtual DOM Created
//       ↓
// Diffing (Old vs New)
//       ↓
// Reconciliation
//       ↓
// Real DOM Updated (Minimal Changes)
//       ↓
// Browser Repaint

//// --------------- What is Component-------------

// A Component is a reusable block of code that controls a part of the user interface

///----------------Props in React ----------------------------------

// In react Props are used to pass data from one component to another

// Parent Component
// function App() {
//   return <Welcome name="Sebin" age={25} />;
// }

// Child Component
// function Welcome(props) {
//   return (
//     <h1>
//       Hello {props.name}, Age: {props.age}
//     </h1>
//   );
// }

// 📦 Props Are Read-Only

// You cannot modify props inside child component ❌

// props.name = "John"; // ❌ Not allowed

// Why?

// Because React follows:

// 🔐 One-way data flow (Parent → Child only)

////---------- State----------------------

/// In react State is a built in object the stores data that can change over time inside a components
//
//📦 //Props Are Read-Only

// You cannot modify props inside child component ❌

// props.name = "John"; // ❌ Not allowed

// Why?

// Because React follows:

// 🔐 One-way data flow (Parent → Child only)

// 🏗 Basic Example
// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       {count}
//     </button>
//   );
// }

// 🔎 What happens here?

// count → current state value

// setCount → function to update state

// useState(0) → initial value is 0

// When button is clicked:

// setCount(count + 1) runs

// State updates

// Component re-renders

// UI updates

// 🔄 How State Works Internally (Step-by-Step)
// Step 1️⃣ Component Renders First Time

// count = 0

// Step 2️⃣ User Clicks Button

// setCount(1) is called

// Step 3️⃣ React Schedules Update

// React creates a new Virtual DOM

// Step 4️⃣ Diffing Happens

// Old VDOM vs New VDOM

// Step 5️⃣ Only Changed Part Updates

// Text changes from 0 → 1

// 🔁 State vs Props (Clear Difference)
// State	Props
// Internal data	 External data
// Mutable	      Read-only
// Controlled by component	 Controlled by parent
// Causes re-render	 Also causes re-render

// User Action
//      ↓
// setState()
//      ↓
// State Updated
//      ↓
// Component Re-renders
//      ↓
// Virtual DOM Diffing
//      ↓
// Real DOM Update

////-------------  useState--------------------------

// In React useState is a Hook that allows functional
// components to store and manange state

// 👉 Before Hooks, only class components could use state.
// 👉 With useState, functional components can also have state.

//📌// Important Rendering Concepts

//1️⃣ Component Function Runs Again

// Every state upadate Entire function re-executes
// but only ui differnce are updated in real DOM

// 2️⃣ React Re-renders When:

// ✔ State changes
// ✔ Props change
// ✔ Parent re-renders

//Interview Answer (Short)

// when useState updates state, React re-executes the entire components function to generate new JSX
// It then compares the new Virtual DOM with the previous one and  updates only the changed parts in the real DOM

///   ****************   useEffect  *****************

// useEffect is a hook used to  handle side effects in functional components

// 📌 What is a Side Effect?

// A side Effect is anything that:

///  Fetches data from api
// updates the DOM manually
// Uses setTimeout or setInterval
// Subscribes to events

// Uses localStorage

// Calls external services

///🔁  When Does useEffect Run?

// it runs after the components renders

// 1️⃣ Run Only Once (Like componentDidMount)
// useEffect(() => {
//   console.log("Component Mounted");
// }, []);

// Empty dependency array → runs only once after first render.

// 🟡 2️⃣ Run When State Changes
// useEffect(() => {
//   console.log("Count changed");
// }, [count]);

// Runs:

// After first render

// Every time count changes

// 3️⃣ Run On Every Render
// useEffect(() => {
//   console.log("Runs every render");
// });

// No dependency array → runs after every render.

// Execution Flow
// Render Happens
//       ↓
// Browser Paint
//       ↓
// useEffect Runs

// Important:
// 👉 useEffect runs AFTER rendering.

// 📊 Flow Chart (Initial Render)
// Component Mounts
//         ↓
// Component Function Executes
//         ↓
// JSX Returned
//         ↓
// Virtual DOM Created
//         ↓
// Real DOM Updated
//         ↓
// Browser Paint
//         ↓
// useEffect Runs

// ✅ Runs only once

//📊 Flow Chart (When count changes)

// User Clicks Button
//         ↓
// setCount()
//         ↓
// State Updated
//         ↓
// Component Re-renders
//         ↓
// New Virtual DOM Created
//         ↓
// Diffing (Old vs New)
//         ↓
// Real DOM Updated
//         ↓
// Browser Paint
//         ↓
// useEffect Runs (because count changed)

////----🧠 Interview Answer (Short)

// In React, rendering happens,first,After the DOM updates and the browers paints,useEffect run.
// If dependencies change, cleanup run first,then the few effect executes

////------------------ what is key in React -------

// In React,a key is a special attribute used to uniquely identify elements in a list.
//It helps React efficiently update the UI when items change.

// A key is unique identifier given to list elements so React can track which items changed,added or removed

// 🔍 Why Key is Important?

// React uses a diffing algorithm to compare:

// Old Virtual DOM
// vs
// New Virtual DOM

// Without keys ❌ React may:

// Re-render unnecessary elements

// Lose input focus

// Cause incorrect updates

// With keys ✅ React:

// Identifies exact item changes

// Updates only required elements

// Improves performance

// 🧠 Interview Answer (Short)

// In React, a key is a unique identifier assigned to elements in a list.
//  It helps React efficiently update the DOM by identifying which items have changed,
//  been added,
//  or removed during re-rendering.

///

// 9️⃣ Controlled vs Uncontrolled Components (React)

// In React, form inputs can be handled in two ways:

// 🔵 Controlled Components

// 🟢 Uncontrolled Components

// This concept is mainly used with form inputs like:
// <input>, <textarea>, <select></select>

///🔵 1️⃣ Controlled Component

// A controlled components is a form element whose value is controlled  by react state

// import { useState } from "react";

// function Form() {
//   const [name, setName] = useState("");

//   return (
//     <input
//       type="text"
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//     />
//   );
// }

// 2️⃣ Uncontrolled Component
// 🧠 Definition

// An uncontrolled component stores its own internal state in the DOM.

// 👉 React does NOT control the value.

// import { useRef } from "react";

// function Form() {
//   const inputRef = useRef();

//   function handleSubmit() {
//     alert(inputRef.current.value);
//   }

//   return (
//     <>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleSubmit}>Submit</button>
//     </>
//   );
// }

////   what is Reconciliation is needed
// 1️⃣ Creates a new Virtual DOM
// 2️⃣ Compares it with the previous Virtual DOM
// 3️⃣ Finds differences (diffing)
// 4️⃣ Updates only the changed parts

// This makes React fast ⚡
