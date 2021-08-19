import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import counterReducer from "./reducers/counter";
import isLoggedReducer from "./reducers/isLogged";
import allReducer from "./reducers/index";
import { Provider } from "react-redux";

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

//{........................................................}

// we can not do this so now we will combine the reducers
//const store = createStore(counterReducer, isLoggedReducer);

const store = createStore(allReducer);

ReactDOM.render(
  <React.StrictMode>
    {/* To give access to full store we will wrap Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
