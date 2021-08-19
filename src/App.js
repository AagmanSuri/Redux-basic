import "./App.css";

// to access the piece of state :
import { useSelector, useDispatch } from "react-redux";

import { increment } from "./actions";
import { decrement, login } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(login())}>Login</button>
      {isLogged && <h1>Confidential data </h1>}
    </div>
  );
}

export default App;
