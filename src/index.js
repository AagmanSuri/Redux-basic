import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import { createStore } from "redux";

// //Store ==> GLOBALIZED STATE

// //Action INCREMENT   (Describes what you whant to do )

// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };
// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// //Reducer
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// let store = createStore(counter);

// //Display it in the console

// store.subscribe(() => console.log(store.getState()));

// //Dispatch

// store.dispatch(increment());
// store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
