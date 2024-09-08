import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Button from "./components/Button";
import { increment, decrement, reset } from "./store/counter-slice";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function incrementHandler() {
    dispatch(increment());
  }

  function decrementHandler() {
    dispatch(decrement());
  }

  function resetHandler(){
    dispatch(reset())
  }

  return (
    <main>
      <h1>Counter App</h1>
      <div className="result">
        <h2>{counter}</h2>
      </div>
      <div className="actions">
        <Button styles="button" onClick={incrementHandler}>
          Increment
        </Button>
        <Button styles="button" onClick={decrementHandler}>
          Decrement
        </Button>
      </div>
      <Button styles='button' onClick={resetHandler}>Reset</Button>
    </main>
  );
}

export default App;
