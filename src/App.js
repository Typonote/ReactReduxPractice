import "./App.css";
import Counter from "./Components/Counter";
import Todos from "./Components/Todos";

function App() {
  return (
    <div className="App">
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
