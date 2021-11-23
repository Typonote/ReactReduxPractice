import "./App.css";
import Todos from "./Components/Todos";
import CounterContainer from "./Containers/CounterContainer";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
