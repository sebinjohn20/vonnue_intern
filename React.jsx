// import React, { useRef, useState } from "react";
// export default function App() {
//   const [name, setName] = useState("");
//   const inputRef = useRef();
//   function focus() {
//     console.log(inputRef.current);
//     inputRef.current.focus();
//   }
//   return (
//     <>
//       <input
//         value={name}
//         ref={inputRef}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <div>My name is {name}</div>
//       <button onClick={focus}> focus</button>
//     </>
//   );
// }

import { useState } from "react";

// import React, { useEffect, useRef, useState } from "react";

// export default function App() {
//   const [name, setName] = useState("");
//   const preName = useRef("");

//   useEffect(() => {
//     preName.current = name;
//   }, [name]);
//   return (
//     <>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <div>
//         My name is {name} and it used to be {preName.current}
//       </div>
//     </>
//   );
// }

// import React, { useState } from "react";

// function Child() {
//   console.log("Child Rendered");
//   return <h3>Child Component</h3>;
// }

// export default function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <Child />
//     </div>
//   );
// }

// import React, { useState } from "react";

// const Child = React.memo(() => {
//   console.log("Child Rendered");
//   return <h3>Child Component</h3>;
// });

// export default function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <Child />
//     </div>
//   );
// }

// const Child = React.memo(({ count }) => {
//   console.log("child Rendered");
//   return <h1>{count}</h1>;
// });
// function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");
//   return (
//     <div>
//       <Child count={count} />
//       <button onClick={() => setCount(count + 1)}>Increase</button>

//       <input value={text} onChange={(e) => setText(e.target.value)} />
//     </div>
//   );
// }

///dfdfdsfdsf

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

//
