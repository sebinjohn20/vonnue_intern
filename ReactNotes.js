/// What is React

// React is a javascript library for building user interfaces,especially
//  single page applications
// it is created by FaceBook
// 📘 Single Page Applications (SPA)

// A Single Page Application (SPA) is a web application that loads only one HTML
//  page and dynamically updates the content without reloading the
// entire page when the user interacts with it.

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

// A key is unique identifier given to list elements so React can track which items changed,
// added or removed

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

/// what is React Fiber

/// In React Fiber is the new reconcilation engine introduced in React 16
/// it is a complete rewrite of React's core algorithm
// it makes rendering faster, Smoother ,and Interruptible

/// Why React Fiber Was Introduced

// before Fiber.
// React rendering  was synchronous
//large updates could block the ui
//   -> No Ability to pause or Prioritize work

// 🔥 What Fiber Solves

// ✔ Breaks rendering work into small units
// ✔ Can pause and resume work
// ✔ Assigns priority to updates
// ✔ Improves animations and performance
// ✔ Enables Concurrent features

// 🧩 Old React vs React Fiber
// 🟥 Old React (Stack Reconciler)
// State Change
//      ↓
// Full Tree Reconciliation
//      ↓
// UI Blocked Until Done

// No interruption ❌

// 🟢 React Fiber
// State Change
//      ↓
// Work Split Into Small Units (Fibers)
//      ↓
// Can Pause
//      ↓
// Can Resume
//      ↓
// Can Prioritize Important Updates
//      ↓
// Commit Changes

// Smooth UI ✅
// 📊 Simple Flow

// State Change
// ↓
// Work split into small fibers
// ↓
// ⏸ React can pause work
// ↓
// 🎯 Browser handles urgent task (like typing)
// ↓
// ▶ React resumes remaining work
// ↓
// Commit changes to DOM
// Why React Fiber matters

// Before Fiber, React would do all this work in one go.
// If your component tree was big, the browser could freeze for a moment.

// With React Fiber, React splits this rendering work into small pieces (units of work).

// So if:

// User types in an input

// User scrolls

// User clicks a button

// React can:

// Pause rendering

// Handle the high-priority task

// Resume rendering from where it stopped

// That’s what makes the UI feel smooth and responsive

// “In React Fiber, rendering work is split into small units.
// React can pause rendering when high-priority tasks like user input come in,
// and later resume from where it stopped instead of restarting.
//  This makes the UI smooth and responsive.”

///   🧠 What is a "Fiber"?

// A fiber is :
///  A javascript Object
// ----> Represents one unit of wrok
//  -----> Represents a components

///Each component = one fiber node.

// 🔄 Fiber Two Phases

// React Fiber works in two main phases:

// 🔄 Fiber Two Phases in React

// React Fiber is the new reconciliation engine introduced in React 16.
// It breaks rendering work into small units so React can pause, resume, and prioritize updates.

// Fiber works in TWO main phases:

// 🧠 1️⃣ Render Phase (Reconciliation Phase)

// 👉 Also called: Async Phase

// 🎯 Purpose:

// Calculate what changes need to be made

// Build a new Fiber Tree

// Compare old tree vs new tree (diffing)

// ⚙️ Characteristics:

// Can be paused

// Can be interrupted

// Can be restarted

// Runs in background

// Does NOT touch the real DOM

// 🔁 What Happens Step-by-Step?

// State/Props update happens

// React schedules update

// React starts building a new Fiber tree

// It compares old vs new elements

// Marks nodes with effects:

// Placement

// Update

// Deletion

// 📊 Simple Flow
// State Update
//      ↓
// Schedule Work
//      ↓
// Build New Fiber Tree
//      ↓
// Diff Old vs New
//      ↓
// Create Effect List

// ⚡ 2️⃣ Commit Phase

// 👉 Also called: Synchronous Phase

// 🎯 Purpose:

// Apply calculated changes to the Real DOM

// ⚙️ Characteristics:

// Cannot be interrupted

// Runs very fast

// Always completes once started

// Touches real DOM

// 🔍 Commit Phase Has 3 Sub-Steps
// 1️⃣ Before Mutation

// Prepare for DOM change

// 2️⃣ Mutation

// Add/remove/update DOM nodes

// 3️⃣ Layout

// Run:

// useLayoutEffect

// componentDidMount

// componentDidUpdate

// After browser paint:

// Run useEffect

// _____________________React Fiber Two Phases

// 1️⃣ What are the two phases of React Fiber?

// Answer:

// React Fiber has two main phases:

// Render Phase (Reconciliation Phase)

// Commit Phase

// The Render phase calculates what changes need to happen.

// The Commit phase applies those changes to the real DOM.

// What Happen in  the Render Phase

// The render Phase

///---->  Builds a new Fiber tree

// ---> compares it with the previous tree
//----> Determines what  needs to change

///--->  Create an " Effect list"
// Important points:

// It is asynchronous

// It can be paused

// It can be interrupted

// It does NOT update the DOM

// 3️⃣ Why is the Render Phase interruptible?

// Answer:

// Because Fiber breaks rendering work into small units of work.

// This allows React to:

// Pause rendering

// Handle high-priority tasks (like user input)

// Resume work later

// This improves performance and responsiveness.

///  4️⃣ What happens in the Commit Phase?

//  The commmit Phase

//---> The commit phase

//---> Applies changes to the real DOM
//--->runs lifecycle methods
// Executes hooks like:

// useLayoutEffect

//useEffect

// 5️⃣ Why can’t the Commit Phase be interrupted?

// Answer:

// --->  Because once React  starts modifying the DOM, it must complete the updates to keep
// the UI consistent

// If interrupted midway:

// The DOM could be in an inconsistent state

// The UI might break

// So React ensures Commit Phase runs fully.

// 6️⃣ Which phase touches the DOM?

// Answer:

// Only the Commit Phase touches the real DOM.

// The Render Phase only prepares changes.
// 9️⃣ When does useLayoutEffect run?

// Answer:

// useLayoutEffect runs:

// During the Commit Phase

// After DOM mutation

// Before browser paint

// It blocks painting until it finishes.

// 1️⃣1️⃣ Can Render Phase run multiple times?

// Answer:

// Yes.

// React may:

// Start rendering

// Pause

// Restart

// Throw away incomplete work

// But Commit Phase always runs once per successful render.

////  What is the Effect List

///----- The Effect List is a linked list of Fiber nodes that have side effects (changes )
// that need to be applied
//   ----> during the commit phase
// Simple meaning:

// During the Render Phase, React figures out:

// Which elements need to be added

// Which need to be updated

// Which need to be deleted

// Instead of updating the DOM immediately, React stores these changes in a special list called the Effect List.
// Then in the commit phase , React goes through this list  and applies changes to the real DOM
// 🔄 Why Do We Need an Effect List?

// Imagine:

// You update state in a big application.

// Not every component changes.

// So instead of checking the entire tree again during commit:

// 👉 React keeps a list of only changed nodes
// 👉 Commit phase processes only those nodes

// This makes it very efficient.

// 📊 Visual Flow
// State Update
//      ↓
// Render Phase
//      ↓
// Mark Changed Fibers
//      ↓
// Create Effect List
//      ↓
// Commit Phase
//      ↓
// Apply Changes to DOM

////-------------  What is context API --------------------

// ----> The Context API is feature in React that allows you to share data globally across components without
//  passing props manually  at every level
//------>  It sloves the problem of prop drilling

/// Prop drilling happens when you pass data from a parent component do deeply nested child
//  components through many intermediate components that don't need the data

// ⚙️ How Context API Works

// It has three main parts:

// createContext()

// Provider

// useContext() (or Consumer)

// 🏗 Step-by-Step Example
// 1️⃣ Create Context
// import { createContext } from "react";

// export const ThemeContext = createContext();
// 2️⃣ Provide Value
// <ThemeContext.Provider value="dark">
//   <Child />
// </ThemeContext.Provider>
// 3️⃣ Consume Value
// import { useContext } from "react";

// const theme = useContext(ThemeContext);

// Now any component inside the Provider can access "dark" without props.

//

// 1️⃣ Does Context replace Redux?

// No
///---> Context is for passing data
// Redux(or other libraries) is for complex  state management
// 2️⃣ Does Context cause re-renders?

// Yes.

// When the Provider’s value changes:

// All consuming components re-render.

// 3️⃣ Is Context global?

// Not exactly.

// It is scoped to where the Provider is placed.

///////////////-----------------------------🔄 Render Concept in useContext (React)------------------

///  When the Provider value changes,all components using useContext for that context will re-render

// const ThemeContext = createContext();

// function App() {
//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={theme}>
//       <Child />
//     </ThemeContext.Provider>
//   );
// }

// function Child() {
//   const theme = useContext(ThemeContext);
//   console.log("Child rendered");
//   return <div>{theme}</div>;
// }

// 🔄 What Happens During Render?

// Step 1️⃣ Initial Render

// Provider gives "light"

// Child reads context

// Child renders

// Step 2️⃣ setTheme("dark")

// Provider value changes

// React marks all consumers

// Child re-renders

// React does reference comparison on the value prop.

// If the reference changes → re-render happens.

// 🚨 Common Mistake (Object Case)
// <ThemeContext.Provider value={{ theme: "dark" }}>

// Every render creates a new object:

//   📊  Render Flow with useContext

// Provider value changes
//         ↓
// React detects context update
//         ↓
// Marks all consuming components
//         ↓
// Render Phase re-runs those components
//         ↓
// Commit Phase updates DOM

// 🎯 Interview Question & Answer
// ❓ When does a component using useContext re-render?

// Answer:

// A component using useContext re-renders whenever the Provider's value changes by reference.
// React re-renders all consuming components when the context value updates.

// 1️⃣ Does parent re-render cause consumer re-render?

// Not necessarily.

// If context value reference stays same → consumer won’t re-render due to context.

// But if parent re-renders normally → child may still re-render.

// 2️⃣ Can we prevent unnecessary re-renders?

// Yes:

// Split contexts

// Use useMemo

// Use React.memo

// Use selector-based libraries (like use-context-selector)

///----------------  What is Redux-----------------

// Redux is a global state management libray

/// it helps manage complex state in large applications

////----------> Redux has 3 main pronciples---------------->

//  1️⃣ Single Source of Truth

// The Entire application state is stored in one central objects called

// {
//   user: {...},
//   cart: [...],
//   theme: "dark"
// }

// 2️⃣ State is Read-Only

// You cannot modify state directly.

// 3️⃣ Changes are Made with Pure Functions

// State updates happen using:

///  _______________    What is useMemo in React ---------------------------

////  useMemo is a React Hook that memorizes(caches) the result of a calculation
//  so that it does  not recompute on every render

/// It is mainly used for
//  *  Heavy calculationsd
//  *  Expensive filtering /sorting

// 🔹 1️⃣ Basic Syntax
// const memoizedValue = useMemo(() => {
//    // expensive calculation
//    return computedValue;
// }, [dependencies]);
// It takes:

// A function (calculation)

// Dependency array

// 👉 It recalculates ONLY when dependencies change.

///  Why do we need useMemo?

// In React Every state change causes re-render
//  During re-render
////  ---> Component function runs again
///----------> All variables re-evaluate
///--------> All calculations run again

// If calculation is heavy -> Performace issue

// 🔹 With useMemo

// When text changes:

// text state change
//       ↓
// Component re-renders
//       ↓
// useMemo checks dependency
//       ↓
// count unchanged → return cached value ✅
//       ↓
// No recalculation
//       ↓
// Virtual DOM created

// With useMemo
// State change
//    ↓
// Component executes
//    ↓
// Dependency changed?
//    ↓        ↓
//   YES      NO
//    ↓        ↓
// Recalculate  Return cached value
// 🔵 1️⃣2️⃣ Interview Answer (Short Version)

// useMemo is a React Hook that memoizes the result of an expensive computation and recomputes it only
//  when its dependencies change. It helps optimize performance by preventing unnecessary recalculations
//   during re-renders,
//  but it does not prevent the component from re-rendering.

// 🔵 Render Flow With useMemo

// When component re-renders:

// 1️⃣ Component function runs
// 2️⃣ React checks dependency array
// 3️⃣ Compare old vs new
// 4️⃣ If same → return cached value
// 5️⃣ If changed → run calculation

// Important:

// 👉 Component still re-renders
// 👉 Only calculation is skipped

//// -------------------------  UseCallback in React-----------------

// usecallback is a React hook that memorizes (caches ) a  function so that the
// function reference does not change on every render\

// useCallback is used to memoize a function so that React does not recreate the function on every render.
// 🔹 1️⃣ Why Do We Need useCallback?

// In React:

// 👉 Every state update → Component re-renders
// 👉 On every render → All functions are recreated
// Example:

// function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     console.log("Clicked");
//   };

//   return <button onClick={handleClick}>Click</button>;
// }
// ⚠️ On every render:

// handleClick is a NEW function in memory.

// Even if logic same, reference change

// Parent re-renders
//    ↓
// Dependencies unchanged
//    ↓
// Same function reference returned
//    ↓
// React.memo sees SAME prop
//    ↓
// Child does NOT re-render ✅

///   Dependency array controls hook execution, not component re-render

///  If dependency is same, the hook does not re-execute, but the component may still re-render
// due to other state or prop changes.

// React checks dependency changes using Object.is comparison. For primitives it compares values,
// and for objects, arrays, and functions it compares references. If any dependency reference changes,
// the effect or memo recalculates.

// 🔵 Why Do We Use useCallback?

// In React:

// Every time a component re-renders:

// The component function runs again

// All functions inside it are recreated

// New function = new memory reference

// Most of the time this is fine.

// But sometimes it causes performance problems.

// 🎯 Main Reason We Use useCallback

// To keep the SAME function reference between renders.

// 🔵 1️⃣ Problem Without useCallback
// function Parent() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     console.log("clicked");
//   };

//   return <Child onClick={handleClick} />;
// }

// If count changes:

// Parent re-renders

// handleClick is recreated

// New function reference passed to Child

// If Child is wrapped with React.memo:

// const Child = React.memo(({ onClick }) => {
//   console.log("Child Rendered");
//   return <button onClick={onClick}>Click</button>;
// });

// Then:

// React compares old prop vs new prop.

// oldFunction !== newFunction

// So Child re-renders ❌
// Even though logic same.

// 🔵 2️⃣ Solution With useCallback
// const handleClick = useCallback(() => {
//   console.log("clicked");
// }, []);

// Now:

// Parent re-renders

// Same function reference returned

// Child sees same prop

// Child does NOT re-render ✅

//🔥 Interview Answer (Perfect Version)

///  We use  useCallback to memorize function reference so that they are not recreated on every render .
// This helps prevent unnecessary child re-renders when using React.memo and avoids unwanted re-execution
//  of effects when the function is part of a dependency array

///

/////////////------------------------>        React Router------------------------

// React Router is a library used in React applications to handle routing (navigation b/w pages) without
// reloading the page

// React Router helps us:

// ✔ Change URL
// ✔ Render different components
// ✔ Keep application fast
// ✔ Maintain browser history

// 1️⃣ BrowserRouter

// Wraps the entire app
// Enables routing using browser history API

// 2️⃣ Routes

// Container for all routes

// 3️⃣ Route

// Defines path and component

// 4️⃣ Link
// import { Link } from "react-router-dom";

// <Link to="/about">Go to About</Link>

// Replaces <a> tag.
// Prevents full reloa

// React Router is a routing library for React that enables navigation b/w components
//  in a single-page application without reloading the page, it uses the browser history API
// to manage URL changes and render differnt components it based on the route

// 🔥 1️⃣6️⃣ What is HOC (Higher Order Component)?

// A function that takes a component and returns a new component.

////  -------------🔥 1️⃣7️⃣ What is Lazy Loading in React?

///  components or resources are loaded only when they are needed,
//  instead of loading everything at once In React, lazy loading is mainly used to reduce initial bundle size and
// improve performance.

// 🔵 Why Do We Need Lazy Loading?

// Imagine your app has:

// Home page

// Dashboard

// Profile

// Admin panel

// Settings

// If we load everything at once:

// Huge JavaScript bundle
// ↓
// Slow initial loading
// ↓
// Bad performance

// But users may never visit Admin page.

// So why load it initially? 🤔

// Lazy loading solves this.

// 🔵 Normal Loading (Without Lazy Loading)
// import Home from "./Home";
// import Dashboard from "./Dashboard";
// import Admin from "./Admin";

// All components are bundled together.

// Even if Admin page is never visited → it is still loaded.

// 🔥 With Lazy Loading

// React provides:

// React.lazy()
// Suspense
// 🔵 Basic Example
// import React, { Suspense } from "react";

// const Admin = React.lazy(() => import("./Admin"));

// function App() {
//   return (
//     <Suspense fallback={<h2>Loading...</h2>}>
//       <Admin />
//     </Suspense>
//   );
// }

// 🔵 What is Suspense?

// Suspense:

// Shows fallback UI while loading

// Required for lazy loading

// Example:

// <Suspense fallback={<Spinner />}></Suspense>

// 🔵 Visual Comparison
// ❌ Without Lazy Loading
// User opens app
// ↓
// Loads entire application
// ↓
// Slower startup
// ✅ With Lazy Loading
// User opens app
// ↓
// Loads only required components
// ↓
// Faster startup
// ↓
// Other parts load on demand
// 🔵 Important Points

// 1️⃣ Lazy loading works only with default exports
// 2️⃣ Must wrap inside <Suspense>
// 3️⃣ Mostly used with routes
// 4️⃣ Improves performance but adds small delay when loading component

// 🔵 1️⃣ Why Suspense is Used?

// When we use React.lazy(), the component is loaded dynamically (lazy loaded).

// Example:

// const About = React.lazy(() => import("./About"));

// This means:

// The About component is NOT loaded immediately

// It loads only when needed

// It returns a Promise

// ⚠️ While loading → React needs something to show.

// That is why we use Suspense.

// ✅ Basic Example
// import React, { Suspense } from "react";

// const About = React.lazy(() => import("./About"));

// function App() {
//   return (
//     <Suspense fallback={<h2>Loading...</h2>}>
//       <About />
//     </Suspense>
//   );
// }
// 🧠 What Suspense Does

// While About is loading:

// Loading...

// After it loads:

// Actual About Component
// 🎯 In One Line

// Suspense shows a fallback UI while lazy component is loading.
///  🔥 Interview Answer (Perfect Version)

/// Lazy loading is a performance optimization  technique in React where components are loaded only when
// they are needed . it uses React.lazy and suspense to split the code into smaller units,
// reducing the initial bundle size and improving application load time.

////--------------------------- What is UseRef in React-----------------

/// Stores mutable value without Re-rendering
/// Can also be used to access DOM elements directly
// 📌 Syntax
// const ref = useRef(initialValue);

// It returns an object like:

// {
//   current: initialValue
// }

// You access value using:

// ref.current
// 🧠 Important Rule

// Updating ref.current:

// ✅ Updates value
// ❌ Does NOT re-render component

// That’s the biggest difference from useState.

// import React, { useRef, useState } from "react";

// function Counter() {
//   const countRef = useRef(0);
//   const [state, setState] = useState(0);

//   const increment = () => {
//     countRef.current++;
//     console.log("Ref value:", countRef.current);
//   };

//   return (
//     <>
//       <button onClick={increment}>Increase Ref</button>
//       <button onClick={() => setState(state + 1)}>
//         Re-render
//       </button>
//     </>
//   );
// }

// What Happens?

// Clicking "Increase Ref" updates value

// Component does NOT re-render

// Value persists between renders

//  For useRef with DOM Elements

// {
//     current: null
// }

// 1️⃣ useRef stores an object

// When you write:

// const myRef = useRef(0);

// React creates an object like:

// { current: 0 }

// And saves it inside the component.

// 2️⃣ On first render (mount)

// React creates:

// { current: 0 }

// and gives it to you.

// 3️⃣ On next render (update)

// React does NOT create a new object.

// It gives you the same object again.

// So:

// myRef === previousMyRef  // true

// Same object.

// 4️⃣ Why changing .current does NOT re-render?

// When you do:

// myRef.current = 5;

// You are just changing a normal object value.

// React does not know you changed it.

// You did NOT call:

// setSomething()

// So React does not re-render.

// function Example() {
//   const ref = useRef(0);

//   console.log("Rendered");

//   return (
//     <button onClick={() => ref.current++}>
//       Click
//     </button>
//   );
// }

// When you click:

// ref.current increases ✅

// But "Rendered" does NOT print again ❌

// Because React was not told to re-render
// Simple Final Meaning

// useRef stores a value

// That value stays between renders

// Changing it does NOT refresh the UI

// Because React only refreshes when state changes
////Next render return same object but only change the value not render

// 🔵 1️⃣ Access DOM Elements (Most Common Use)

// Used when you want to directly control an element.

// Example: Focus Input
// import React, { useRef } from "react";

// function Example() {
//   const inputRef = useRef(null);

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={focusInput}>Focus</button>
//     </>
//   );
// }

// ✅ Used for:

// Focus input

// Scroll to element

// Play video

// Measure element size

////////////////---------------------------------  Use reducer in React-------------------------

///------------> useReducer is a  react hook used to manage complex state logic
///----> useReducer is used when state logic  becomes complex or when the next state depends on the previous one

// 🔵 Basic Syntax
// const [state, dispatch] = useReducer(reducer, initialState);

// state → current state

// dispatch → function to update state

// reducer → function that decides how state changes

// initialState → starting value

// import React, { useReducer } from "react";

// const initialState = 0;

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// function Counter() {
//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <h2>{count}</h2>
//       <button onClick={() => dispatch({ type: "increment" })}>
//         +
//       </button>
//       <button onClick={() => dispatch({ type: "decrement" })}>
//         -
//       </button>
//     </>
//   );
// }

// How It Works

// 1️⃣ User clicks button
// 2️⃣ dispatch() is called
// 3️⃣ Action is sent to reducer
// 4️⃣ Reducer returns new state
// 5️⃣ React re-renders component

////

////------------------- What are the Lifecycle Methods in React-----------------

// Lifecycle methods are special methods in  class components of react that run at different stages of a component's life

///---------> Component has three main phases:

// 1️⃣ Mounting (component is created and inserted into the DOM)
// 2️⃣ Updating (component is re-rendered due to changes in props or state)
// 3️⃣ Unmounting (component is removed from the DOM)

// Mapping: Class → useEffect
// Class Lifecycle Method	useEffect Replacement
// componentDidMount	useEffect(() => {}, [])
// componentDidUpdate	useEffect(() => {}, [dependency])
// componentWillUnmount	return () => {} inside useEffect
// ✅ useEffect Version
// useEffect(() => {
//   console.log("Mounted");
// }, []);

// 👉 Empty dependency array [] means:

// Run only once after first render (like mounting)

// ✅ useEffect Version
// useEffect(() => {
//   console.log("Count changed");
// }, [count]);

// 👉 It runs whenever count changes.

// ✅ useEffect Version
// useEffect(() => {
//   return () => {
//     console.log("Cleanup");
//   };
// }, []);

// 👉 The returned function runs when:

// Component unmounts

// Before next effect runs

///  In functional components, lifecycle methods are  replaced  using useEffect , where
//dependency array controls when the effects run and cleanup functions handles unmounting

// 4️⃣ How to Prevent Unnecessary Re-renders?
// ✅ 1. React.memo

// Prevents child re-render if props don’t change.

// ✅ 2. useCallback

// Memoizes function reference.

// ✅ 3. useMemo

// Memoizes computed value.

// ✅ 4. Proper key usage
// ✅ 5. Avoid inline object/array creation

// 5️⃣ What is Suspense?

// In React, Suspense lets you show fallback UI while waiting for something.

// Main use cases:

// Code splitting (React.lazy)

// Data fetching (with concurrent features)

//🔵 React.memo – Component-Level Optimization

//-----> it prevents a components from re-rendering if its props haven't changed
// When parent re-renders:

// React checks previous props

// Compares them with new props (shallow comparison)

// If equal → skips rendering

// If different → re-renders

// 🔹 When React.memo Fails

// This will re-render:

// <Child data={{ name: "John" }} />

// Why?

// Because { name: "John" } creates a new object every render.
// Reference changes → React thinks props changed.

// 🟢 useMemo – Value-Level Optimization
// 🔹 What it does

// It memoizes (stores) a computed value.

// const result = useMemo(() => {
//   return expensiveFunction(data);
// }, [data]);

// If data doesn’t change:

// It returns the previous stored value

// Does NOT run function again

//🔵 Step-by-Step Internal Working of useMemo

// Let’s use this example:

// const value = useMemo(() => {
//   return count * 2;
// }, [count]);

// 🟢 First Render
// Step 1: React calls  the component function
// Step 2: it reach useMemo
// step 3 : Since it's first render
//No previous memo exists

//React runs the function

//count * 2

// Step 4:

// React stores inside hook memory:

// {
//   memoizedValue: result,
//   dependencies: [count]
// }
// Step 5:

// Returns the computed value.

// 🔵 Second Render (State Changed Somewhere Else)

// Now suppose another state updates:

// setText("hello")

// Component re-renders.

// Step 1:

// React calls component again.

// Step 2:

// It reaches the same useMemo call position.

// React retrieves previous hook memory:

// previousDeps = [count]
// previousValue = result
// Step 3:

// React compares dependency arrays.

// Comparison is:

// Object.is(oldDep[i], newDep[i])

// For each dependency.

// Case A: Dependency did NOT change

// If:

// oldCount === newCount

// React:

// Skips executing function

// Returns previousValue

// 🚀 No recalculation.

// Case B: Dependency changed

// If:

// oldCount !== newCount

// React:

// Executes function again

// Stores new value

// Updates dependency array

// 🔥 Important: Dependency Comparison is Shallow

// If you pass:

// useMemo(() => {}, [obj])

// React checks:

// oldObj === newObj

// Not deep comparison.

// If new object reference → recalculates.

// 🔵 What is useReducer?

// It’s a hook for managing complex state logic.

// 🧩 Example Comparison
// 🔹 With useState
// const [count, setCount] = useState(0);

// const increment = () => setCount(count + 1);
// const decrement = () => setCount(count - 1);
// const reset = () => setCount(0);

// Still manageable.

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return { count: 0 };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <h2>{state.count}</h2>
//       <button onClick={() => dispatch({ type: "increment" })}>
//         +
//       </button>
//       <button onClick={() => dispatch({ type: "decrement" })}>
//         -
//       </button>
//       <button onClick={() => dispatch({ type: "reset" })}>
//         Reset
//       </button>
//     </>
//   );
// }

//// React fiber Architecture

// react Fiber is the new reconciliation engine introduced in React 16
// It completely rewrote React's core algorithm to make rendering faster, interrupitble and more responisve

//🚨 Why Fiber Was Introduced?

//Before Fiber (React 15 and earlier):

//  ---> Rendering was Synchronous
//---->  Once Rendering started ,it could not be paused
//---> Large UI udates could block the main thread
//----> UL felt laggy during heavy updates

///setState() → render() → reconcile() → update DOM

// If the component tree is large, React blocks everything until it finishes.

// 👉 This caused poor performance for complex apps.

// 🧠 What is React Fiber?

// React Fiber is:

/// A reimplementation of  React's reconciliation algorithm that allow React to Split rendering
// work into small units.

// instead of doing everything in one go ,React can

// ⏸ Pause work

// ▶ Resume later

// ❌ Abort unnecessary work

// 🔄 Reuse completed work

// 🎯 Prioritize important updates (like user input)

// Old React:

// Render whole tree at once (blocking)

// Break tree into small tasks (units of work)
// Process one by one
// Yield control back to browser when needed

// 🧩 What is a Fiber?

/// A fiber is a javaScript object that represents.
///---- A component
//----  A DOM Element

///-----  Work to be done

///Each Fiber node contains:

// {
//   type,        // Component type
//   stateNode,   // DOM node
//   child,
//   sibling,
//   return,
//   pendingProps,
//   memoizedProps,
//   memoizedState
// }

// Think of Fiber as:

// A linked list version of the Virtual DOM

// 🌳 Fiber Tree Structure

// Instead of a recursive tree, Fiber uses a linked list structure:

// Each Fiber has:

// child

// sibling

// return (parent)

// Example:

// App
//  ├── Header
//  ├── Main
//  │    ├── Sidebar
//  │    └── Content
//  └── Footer

// Fiber traversal:

// App → Header → Main → Sidebar → Content → Footer

// React processes one Fiber at a time.

////⚙️ Two Phases in Fiber
///1️⃣ Render Phase (Reconciliation Phase)

////---> can be Paused
//----> Build Fiber tree
//---> Calculates changes
//--->does Not updates DOM

// This phase:

// Compares old Fiber tree vs new tree

// Creates effect list

// 2️⃣ Commit Phase

// Cannot be interrupted

// Applies changes to DOM

// Runs lifecycle methods

// Runs useEffect

// Fast and synchronous.

///⏳ How Fiber Improves Performance

// 1️⃣ Time Slicing

///React splits rendering into small chunks

// Example:

// User typing → high priority

// Data rendering → low priority

// React can pause rendering and handle typing first.

// 2️⃣ Priority Scheduling

// Fiber assigns priority levels:

// High → User input

// Medium → Animation

// Low → Data fetching UI

// 3️⃣ Concurrent Rendering
// Introduced in React 18.

// Features:

// startTransition()

// useDeferredValue()

// Automatic batching

// 🔄 How Rendering Works Internally (Step by Step)

// setState is called

// React schedules update

// Work loop starts

// React picks highest priority task

// Processes one Fiber node

// If time runs out → pause

// Resume later

// After finishing render phase → Commit phase

// DOM updates

///🎯 Why This Matters for You (Interview Point)

///"React Fiber is a reimplementation of React;s reconciliation algorithm that allows React to split
// Rendering  work into small units, Prioritize updates,pasue and resume rendering, and improves UI Responsiveness
// "

///Synchronous Rendering

//  once rendering starts--> React must finsih it completely before doing anything else it
// cannot pause, cannot interrupt

// ⚙️ How It Works
// Start rendering
// ↓
// Render entire component tree
// ↓
// Commit to DOM
// ↓
// Browser gets control

// If rendering takes 200ms → UI freezes for 200ms.

///   2️⃣ Concurrent Rendering (React 18+)

//Definition

// Concurrent rendering allows

//Break rendering into small chunks

//Pause work

//Resume later

//Abandon outdated work

// Start rendering
// ↓
// Render small chunk
// ↓
// Pause if needed
// ↓
// Let browser handle input
// ↓
// Resume rendering
// ↓
// Commit when ready

///  🧪 Interview Short Answer

/// "Synchronous rendering blocks the main thread utill rendering completes
// Concurrent rendering break rendering into small units  allows interruption
// priorities updates and keeps the UI responsive"

///🧠 What Is Event Bubbling?

// When you click on a child element, the event first runs on that element
// then it "bubbles up" to its parnet then to the grandparnent all the way up

// <div id="parent">
//   <button id="child">Click Me</button>
// </div>

// If you click the button:

// Button event runs

// Then parent div event runs

// Then document event runs

// The event goes inside → outside (bottom → top).

// That is event bubbling.

// 💻 JavaScript Example
// document.getElementById("parent").addEventListener("click", () => {
//   console.log("Parent clicked");
// });

// document.getElementById("child").addEventListener("click", () => {
//   console.log("Button clicked");
// });

// When you click the button, console shows:

// Button clicked
// Parent clicked

// 🛑 How to Stop Bubbling

// Use:

// event.stopPropagation();

// Example:

// document.getElementById("child").addEventListener("click", (event) => {
//   event.stopPropagation();
//   console.log("Button clicked");
// });

// Now only:

// Button clicked

// Parent will NOT run.

// 🔥 In React

// In React, bubbling works the same way.

// Example:

// <div onClick={() => console.log("Parent")}>
//   <button onClick={() => console.log("Child")}>
//     Click
//   </button>
// </div>

// Clicking button prints:

// Child
// Parent

// To stop:

// <button onClick={(e) => {
//   e.stopPropagation();
// }}></button>
// Event bubbling is when an event starts from the target element
//  and propagates upward through its parent elements.

///🔁 Event Capturing

// The events starts from the top and goes down to the target element

// 🧠 Easy Example

// HTML:

// <div id="parent">
//   <button id="child">Click Me</button>
// </div>

// If you click the button, in capturing phase:

// Document runs first

// Then parent div

// Then button

// This is the opposite of bubbling.

// 📊 Event Flow Has 3 Phases

// Whenever you click something, the browser follows 3 steps:

// 1️⃣ Capturing phase (top → down)
// 2️⃣ Target phase (actual element)
// 3️⃣ Bubbling phase (bottom → up)

// Default behavior:

// Browsers normally use bubbling

// Capturing must be enabled manually

// 💻 JavaScript Example (Capturing)

// To enable capturing, pass true as third argument:

// document.getElementById("parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent clicked");
//   },
//   true   // 👈 enables capturing
// );

// document.getElementById("child").addEventListener(
//   "click",
//   () => {
//     console.log("Button clicked");
//   },
//   true
// );

// Now when clicking button, output:

// Parent clicked
// Button clicked

// Because it goes top → down.

// ⚛️ In React

// In React, bubbling is default.

// If you want capturing in React, add Capture:

// <div onClickCapture={() => console.log("Parent Capture")}>
//   <button onClickCapture={() => console.log("Child Capture")}>
//     Click
//   </button>
// </div>

// Event propagation is the process by which an event travels through the
// DOM in three phases:
//  capturing, target, and bubbling.
