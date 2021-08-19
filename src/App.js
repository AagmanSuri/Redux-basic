import "./App.css";

// to access the piece of state :
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      {isLogged && <h1>Confidential data </h1>}
    </div>
  );
}

export default App;
