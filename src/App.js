import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Redux/Action/index";

export default function App() {
  const myState = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{myState}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
